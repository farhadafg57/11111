/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '4mb',
    },
  },
  transpilePackages: ['three'],
  turbopack: {
    loaders: {
      '**/*.svg': ['@svgr/webpack'],
    },
  },
};

export default nextConfig;
