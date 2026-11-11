"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import type { Locale } from "@/i18n/config";

/** Links to the current page in the other language. */
export function LanguageSwitch({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const target: Locale = locale === "ko" ? "en" : "ko";
  const href = pathname.replace(/^\/[^/]+/, `/${target}`);

  return (
    <Button
      asChild
      variant="ghost"
      size="sm"
      className="rounded-full font-medium"
    >
      <Link href={href} hrefLang={target} lang={target} aria-label={label}>
        {target === "en" ? "EN" : "한국어"}
      </Link>
    </Button>
  );
}
