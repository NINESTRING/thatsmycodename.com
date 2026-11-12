import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { formatPostDate, getPost, posts } from "@/content/blog";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/blog/[slug]">): Promise<Metadata> {
  const [{ slug }, locale] = await Promise.all([params, getLocale()]);
  const post = getPost(slug);
  if (!post) notFound();

  const { title, description } = post.content[locale].metadata;
  return {
    title,
    description,
    openGraph: { type: "article", title, description, publishedTime: post.date },
  };
}

export default async function Page({
  params,
}: PageProps<"/[lang]/blog/[slug]">) {
  const [{ slug }, locale, dict] = await Promise.all([
    params,
    getLocale(),
    getDictionary(),
  ]);
  const post = getPost(slug);
  if (!post) notFound();

  const { metadata, default: Body } = post.content[locale];

  return (
    <article className="container-page pt-12 pb-20 sm:pt-16 sm:pb-28">
      <div className="mx-auto max-w-3xl">
        <Link
          href={`/${locale}/blog/`}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-4" />
          {dict.blog.backToList}
        </Link>

        <header className="mt-8 border-b border-border/60 pb-8 sm:mt-10 sm:pb-10">
          <time
            dateTime={post.date}
            className="text-sm text-muted-foreground tabular-nums"
          >
            {formatPostDate(post.date)}
          </time>
          <h1 className="mt-3 text-3xl leading-tight font-semibold tracking-tight sm:text-4xl sm:leading-tight">
            {metadata.title}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {metadata.description}
          </p>
        </header>

        <div className="mt-8 text-[1.0625rem] leading-[1.8] sm:mt-10 [&>:first-child]:mt-0">
          <Body />
        </div>
      </div>
    </article>
  );
}
