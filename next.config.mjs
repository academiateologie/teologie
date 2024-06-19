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
    domains: ["res.cloudinary.com"],
  },
  plugins: {
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 3,
      features: {
        "custom-properties": false,
      },
    },
    cssnano: {
      preset: "default",
    },
  },
};

export default nextConfig;
