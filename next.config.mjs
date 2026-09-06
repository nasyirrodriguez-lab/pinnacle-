/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@chakra-ui/react'],
  },
  async redirects() {
    return [
      {
        source: '/spaces',
        destination: '/pricing',
        permanent: true,
      },
      {
        source: '/solutions',
        destination: '/pricing',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
