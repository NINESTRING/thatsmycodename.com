import { notFound } from "next/navigation";
import { lang } from "next/root-params";

import { hasLocale, type Locale } from "./config";
import en from "./dictionaries/en.json";
import ko from "./dictionaries/ko.json";

/** The Korean dictionary defines the shape; other locales must match it. */
export type Dictionary = typeof ko;

const dictionaries: Record<Locale, Dictionary> = { ko, en };

/** Locale of the current route, read from the `[lang]` root segment. */
export async function getLocale(): Promise<Locale> {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}

export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()];
}
