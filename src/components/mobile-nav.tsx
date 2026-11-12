"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { NavLink } from "@/components/nav-links";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

/**
 * Navigation for small screens: a menu button that opens a full-width sheet.
 * The link for the current section is highlighted, as in the desktop nav.
 */
export function MobileNav({
  links,
  openLabel,
  closeLabel,
  title,
}: {
  links: NavLink[];
  openLabel: string;
  closeLabel: string;
  title: string;
}) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full md:hidden"
          aria-label={openLabel}
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="top"
        className="gap-0 pb-6"
        closeLabel={closeLabel}
      >
        <SheetHeader>
          <SheetTitle className="text-sm font-normal text-muted-foreground">
            {title}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col px-4">
          {links.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <SheetClose asChild key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "border-b border-border/60 py-4 text-2xl font-semibold tracking-tight last:border-b-0",
                    !active && "text-muted-foreground",
                  )}
                >
                  {label}
                </Link>
              </SheetClose>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
