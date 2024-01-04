/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com'
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ],
    unoptimized: true
  }
}

module.exports = nextConfig
