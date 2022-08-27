/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lh3.googleusercontent.com', 'gateway.ipfscdn.io', 'localhost:3000', 'cdn.rtfkt.com', 'img.icons8.com'],
  },
}

module.exports = nextConfig