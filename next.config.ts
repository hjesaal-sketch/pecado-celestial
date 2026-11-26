import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Permitir imágenes locales de la carpeta public
    unoptimized: false,
  },
};

export default nextConfig;
