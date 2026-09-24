/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  turbopack: { root: __dirname },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    // Old template pages that were listed in the previous sitemap.
    return [
      { source: "/blog-details", destination: "/blog", permanent: true },
      { source: "/blog-sidebar", destination: "/blog", permanent: true },
      { source: "/signin", destination: "/contact", permanent: true },
      { source: "/signup", destination: "/contact", permanent: true },
      { source: "/error", destination: "/", permanent: true },
      { source: "/servicios/tarjetas-wallet", destination: "/wallet", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/(llms.txt|llms-full.txt)",
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
};

module.exports = nextConfig;
