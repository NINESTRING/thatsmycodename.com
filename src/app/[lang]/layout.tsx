import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { siteConfig } from "@/config/site";
import { locales } from "@/i18n/config";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: dict.site.title, template: `%s · ${dict.site.title}` },
    description: dict.site.description,
  };
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function RootLayout({
  children,
}: LayoutProps<"/[lang]">) {
  const dict = await getDictionary();

  return (
    // next-themes sets the theme class on <html> before hydration.
    <html
      lang={await getLocale()}
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          {/* First tab stop: jumps past the header. Visible only while focused. */}
          <a
            href="#main"
            className="sr-only rounded-full bg-background px-4 py-2 text-sm font-medium shadow-md focus:not-sr-only focus:fixed focus:top-2.5 focus:left-5 focus:z-50"
          >
            {dict.header.skipToContent}
          </a>
          <SiteHeader />
          <main id="main" className="flex-1">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
