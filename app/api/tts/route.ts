import { NextRequest, NextResponse } from 'next/server';
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const ALLOWED_VOICES: Record<string, string> = {
  'id-ID-GadisNeural': 'id-ID-GadisNeural',
  'id-ID-ArdiNeural': 'id-ID-ArdiNeural',
};

const DEFAULT_VOICE = 'id-ID-GadisNeural';

function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function splitTextIntoChunks(text: string, maxLen = 2200): string[] {
  if (text.length <= maxLen) return [text];

  const sentences = text.split(/(?<=[.!?\n])\s+/);
  const chunks: string[] = [];
  let currentChunk = '';

  for (const sentence of sentences) {
    if ((currentChunk + ' ' + sentence).length <= maxLen) {
      currentChunk = currentChunk ? `${currentChunk} ${sentence}` : sentence;
    } else {
      if (currentChunk) chunks.push(currentChunk);
      if (sentence.length > maxLen) {
        for (let i = 0; i < sentence.length; i += maxLen) {
          chunks.push(sentence.slice(i, i + maxLen));
        }
        currentChunk = '';
      } else {
        currentChunk = sentence;
      }
    }
  }

  if (currentChunk) chunks.push(currentChunk);
  return chunks;
}

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    voices: [
      {
        id: 'id-ID-GadisNeural',
        name: 'Gadis (Wanita)',
        description: 'Ramah, hangat, intonasi santai seperti penyiar podcast kopi',
        gender: 'Female',
      },
      {
        id: 'id-ID-ArdiNeural',
        name: 'Ardi (Pria)',
        description: 'Tenang, jelas, artikulasi formal seperti instruktur barista',
        gender: 'Male',
      },
    ],
  });
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, voice } = body;

    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: 'Teks narasi diperlukan (text field is required)' },
        { status: 400 }
      );
    }

    const trimmed = text.trim();
    if (trimmed.length === 0) {
      return NextResponse.json(
        { error: 'Teks narasi tidak boleh kosong' },
        { status: 400 }
      );
    }

    // Safety limit: max 20,000 chars (~15-20 minutes of audio)
    const sanitizedText = trimmed.slice(0, 20000);
    const selectedVoice = ALLOWED_VOICES[voice] || DEFAULT_VOICE;

    const chunks = splitTextIntoChunks(sanitizedText, 2200);
    const tts = new MsEdgeTTS();
    await tts.setMetadata(selectedVoice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3);

    const buffers: Buffer[] = [];

    for (const chunk of chunks) {
      const escapedChunk = escapeXml(chunk);
      const audioBuffer = await new Promise<Buffer>((resolve, reject) => {
        try {
          const { audioStream } = tts.toStream(escapedChunk);
          const parts: Buffer[] = [];

          audioStream.on('data', (buf: Buffer) => {
            parts.push(buf);
          });

          audioStream.on('end', () => {
            resolve(Buffer.concat(parts));
          });

          audioStream.on('error', (err) => {
            reject(err);
          });
        } catch (err) {
          reject(err);
        }
      });

      if (audioBuffer.length > 0) {
        buffers.push(audioBuffer);
      }
    }

    tts.close();

    const fullAudio = Buffer.concat(buffers);

    if (fullAudio.length === 0) {
      return NextResponse.json(
        { error: 'Gagal membuat sintesis suara audio' },
        { status: 500 }
      );
    }

    return new Response(fullAudio, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Length': fullAudio.length.toString(),
        'Cache-Control': 'public, max-age=86400, stale-while-revalidate=604800',
      },
    });
  } catch (error: any) {
    console.error('Error synthesizing speech via Edge Neural TTS:', error);
    return NextResponse.json(
      {
        error: 'Terjadi kesalahan saat memproses suara audio',
        details: error?.message || 'Unknown error',
      },
      { status: 500 }
    );
  }
}
