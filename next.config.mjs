/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: false, // Disable to prevent React version conflicts
  // Turbopack config - empty object to use default Turbopack behavior
  turbopack: {},
}

export default nextConfig