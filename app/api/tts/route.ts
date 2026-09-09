import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, voiceId = 'g5qo9W2NML9NbxhWCq3R' } = body;

    if (!text || typeof text !== 'string') {
      return NextResponse.json({ error: 'Teks narasi diperlukan' }, { status: 400 });
    }

    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        {
          error: 'MISSING_API_KEY',
          message: 'ELEVENLABS_API_KEY belum dikonfigurasi di environment server.',
        },
        { status: 401 }
      );
    }

    // Limit text length to prevent accidental massive quota consumption (max 2000 chars per clip)
    const sanitizedText = text.slice(0, 2000).trim();

    const elevenLabsRes = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': apiKey,
        },
        body: JSON.stringify({
          text: sanitizedText,
          model_id: 'eleven_multilingual_v2',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.8,
            style: 0.0,
            use_speaker_boost: true,
          },
        }),
      }
    );

    if (!elevenLabsRes.ok) {
      const errorText = await elevenLabsRes.text();
      console.error('ElevenLabs API error:', errorText);
      return NextResponse.json(
        { error: 'ELEVENLABS_ERROR', message: errorText },
        { status: elevenLabsRes.status }
      );
    }

    const audioBuffer = await elevenLabsRes.arrayBuffer();

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400',
      },
    });
  } catch (error: any) {
    console.error('TTS Route Error:', error);
    return NextResponse.json(
      { error: 'INTERNAL_ERROR', message: error.message },
      { status: 500 }
    );
  }
}
