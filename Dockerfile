# syntax=docker/dockerfile:1

# The exported site is plain HTML/CSS/JS and identical on every architecture,
# so the build always runs natively on the builder's platform. Only the nginx
# stage below is per-platform, and it has no RUN steps, so no emulation is needed.
FROM --platform=$BUILDPLATFORM node:26-alpine AS build
WORKDIR /app

# Install the pnpm version pinned in package.json's "packageManager" field.
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN npm install -g "$(node -p "require('./package.json').packageManager")" \
 && pnpm install --frozen-lockfile

COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN pnpm build


# Runs as a non-root user and serves plain HTTP on 8080.
FROM nginxinc/nginx-unprivileged:stable-alpine
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/out /usr/share/nginx/html
EXPOSE 8080
