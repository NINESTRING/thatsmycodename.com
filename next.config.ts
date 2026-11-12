import createMDX from "@next/mdx";
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

// Blog posts are MDX files under `src/content/blog/`, imported by the blog routes.
// Turbopack needs plugins named as strings, with serializable options only.
const withMDX = createMDX({
  options: {
    remarkPlugins: ["remark-gfm"],
    rehypePlugins: [
      [
        "rehype-pretty-code",
        {
          // Colors come out as `--shiki-light` / `--shiki-dark`; globals.css picks one.
          theme: { light: "github-light", dark: "github-dark" },
          keepBackground: false,
          bypassInlineCode: true,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
