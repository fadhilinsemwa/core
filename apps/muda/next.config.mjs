import { config } from 'dotenv';

// Load environment variables from .env file
config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
