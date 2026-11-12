import type { Metadata } from "next";

import { PageHeader } from "@/components/page-header";
import { projects } from "@/content/projects";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return { title: dict.nav.projects, description: projects[locale].lead };
}

export default async function Page() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const content = projects[locale];

  return (
    <>
      <PageHeader title={dict.nav.projects} description={content.lead} />

      <div className="container-page pb-20 sm:pb-28">
        <nav className="flex flex-wrap gap-2">
          {content.projects.map(({ id, title }) => (
            <a
              key={id}
              href={`#${id}`}
              className="rounded-full bg-muted px-4 py-2 text-sm transition-colors hover:bg-muted/60"
            >
              {title}
            </a>
          ))}
        </nav>

        <div className="mt-10 space-y-5 sm:mt-14">
          {content.projects.map((project) => (
            <article
              key={project.id}
              id={project.id}
              className="scroll-mt-20 rounded-3xl bg-muted p-6 leading-relaxed sm:p-9"
            >
              <p className="text-sm text-muted-foreground tabular-nums">
                {project.period}
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.title}
              </h2>
              <p className="mt-1 text-muted-foreground">{project.role}</p>
              <p className="mt-5 max-w-3xl text-lg">{project.summary}</p>

              <ul className="mt-5 flex flex-wrap gap-1.5">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <dl className="mt-7 grid grid-cols-2 gap-x-6 gap-y-5 border-y border-border/60 py-6 md:grid-cols-4">
                {project.stats.map(({ label, value }) => (
                  <div key={label}>
                    <dt className="text-sm text-muted-foreground">{label}</dt>
                    <dd className="mt-1 font-semibold">{value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-7 grid gap-x-10 gap-y-8 md:grid-cols-2">
                {project.sections.map((section) => (
                  <section key={section.title}>
                    <h3 className="text-lg font-semibold tracking-tight">
                      {section.title}
                    </h3>
                    {section.problem && (
                      <p className="mt-2 text-muted-foreground">
                        <span className="font-medium text-foreground">
                          {content.problemLabel}
                        </span>{" "}
                        {section.problem}
                      </p>
                    )}
                    {section.body && <p className="mt-2">{section.body}</p>}
                    {section.bullets && (
                      <ul className="mt-2 list-disc space-y-1.5 pl-5 marker:text-muted-foreground/60">
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
