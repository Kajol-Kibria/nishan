import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Static export for deployment */
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
