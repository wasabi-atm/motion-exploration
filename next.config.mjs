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
      {
        source: "/services/:slug",
        destination: "/services/:slug.html",
      },
      {
        source: "/for-whom/:slug",
        destination: "/for-whom/:slug.html",
      },
      {
        source: "/customer-stories/:slug",
        destination: "/customer-stories/:slug.html",
      },
      {
        source: "/resources/:slug",
        destination: "/resources/:slug.html",
      },
      {
        source: "/pricing/:slug",
        destination: "/pricing/:slug.html",
      },
      {
        source: "/legal/:slug",
        destination: "/legal/:slug.html",
      },
      {
        source: "/:slug",
        destination: "/:slug.html",
      },
    ];
  },
};

export default nextConfig;
