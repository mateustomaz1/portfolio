/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["next-intl"],
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
