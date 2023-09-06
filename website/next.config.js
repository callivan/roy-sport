/** @type {import('next').NextConfig} */

const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/run/sneakers/1/DESC',
        permanent: false,
      },
    ];
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost'],
  },

  webpack: (config) => {
    config.watchOptions = {
      ...config.watchOptions,
      poll: 800,
      aggregateTimeout: 300,
    };

    return config;
  },
};

module.exports = nextConfig;
