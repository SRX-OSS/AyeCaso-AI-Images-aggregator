/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
    domains: [
      "localhost",
      "vercel.app",
      "xyz.cloudfront.net",
      "res.cloudinary.com",
    ],
  },
};

module.exports = nextConfig;
