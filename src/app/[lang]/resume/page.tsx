import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PageHeader } from "@/components/page-header";
import { siteConfig } from "@/config/site";
import { resume, type ResumeRole } from "@/content/resume";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return { title: dict.nav.resume, description: resume[locale].lead };
}

/** One resume section: label on the left, content on the right from `md` up. */
function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="grid gap-5 border-t border-border/60 py-10 md:grid-cols-[11rem_1fr] md:gap-10 sm:py-12">
      <h2 className="text-xl font-semibold tracking-tight">{label}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function Role({ role }: { role: ResumeRole }) {
  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
        <h4 className="font-semibold">{role.title}</h4>
        <p className="shrink-0 text-sm text-muted-foreground tabular-nums">
          {role.period}
        </p>
      </div>
      <p className="mt-2 text-muted-foreground">{role.summary}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-muted-foreground/60">
        {role.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}

export default async function Page() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const content = resume[locale];
  const { labels } = content;

  return (
    <>
      <PageHeader title={dict.nav.resume} description={content.lead} />

      <div className="container-page pb-20 leading-relaxed sm:pb-28">
        <Section label={labels.summary}>
          <div className="space-y-3">
            {content.summary.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Section>

        <Section label={labels.strengths}>
          <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {content.strengths.map(({ label, text }) => (
              <div key={label}>
                <dt className="font-semibold">{label}</dt>
                <dd className="mt-1 text-muted-foreground">{text}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section label={labels.experience}>
          <div className="space-y-12">
            {content.experience.map((company) => (
              <article key={company.name}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {company.name}
                    <span className="ml-2 text-base font-normal text-muted-foreground">
                      {company.role}
                    </span>
                  </h3>
                  <p className="shrink-0 text-sm text-muted-foreground tabular-nums">
                    {company.period}
                  </p>
                </div>
                {company.note && (
                  <p className="mt-2 text-muted-foreground">{company.note}</p>
                )}
                {company.roles.length > 0 && (
                  <div className="mt-6 space-y-8 border-l border-border/60 pl-5">
                    {company.roles.map((role) => (
                      <Role key={role.title} role={role} />
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        <Section label={labels.sideProjects}>
          <div className="space-y-8">
            {content.sideProjects.map((role) => (
              <Role key={role.title} role={role} />
            ))}
          </div>
        </Section>

        <Section label={labels.skills}>
          <dl className="space-y-4">
            {content.skills.map(({ label, items }) => (
              <div key={label}>
                <dt className="font-semibold">{label}</dt>
                <dd className="mt-1 text-muted-foreground">{items}</dd>
              </div>
            ))}
          </dl>
        </Section>

        <Section label={labels.education}>
          <ul className="space-y-2">
            {content.education.map(({ period, text }) => (
              <li
                key={text}
                className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
              >
                <span>{text}</span>
                <span className="shrink-0 text-sm text-muted-foreground tabular-nums">
                  {period}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section label={labels.contact}>
          <ul className="space-y-1">
            <li>
              <a
                href={`mailto:${siteConfig.links.email}`}
                className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {siteConfig.links.email}
              </a>
            </li>
            <li>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noreferrer"
                className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {siteConfig.links.github.replace("https://", "")}
              </a>
            </li>
          </ul>
        </Section>
      </div>
    </>
  );
}
