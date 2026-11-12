import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` writes plain HTML/CSS/JS to `out/`, served by nginx.
  output: "export",
  // Emit `/ko/blog/index.html` instead of `/ko/blog.html` so any static server resolves paths.
  trailingSlash: true,
  // The default image optimizer needs a server, which a static export does not have.
  images: { unoptimized: true },
  // The root layout lives under `[lang]`, so the 404 page is `app/global-not-found.tsx`.
  experimental: { globalNotFound: true },
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
          // These two keep every token at 4.5:1 or better on the `bg-muted` code block.
          theme: {
            light: "github-light-high-contrast",
            dark: "github-dark-default",
          },
          keepBackground: false,
          bypassInlineCode: true,
        },
      ],
    ],
  },
});

export default withMDX(nextConfig);
