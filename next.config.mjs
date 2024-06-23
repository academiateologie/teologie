/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: "dkkozauci",
    NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: "ty1t3z3n",
  },
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
