// apps/entry-point/next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/muda/:path*',
          destination: '/apps/muda/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  