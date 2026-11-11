import { siteConfig } from "@/config/site";
import { getDictionary } from "@/i18n/dictionaries";

export async function SiteFooter() {
  const dict = await getDictionary();

  return (
    <footer className="border-t border-border/60">
      <div className="container-page flex flex-col gap-2 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>© {siteConfig.name}</p>
        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noreferrer"
          className="transition-colors hover:text-foreground"
        >
          {dict.footer.github}
        </a>
      </div>
    </footer>
  );
}
