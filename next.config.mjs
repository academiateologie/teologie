/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    taint: true,
  },
  images: {
    formats: ["image/webp"],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "res.cloudinary.com",
    //     port: "",
    //     pathname: "/res.cloudinary.com/**",
    //   },
    // ],
    domains: ['res.cloudinary.com']
  },
};

export default nextConfig;
