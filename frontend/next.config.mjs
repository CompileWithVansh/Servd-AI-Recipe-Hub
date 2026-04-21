import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
<<<<<<< HEAD
  turbopack: {
    root: __dirname,
  },
  experimental: {
    serverComponentsHmrCache: false, // defaults to true
  },
=======
>>>>>>> 7278d51 (updated configs and frontend changes)
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.themealdb.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "*.strapiapp.com",
      },
    ],
  },
};

export default nextConfig;
