import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Newsreader } from 'next/font/google';
import './globals.css';
import { CherryEduProvider } from '@/lib/store';
import { AuthProvider } from '@/lib/auth';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Toaster } from 'sonner';

const fontSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const fontSerif = Newsreader({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'CherryEdu — Indonesian Specialty Coffee Academy',
  description:
    'Edukasi kopi komprehensif dari hulu ke hilir. Dibina oleh Cherry Coffee Roastery untuk calon barista, roaster, dan penikmat kopi Indonesia.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${fontSans.variable} ${fontSerif.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-paper-50 text-roast-950 selection:bg-cherry-100 selection:text-cherry-900">
        <AuthProvider>
          <CherryEduProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <Toaster position="bottom-right" richColors closeButton />
          </CherryEduProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
