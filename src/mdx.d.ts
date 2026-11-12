// Adds the `metadata` export of a blog post to the `*.mdx` module type from `@types/mdx`.
declare module "*.mdx" {
  export const metadata: {
    title: string;
    /** One or two sentences for the post list and the meta description. */
    description: string;
  };
}
