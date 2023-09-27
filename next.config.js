/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "demo.vercel.store",
      },
    ],
  },
};

module.exports = nextConfig;
