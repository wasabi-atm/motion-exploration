/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: "/index.html",
        destination: "/",
      },
    ];
  },
};

export default nextConfig;
