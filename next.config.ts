import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["three"],
  turbopack: {
    root: path.resolve(__dirname),
  },
} as any;

export default nextConfig;
