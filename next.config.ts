/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',        // Exportação estática
  reactStrictMode: true,   // Modo estrito para React
  distDir: 'out',          // Diretório de saída
  basePath: '/nome-do-repositorio',
};

module.exports = nextConfig;
