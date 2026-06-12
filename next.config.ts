import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "docs",
  basePath: "/portfolio",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
