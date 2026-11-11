"use client";

import { Menu } from "lucide-react";
import Link from "next/link";

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

/** Navigation for small screens: a menu button that opens a full-width sheet. */
export function MobileNav({
  links,
  openLabel,
  title,
}: {
  links: NavLink[];
  openLabel: string;
  title: string;
}) {
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
      <SheetContent side="top" className="gap-0 pb-6">
        <SheetHeader>
          <SheetTitle className="text-sm font-normal text-muted-foreground">
            {title}
          </SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col px-4">
          {links.map(({ href, label }) => (
            <SheetClose asChild key={href}>
              <Link
                href={href}
                className="border-b border-border/60 py-4 text-2xl font-semibold tracking-tight last:border-b-0"
              >
                {label}
              </Link>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
