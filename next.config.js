/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bqjgtwbqwdqhvioehvua.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      }
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  swcMinify: true,
}

module.exports = withNextIntl(nextConfig)
