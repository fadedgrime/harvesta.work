/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimize the build process
  swcMinify: true,
  
  // Configure images
  images: {
    domains: ['v0.blob.com'],
  },

  // Disable App Router's not-found handling
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
