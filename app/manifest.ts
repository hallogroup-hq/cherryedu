import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'CherryEdu — Platform & Akademi Edukasi Kopi Terlengkap di Indonesia',
    short_name: 'CherryEdu',
    description: 'Platform edukasi kopi specialty komprehensif dari hulu ke hilir berstandar SCA dan CQI. Dilengkapi 15 instrumen laboratorium seduh digital.',
    start_url: '/',
    display: 'standalone',
    background_color: '#140E0C',
    theme_color: '#140E0C',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['education', 'lifestyle', 'utilities'],
    lang: 'id',
  };
}
