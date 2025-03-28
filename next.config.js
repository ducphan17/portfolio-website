/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/portfolio-website",
  assetPrefix: "/portfolio-website/",
};

module.exports = nextConfig;
