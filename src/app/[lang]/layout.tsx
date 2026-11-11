import type { Metadata } from "next";

import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    metadataBase: new URL("https://thatsmycodename.com"),
    title: { default: dict.site.title, template: `%s · ${dict.site.title}` },
    description: dict.site.description,
  };
}

export default async function RootLayout({
  children,
}: LayoutProps<"/[lang]">) {
  return (
    <html lang={await getLocale()} className="h-full antialiased">
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
