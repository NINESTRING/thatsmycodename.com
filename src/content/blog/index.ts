import type { MDXContent } from "mdx/types";

import type { Locale } from "@/i18n/config";

import * as actEn from "./deploy-locally-with-act/en.mdx";
import * as actKo from "./deploy-locally-with-act/ko.mdx";
import * as privateRdsEn from "./private-rds-kubectl-port-forward-socat/en.mdx";
import * as privateRdsKo from "./private-rds-kubectl-port-forward-socat/ko.mdx";

/** One locale of a post: an MDX file that exports `metadata` next to its body. */
type PostModule = {
  metadata: { title: string; description: string };
  default: MDXContent;
};

export type Post = {
  /** URL segment, shared across locales. Also the name of the post's folder. */
  slug: string;
  /** Publication date, YYYY-MM-DD. */
  date: string;
  content: Record<Locale, PostModule>;
};

/**
 * All posts, newest first. To publish a post, add `<slug>/ko.mdx` and
 * `<slug>/en.mdx` in this folder and list it here.
 */
export const posts: Post[] = [
  {
    slug: "deploy-locally-with-act",
    date: "2026-11-12",
    content: { ko: actKo, en: actEn },
  },
  {
    slug: "private-rds-kubectl-port-forward-socat",
    date: "2026-11-12",
    content: { ko: privateRdsKo, en: privateRdsEn },
  },
].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string): Post | undefined =>
  posts.find((post) => post.slug === slug);

/** "2026-11-12" -> "2026.11.12", the date style used across the site. */
export const formatPostDate = (date: string): string =>
  date.replaceAll("-", ".");
