import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
};

module.exports = {
  images: {
    qualities: [75, 85],
  },
};

export default nextConfig;
