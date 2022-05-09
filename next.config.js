/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["tailwindui.com"],
  },
  experimental: { images: { layoutRaw: true } },
};

module.exports = nextConfig;
