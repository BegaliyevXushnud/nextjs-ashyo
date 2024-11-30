import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'texnoark.ilyosbekdev.uz',
        port: '',
        pathname: '/upload/**',
      },
    ],
  },
};

export default nextConfig;
