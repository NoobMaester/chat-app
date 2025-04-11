import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: [
      'http://localhost:3000',   // Default Next.js local development server
      'http://172.17.112.1:3000', // Default Next.js Network development server
      'local-origin.dev', 
      '*.local-origin.dev',
    ],
  },
};

export default nextConfig;
