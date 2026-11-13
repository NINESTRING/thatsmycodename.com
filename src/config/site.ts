export const siteConfig = {
  name: "thatsmycodename",
  url: "https://thatsmycodename.com",
  links: {
    github: "https://github.com/NINESTRING",
    email: "koohoyn@naver.com",
  },
  /**
   * Self-hosted Umami (cookie-free visit statistics). The tracker and its collect
   * endpoint are served from this site's own origin: the Cloudflare Tunnel routes
   * `/script.js` and `/api/send` to Umami (homelab GitOps repo, cloudflared config).
   */
  analytics: {
    scriptSrc: "/script.js",
    websiteId: "055e1a35-db0d-4042-b8b6-92ce49cce226",
    /** The tracker only reports from these hostnames, so local runs stay out of the statistics. */
    domains: "thatsmycodename.com",
  },
} as const;

/** Top-level sections, in navigation order. `key` indexes `dict.nav`. */
export const navItems = [
  { key: "projects", path: "/projects/" },
  { key: "resume", path: "/resume/" },
  { key: "blog", path: "/blog/" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];
