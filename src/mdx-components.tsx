import type { MDXComponents } from "mdx/types";

/** Element styles for MDX content, which today is the body of a blog post. */
const components: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-14 text-2xl font-semibold tracking-tight sm:text-3xl"
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="mt-10 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props) => <p className="mt-5" {...props} />,
  a: (props) => (
    <a
      className="font-medium underline decoration-muted-foreground/50 underline-offset-4 transition-colors hover:decoration-foreground"
      {...props}
    />
  ),
  strong: (props) => <strong className="font-semibold" {...props} />,
  ul: (props) => (
    <ul
      className="mt-5 list-disc space-y-2 pl-5 marker:text-muted-foreground/60"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-2 pl-5 marker:text-muted-foreground/60"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mt-5 border-l-2 border-border pl-5 text-muted-foreground [&>:first-child]:mt-0"
      {...props}
    />
  ),
  hr: () => <hr className="mt-14 border-border/60" />,
  // Inline code. Inside `pre` the block styles below undo the pill.
  code: (props) => (
    <code
      className="rounded-md bg-muted px-1.5 py-0.5 font-mono text-[0.875em] break-words"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-5 overflow-x-auto rounded-2xl bg-muted p-5 font-mono text-sm leading-relaxed [&>code]:rounded-none [&>code]:bg-transparent [&>code]:p-0 [&>code]:text-[1em] [&>code]:break-normal"
      {...props}
    />
  ),
  table: (props) => (
    <div className="mt-5 overflow-x-auto">
      <table
        className="w-full min-w-[40rem] border-collapse text-left text-[0.9375rem]"
        {...props}
      />
    </div>
  ),
  thead: (props) => <thead className="border-b border-border" {...props} />,
  tr: (props) => (
    <tr className="border-b border-border/60 align-top" {...props} />
  ),
  th: (props) => (
    <th
      scope="col"
      className="py-3 pr-5 font-medium text-muted-foreground last:pr-0"
      {...props}
    />
  ),
  // The first column names the row, so it reads as a row header.
  td: (props) => (
    <td className="py-3 pr-5 first:font-semibold last:pr-0" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
