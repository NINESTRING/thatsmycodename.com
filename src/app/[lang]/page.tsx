import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { navItems } from "@/config/site";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export default async function HomePage() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <>
      <section className="container-page flex flex-col items-center pt-20 pb-16 text-center sm:pt-28 sm:pb-20 lg:pt-36 lg:pb-28">
        <p className="text-sm font-medium text-muted-foreground sm:text-base">
          {dict.home.eyebrow}
        </p>
        <h1 className="mt-4 max-w-4xl text-[2.5rem] leading-[1.1] font-semibold tracking-tight sm:text-6xl lg:text-7xl">
          {dict.home.heading}
        </h1>
        <p className="mt-6 max-w-xl text-lg text-balance text-muted-foreground sm:text-xl">
          {dict.home.body}
        </p>
        <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <Button asChild size="lg" className="w-full rounded-full sm:w-auto">
            <Link href={`/${locale}/projects/`}>{dict.home.primaryCta}</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full rounded-full sm:w-auto"
          >
            <Link href={`/${locale}/resume/`}>{dict.home.secondaryCta}</Link>
          </Button>
        </div>
      </section>

      <section className="container-page pb-20 sm:pb-28">
        <ul className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {navItems.map(({ key, path }) => (
            <li key={key}>
              <Link
                href={`/${locale}${path}`}
                className="group flex h-full min-h-40 flex-col justify-between gap-8 rounded-3xl bg-muted p-6 transition-colors hover:bg-muted/60 sm:p-7 md:min-h-56"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-semibold tracking-tight">
                    {dict.nav[key]}
                  </h2>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
                </div>
                <p className="text-muted-foreground">
                  {dict.home.sections[key]}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
