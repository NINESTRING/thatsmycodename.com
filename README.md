# thatsmycodename.com

Personal portfolio, resume, and blog. Built with Next.js as a static export and served by nginx.

## Development

```bash
pnpm install
pnpm dev         # http://localhost:3000/ko/ or /en/
pnpm build      # writes the static site to out/
pnpm lint
```

## Image

```bash
docker build -t thatsmycodename .
docker run --rm -p 8080:8080 thatsmycodename   # http://localhost:8080/
```

Every push to `main` builds a `linux/arm64` + `linux/amd64` image and pushes it to
`ghcr.io/ninestring/thatsmycodename.com` with an immutable `YYYY.MM.DD.N` tag (Asia/Seoul date,
`N` = nth release that day). The same version is pushed as a git tag. `latest` is never published.
Deployment manifests live in the homelab GitOps repository, not here.

## Structure

- `src/app/[lang]/` — all pages, statically generated for each locale (`ko`, `en`)
- `src/i18n/` — locale list and UI string dictionaries
- `nginx/default.conf` — static file server config: `/` language redirect, caching, `/healthz`
- `src/components/ui/` — shadcn/ui components (`pnpm dlx shadcn@latest add <name>`)

There is no page at `/`. In production nginx redirects it to `/ko/` or `/en/` based on `Accept-Language`.
