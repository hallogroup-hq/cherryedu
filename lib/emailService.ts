/**
 * Transactional Email Service for CherryEdu
 * Supports sending subscription activation & renewal receipts.
 * Uses Resend REST API if RESEND_API_KEY is configured, or logs in development/simulated mode.
 */

interface SubscriptionEmailPayload {
  toEmail: string;
  userName: string;
  planName: string;
  cycle: 'monthly' | 'annual';
  amount: number;
  transactionId: string;
  expiresAt: string;
  isRenewal?: boolean;
}

export function generateSubscriptionEmailHtml(payload: SubscriptionEmailPayload): string {
  const formattedAmount = `Rp ${payload.amount.toLocaleString('id-ID')}`;
  const periodLabel = payload.cycle === 'annual' ? '1 Tahun Penuh' : '1 Bulan';
  const actionText = payload.isRenewal ? 'Perpanjangan Berhasil' : 'Aktivasi Berhasil';

  return `
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Konfirmasi Langganan CherryEdu Pro</title>
</head>
<body style="margin: 0; padding: 0; background-color: #140E0C; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FAF7F2;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #140E0C; padding: 40px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card Container -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #1F1614; border: 1px solid #3E2B25; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          
          <!-- Header Bar -->
          <tr>
            <td style="padding: 30px 40px; background-color: #0D0908; border-bottom: 2px solid #C49A6C; text-align: left;">
              <table role="presentation" width="100%">
                <tr>
                  <td>
                    <span style="font-family: Georgia, serif; font-size: 24px; font-weight: bold; color: #FFFFFF; letter-spacing: -0.5px;">
                      Cherry<span style="color: #E2BC8A;">Edu</span>
                    </span>
                    <span style="display: block; font-size: 10px; font-family: monospace; color: #A69287; letter-spacing: 2px; text-transform: uppercase; margin-top: 2px;">
                      Specialty Coffee Academy
                    </span>
                  </td>
                  <td align="right">
                    <span style="font-family: monospace; font-size: 10px; font-weight: bold; color: #10B981; background-color: #064E3B; border: 1px solid #059669; padding: 4px 8px; border-radius: 4px; text-transform: uppercase;">
                      ${actionText}
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 35px 40px; text-align: left;">
              <h1 style="font-family: Georgia, serif; font-size: 22px; font-weight: bold; color: #FFFFFF; margin: 0 0 16px 0; line-height: 1.3;">
                Selamat Datang di CherryEdu Pro, ${payload.userName || 'Rekan Barista'}!
              </h1>
              <p style="font-size: 14px; line-height: 1.6; color: #D1C5BD; margin: 0 0 24px 0;">
                Terima kasih atas investasinya dalam memperdalam sains dan keahlian kopi specialty. Pembayaran Anda melalui QRIS telah berhasil diverifikasi dan akses penuh ke 6 Jalur Spesialisasi kini aktif.
              </p>

              <!-- Invoice Details Box -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #160F0D; border: 1px solid #2F211C; border-radius: 8px; margin-bottom: 28px; padding: 18px 22px;">
                <tr>
                  <td style="padding: 6px 0; font-size: 12px; color: #8F7B72; font-family: monospace; text-transform: uppercase;">Nomor Transaksi</td>
                  <td style="padding: 6px 0; font-size: 12px; color: #FAF7F2; font-family: monospace; text-align: right; font-weight: bold;">${payload.transactionId}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 12px; color: #8F7B72; font-family: monospace; text-transform: uppercase;">Paket Langganan</td>
                  <td style="padding: 6px 0; font-size: 12px; color: #E2BC8A; text-align: right; font-weight: bold;">${payload.planName} (${periodLabel})</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 12px; color: #8F7B72; font-family: monospace; text-transform: uppercase;">Total Pembayaran</td>
                  <td style="padding: 6px 0; font-size: 14px; color: #10B981; font-family: monospace; text-align: right; font-weight: bold;">${formattedAmount}</td>
                </tr>
                <tr>
                  <td style="padding: 6px 0; font-size: 12px; color: #8F7B72; font-family: monospace; text-transform: uppercase;">Masa Berlaku Hingga</td>
                  <td style="padding: 6px 0; font-size: 12px; color: #FAF7F2; text-align: right;">${payload.expiresAt}</td>
                </tr>
              </table>

              <!-- Highlights -->
              <h2 style="font-family: Georgia, serif; font-size: 14px; font-weight: bold; color: #E2BC8A; margin: 0 0 12px 0; text-transform: uppercase; letter-spacing: 1px;">
                Akses Eksklusif Anda yang Telah Terbuka:
              </h2>
              <ul style="font-size: 13px; line-height: 1.7; color: #B3A49C; padding-left: 20px; margin: 0 0 30px 0;">
                <li>Seluruh 6 Jalur Spesialisasi (Barista, Roaster, Q-Grader, Home Brewer, Pasca Panen, Bisnis Kafe)</li>
                <li>Ujian Sertifikasi Resmi bertanda tangan Fahrul M.W (Passing grade 80%)</li>
                <li>Buku Induk Kredensial Digital (/verify/:token) siap diunggah ke LinkedIn</li>
                <li>Akses tak terbatas ke 15 Alat Laboratorium Seduh Kopi</li>
              </ul>

              <!-- CTA Button -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="https://edu.cherrycoffeeroastery.com/paths" target="_blank" style="display: inline-block; background-color: #8C1D2A; color: #FFFFFF; font-size: 13px; font-family: monospace; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; padding: 14px 28px; border-radius: 6px; box-shadow: 0 4px 12px rgba(140,29,42,0.4);">
                      Mulai Akses Materi Spesialisasi &rarr;
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 40px; background-color: #0D0908; border-top: 1px solid #2F211C; text-align: center;">
              <p style="font-size: 11px; color: #736259; line-height: 1.5; margin: 0 0 6px 0;">
                Email ini merupakan kwitansi transaksi digital resmi dari Cherry Coffee Roastery.
              </p>
              <p style="font-size: 10px; font-family: monospace; color: #574A43; margin: 0;">
                Cherry Coffee Roastery Academy &bull; edu.cherrycoffeeroastery.com &bull; Sukabumi & Jakarta
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

export async function sendSubscriptionEmail(payload: SubscriptionEmailPayload): Promise<{ success: boolean; messageId?: string; simulated?: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.EMAIL_FROM || 'CherryEdu <noreply@cherrycoffeeroastery.com>';

  const html = generateSubscriptionEmailHtml(payload);
  const subject = payload.isRenewal
    ? `Kwitansi Perpanjangan CherryEdu Pro: ${payload.planName}`
    : `Aktivasi Berhasil: Selamat Datang di CherryEdu Pro!`;

  if (!apiKey) {
    // Graceful simulation: log to console so developers can verify payload
    console.log(`[EmailService] Simulation: Sending subscription email to ${payload.toEmail}`);
    console.log(`[EmailService] Subject: ${subject}`);
    return { success: true, simulated: true };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: fromEmail,
        to: payload.toEmail,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('[EmailService] Resend API error:', errorText);
      return { success: false };
    }

    const data = await res.json();
    return { success: true, messageId: data.id };
  } catch (error) {
    console.error('[EmailService] Failed to send email:', error);
    return { success: false };
  }
}
