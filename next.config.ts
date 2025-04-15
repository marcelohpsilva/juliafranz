/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',       // Exportação estática
  reactStrictMode: true,  // Modo estrito para React
  distDir: 'out',         // Diretório de saída
};

module.exports = nextConfig;
