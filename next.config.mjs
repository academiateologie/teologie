/** @type {import('next').NextConfig} */
const nextConfig = {
  // env: {
  //   dataset: "production",
  //   projectId: "u32a81ip",
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  experimental: {
    taint: true,
  },
};

export default nextConfig;
