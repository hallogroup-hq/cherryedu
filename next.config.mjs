/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverComponentsExternalPackages: ['msedge-tts', 'ws'],
  },
  images: {
    domains: ["images.unsplash.com", "avatars.githubusercontent.com"],
  },
};

export default nextConfig;
