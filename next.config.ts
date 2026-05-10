import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/MartinPoolService",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
