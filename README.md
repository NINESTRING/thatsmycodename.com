# thatsmycodename.com

Personal portfolio, resume, and blog. Built with Next.js as a static export and served by nginx.

## Development

```bash
pnpm install
pnpm dev         # http://localhost:3000/ko/ or /en/
pnpm build      # writes the static site to out/
pnpm lint
```

## Structure

- `src/app/[lang]/` — all pages, statically generated for each locale (`ko`, `en`)
- `src/i18n/` — locale list and UI string dictionaries
- `src/components/ui/` — shadcn/ui components (`pnpm dlx shadcn@latest add <name>`)

There is no page at `/`. In production nginx redirects it to `/ko/` or `/en/` based on `Accept-Language`.
