import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/`, served by nginx.
  output: "export",
  // Emit `/ko/blog/index.html` instead of `/ko/blog.html` so any static server resolves paths.
  trailingSlash: true,
  // The default image optimizer needs a server, which a static export does not have.
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
