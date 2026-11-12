import type { Metadata } from "next";
import Link from "next/link";

import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: `404 · ${siteConfig.name}`,
};

/**
 * 404 for any URL that matches no route. It renders outside `[lang]/layout.tsx`,
 * so the language is unknown: the page says it in both and links to both homes.
 */
export default function GlobalNotFound() {
  return (
    <html lang="ko" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          <main className="container-page flex flex-1 flex-col items-center justify-center py-20 text-center">
            <p className="text-sm font-medium text-muted-foreground tabular-nums">
              404
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              페이지를 찾을 수 없습니다
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              주소가 바뀌었거나 삭제된 페이지입니다.
            </p>
            <p lang="en" className="mt-1 text-lg text-muted-foreground">
              This page has moved or no longer exists.
            </p>
            <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
              <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
                <Link href="/ko/">홈으로 가기</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="w-full rounded-full sm:w-auto"
              >
                <Link href="/en/" lang="en">
                  Go to the home page
                </Link>
              </Button>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
