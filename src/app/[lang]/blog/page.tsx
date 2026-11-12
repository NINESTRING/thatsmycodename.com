import type { Metadata } from "next";
import Link from "next/link";

import { PageHeader } from "@/components/page-header";
import { formatPostDate, posts } from "@/content/blog";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.nav.blog, description: dict.blog.lead };
}

export default async function Page() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <>
      <PageHeader title={dict.nav.blog} description={dict.blog.lead} />

      <div className="container-page pb-20 sm:pb-28">
        <ul className="space-y-5">
          {posts.map(({ slug, date, content }) => (
            <li key={slug}>
              <Link
                href={`/${locale}/blog/${slug}/`}
                className="block rounded-3xl bg-muted p-6 leading-relaxed transition-colors hover:bg-muted/60 sm:p-9"
              >
                <time
                  dateTime={date}
                  className="text-sm text-muted-foreground tabular-nums"
                >
                  {formatPostDate(date)}
                </time>
                <h2 className="mt-2 text-2xl font-semibold tracking-tight">
                  {content[locale].metadata.title}
                </h2>
                <p className="mt-3 max-w-3xl text-muted-foreground">
                  {content[locale].metadata.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
