export const siteConfig = {
  name: "thatsmycodename",
  url: "https://thatsmycodename.com",
  links: {
    github: "https://github.com/NINESTRING",
  },
} as const;

/** Top-level sections, in navigation order. `key` indexes `dict.nav`. */
export const navItems = [
  { key: "projects", path: "/projects/" },
  { key: "resume", path: "/resume/" },
  { key: "blog", path: "/blog/" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];
