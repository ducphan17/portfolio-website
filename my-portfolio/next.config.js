/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // You can keep all your existing configuration here
  output: "export", // This enables static export
};

module.exports = nextConfig;
