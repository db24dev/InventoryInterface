import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    trailingSlash: true,
    output: 'standalone',
    distDir: ".next",
    generateBuildId: async () => {
      return `build-${new Date().getTime()}`; // Forces a unique build ID to break cache
    },
};

export default nextConfig;
