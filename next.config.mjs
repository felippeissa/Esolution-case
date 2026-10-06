// No GitHub Pages o site fica em /<repo>; em dev local continua na raiz.
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = isPages ? "/Esolution-case" : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // gera HTML estático em /out
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true, // o otimizador do Next não existe em export estático
    remotePatterns: [
      { protocol: "https", hostname: "esolution.com.br", pathname: "/wp-content/uploads/**" },
    ],
  },
};

export default nextConfig;
