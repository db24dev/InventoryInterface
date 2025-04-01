import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
      protocol: "https",
      hostname: "s3-inventoryinterface.s3.us-west-1.amazonaws.com",
      port: "",
      pathname: "/**"
      }
    ]
  },
  /* config options here */
    trailingSlash: true,
    output: 'standalone',
    distDir: ".next",
    generateBuildId: async () => {
      return `build-${new Date().getTime()}`; // Forces a unique build ID to break cache
    },
};

export default nextConfig;
