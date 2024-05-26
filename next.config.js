/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
    // domains: ["cdn.sanity.io"],
    // loader: 'custom'
  },
};

module.exports = nextConfig;
