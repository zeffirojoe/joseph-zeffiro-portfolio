import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  /* config options here */
};

export default nextConfig;
