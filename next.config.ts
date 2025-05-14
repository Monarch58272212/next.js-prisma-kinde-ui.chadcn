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
<<<<<<< HEAD
        hostname: "www.facebook.com",
=======
        hostname: "scontent.fdel1-1.fna.fbcdn.net",
>>>>>>> 00d0f72f23883e23e3178aeaa32c42baabcc5ccd
        protocol: "https",
        port: "",
      },
      {
<<<<<<< HEAD
        hostname: "unsplash.com",
=======
        hostname: "scontent.fdel1-2.fna.fbcdn.net",
>>>>>>> 00d0f72f23883e23e3178aeaa32c42baabcc5ccd
        protocol: "https",
        port: "",
      },
      {
<<<<<<< HEAD
        hostname: "web.facebook.com",
=======
        hostname: "scontent.fdel1-3.fna.fbcdn.net",
>>>>>>> 00d0f72f23883e23e3178aeaa32c42baabcc5ccd
        protocol: "https",
        port: "",
      },
      {
        hostname: "scontent.fdel1-4.fna.fbcdn.net",
        protocol: "https",
        port: "",
      },
<<<<<<< HEAD
      {
        protocol: "https",
        hostname: "platform-lookaside.fbsbx.com",
      },
      {
        protocol: "https",
        hostname: "*.fbcdn.net", // wildcard subdomains like scontent.xx.fbcdn.net
      },
=======
>>>>>>> 00d0f72f23883e23e3178aeaa32c42baabcc5ccd
    ],
  },
};

export default nextConfig;
