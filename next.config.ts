import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://nest-notes.onrender.com/:path*",
      },
    ];
  },
};

export default nextConfig;
