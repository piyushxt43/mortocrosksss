/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Ensure single React instance on client
      config.resolve.alias = {
        ...config.resolve.alias,
        react: require.resolve('react'),
        'react-dom': require.resolve('react-dom'),
      }
    }
    return config
  },
}

export default nextConfig