import Link from "next/link";

import { LanguageSwitch } from "@/components/language-switch";
import { MobileNav } from "@/components/mobile-nav";
import { NavLinks } from "@/components/nav-links";
import { ThemeToggle } from "@/components/theme-toggle";
import { navItems, siteConfig } from "@/config/site";
import { getDictionary, getLocale } from "@/i18n/dictionaries";

export async function SiteHeader() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const links = navItems.map(({ key, path }) => ({
    href: `/${locale}${path}`,
    label: dict.nav[key],
  }));

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl backdrop-saturate-150">
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <Link
          href={`/${locale}/`}
          className="text-[15px] font-semibold tracking-tight"
        >
          {siteConfig.name}
        </Link>

        <div className="flex items-center gap-1">
          <NavLinks links={links} />
          <LanguageSwitch
            locale={locale}
            label={dict.header.switchLanguage}
          />
          <ThemeToggle label={dict.header.toggleTheme} />
          <MobileNav
            links={links}
            openLabel={dict.header.openMenu}
            closeLabel={dict.header.closeMenu}
            title={dict.header.menu}
          />
        </div>
      </div>
    </header>
  );
}
