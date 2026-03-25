/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/hab-cti",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
