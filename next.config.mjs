/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  experimental: {
    taint: true,
    images: {
      allowFutureImage: true,
    },
  },
  compress: true,
  swcMinify: true,
  images: {
    formats: ["image/webp"],
    // domains: ["res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
