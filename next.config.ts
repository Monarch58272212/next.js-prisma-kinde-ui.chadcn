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
        hostname: "www.facebook.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "web.facebook.com",
        protocol: "https",
        port: "",
      },
      {
        hostname: "scontent.fdel1-4.fna.fbcdn.net",
        protocol: "https",
        port: "",
      },

      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
      },
      {
        protocol: "https",
        hostname: "*.fbcdn.net", // wildcard subdomains like scontent.xx.fbcdn.net
      },
    ],
  },
};

export default nextConfig;
