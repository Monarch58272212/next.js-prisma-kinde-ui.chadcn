import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "lh3.googleusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "platform-lookaside.fbsbx.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "plus.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "avatars.githubusercontent.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "scontent.fdel1-1.fna.fbcdn.net",
        protocol: "https",
        port: "",
      },
      {
        hostname: "scontent.fdel1-2.fna.fbcdn.net",
        protocol: "https",
        port: "",
      },
      {
        hostname: "scontent.fdel1-3.fna.fbcdn.net",
        protocol: "https",
        port: "",
      },
      {
        hostname: "scontent.fdel1-4.fna.fbcdn.net",
        protocol: "https",
        port: "",
      },
    ],
  },
};

export default nextConfig;
