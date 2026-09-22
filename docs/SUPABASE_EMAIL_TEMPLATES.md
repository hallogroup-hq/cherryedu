# Template Email Transaksional Resmi CherryEdu (Supabase Auth)

Dokumen ini berisi kode HTML template email resmi bermerek **Cherry Coffee Roastery** untuk disalin ke dashboard Supabase agar email verifikasi pendaftaran akun baru terlihat profesional, elegan, dan berbahasa Indonesia.

---

## 1. Template Konfirmasi Pendaftaran (Confirm Signup)

**Lokasi Pengaturan di Supabase:**
1. Masuk ke [supabase.com/dashboard](https://supabase.com/dashboard).
2. Pilih proyek CherryEdu Anda.
3. Di menu sidebar kiri, buka **Authentication** $\rightarrow$ **Email Templates** $\rightarrow$ **Confirm signup**.
4. **Subject**: `Konfirmasi Pendaftaran Akun CherryEdu Anda ☕`
5. Ganti seluruh isi kode pada kotak **Body (HTML)** dengan kode di bawah ini:

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Konfirmasi Akun CherryEdu</title>
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
              <span style="font-family: Georgia, serif; font-size: 24px; font-weight: bold; color: #FFFFFF; letter-spacing: -0.5px;">
                Cherry<span style="color: #E2BC8A;">Edu</span>
              </span>
              <span style="display: block; font-size: 10px; font-family: monospace; color: #A69287; letter-spacing: 2px; text-transform: uppercase; margin-top: 2px;">
                Specialty Coffee Academy Indonesia
              </span>
            </td>
          </tr>

          <!-- Body Content -->
          <tr>
            <td style="padding: 35px 40px; text-align: left;">
              <h1 style="font-family: Georgia, serif; font-size: 22px; font-weight: bold; color: #FFFFFF; margin: 0 0 16px 0; line-height: 1.3;">
                Selamat Datang di Ekosistem Kopi Specialty! ☕
              </h1>
              <p style="font-size: 14px; line-height: 1.6; color: #D1C5BD; margin: 0 0 20px 0;">
                Terima kasih telah bergabung di <strong>CherryEdu</strong>. Satu langkah lagi untuk mengaktifkan akun Anda dan mulai mengakses kurikulum <em>Foundation: Kopi dari Hulu ke Hilir (100% Gratis)</em> serta 15 instrumen laboratorium seduh presisi.
              </p>
              <p style="font-size: 14px; line-height: 1.6; color: #D1C5BD; margin: 0 0 30px 0;">
                Silakan klik tombol di bawah ini untuk memverifikasi alamat email Anda:
              </p>

              <!-- CTA Button -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 30px;">
                <tr>
                  <td align="center">
                    <a href="{{ .ConfirmationURL }}" target="_blank" style="display: inline-block; background-color: #8C1D2A; color: #FFFFFF; font-size: 13px; font-family: monospace; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; padding: 14px 32px; border-radius: 6px; box-shadow: 0 4px 12px rgba(140,29,42,0.4);">
                      Aktifkan Akun Saya &rarr;
                    </a>
                  </td>
                </tr>
              </table>

              <p style="font-size: 12px; line-height: 1.5; color: #8F7B72; margin: 0 0 12px 0;">
                Jika tombol di atas tidak dapat diklik, salin dan buka tautan berikut di browser Anda:
              </p>
              <p style="font-size: 11px; word-break: break-all; color: #E2BC8A; font-family: monospace; background-color: #160F0D; padding: 10px; border-radius: 4px; border: 1px solid #2F211C; margin: 0 0 24px 0;">
                {{ .ConfirmationURL }}
              </p>

              <hr style="border: 0; border-top: 1px solid #2F211C; margin: 24px 0;">

              <p style="font-size: 12px; color: #B3A49C; line-height: 1.5; margin: 0;">
                Salam hangat,<br>
                <strong style="color: #FFFFFF;">Fahrul M.W & Tim Cherry Coffee Roastery</strong><br>
                <span style="font-size: 11px; color: #8F7B72;">Sukabumi & Jakarta Selatan</span>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px 40px; background-color: #0D0908; border-top: 1px solid #2F211C; text-align: center;">
              <p style="font-size: 11px; color: #736259; line-height: 1.5; margin: 0 0 4px 0;">
                Tautan ini berlaku selama 24 jam. Jika Anda tidak pernah merasa mendaftar di CherryEdu, silakan abaikan email ini.
              </p>
              <p style="font-size: 10px; font-family: monospace; color: #574A43; margin: 0;">
                &copy; Cherry Coffee Roastery &bull; edu.cherrycoffeeroastery.com
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 2. Template Reset Password

**Lokasi:** **Authentication** $\rightarrow$ **Email Templates** $\rightarrow$ **Reset password**  
**Subject:** `Atur Ulang Kata Sandi CherryEdu Anda 🔐`

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Kata Sandi CherryEdu</title>
</head>
<body style="margin: 0; padding: 0; background-color: #140E0C; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #FAF7F2;">
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #140E0C; padding: 40px 10px;">
    <tr>
      <td align="center">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #1F1614; border: 1px solid #3E2B25; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          <tr>
            <td style="padding: 30px 40px; background-color: #0D0908; border-bottom: 2px solid #C49A6C;">
              <span style="font-family: Georgia, serif; font-size: 24px; font-weight: bold; color: #FFFFFF;">
                Cherry<span style="color: #E2BC8A;">Edu</span>
              </span>
            </td>
          </tr>
          <tr>
            <td style="padding: 35px 40px; text-align: left;">
              <h1 style="font-family: Georgia, serif; font-size: 20px; font-weight: bold; color: #FFFFFF; margin: 0 0 16px 0;">
                Permintaan Atur Ulang Kata Sandi
              </h1>
              <p style="font-size: 14px; line-height: 1.6; color: #D1C5BD; margin: 0 0 24px 0;">
                Kami menerima permintaan untuk mereset kata sandi akun CherryEdu Anda. Klik tombol di bawah ini untuk membuat kata sandi baru:
              </p>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 24px;">
                <tr>
                  <td align="center">
                    <a href="{{ .ConfirmationURL }}" target="_blank" style="display: inline-block; background-color: #8C1D2A; color: #FFFFFF; font-size: 13px; font-family: monospace; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; text-decoration: none; padding: 14px 28px; border-radius: 6px;">
                      Reset Kata Sandi Saya &rarr;
                    </a>
                  </td>
                </tr>
              </table>
              <p style="font-size: 11px; color: #8F7B72; line-height: 1.5; margin: 0;">
                Jika Anda tidak meminta perubahan kata sandi ini, akun Anda tetap aman dan Anda dapat mengabaikan email ini.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
```

---

## 3. Rekomendasi Custom SMTP (Resend)

Secara bawaan, server email gratisan Supabase dibatasi pengiriman maksimal **3-4 email per jam**. Untuk performa tanpa batas kuota dan anti-masuk-spam:

1. Daftar gratis di [resend.com](https://resend.com) (Gratis 3.000 email per bulan).
2. Dapatkan API Key dan SMTP credentials dari Resend.
3. Di Supabase Dashboard, buka **Project Settings $\rightarrow$ Authentication $\rightarrow$ SMTP Settings**:
   - **Sender email**: `noreply@cherrycoffeeroastery.com` (atau email domain Anda)
   - **Sender name**: `CherryEdu Academy`
   - **Host**: `smtp.resend.com`
   - **Port**: `465` atau `587`
   - **User**: `resend`
   - **Password**: `[API_KEY_RESEND_ANDA]`
