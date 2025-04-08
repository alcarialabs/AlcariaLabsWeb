/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "alcarialabs.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
