#----------------------------------------------------------------------
# cartesgouvfr-documentation : Génération d'un build statique
#----------------------------------------------------------------------
FROM node:24-alpine@sha256:116b800c3754b440ee0aa3ed2f20f5bf3d99a554bfd9adeea09ea8017f6e85f5 AS builder

RUN apk add git

WORKDIR /app
COPY . .

RUN npm ci \
	&& SITE_ENV=production npx @11ty/eleventy --pathprefix=/aide \
	&& npx pagefind --site _site/ --output-subdir \"_pagefind\" \
	&& rm -rf node_modules .git

#----------------------------------------------------------------------
# cartesgouvfr-documentation : Config d'un serveur statique avec nginx
#----------------------------------------------------------------------
FROM nginx/nginx-unprivileged:alpine-slim@sha256:75e85a09b0f25bd46d49a9fd85589ffa70b0459c8ed5ee0dc6596fd642e1f829
COPY --from=builder /app/_site /usr/share/nginx/html/
COPY .docker/nginx.conf /etc/nginx/nginx.conf
COPY .docker/entrypoint.sh /entrypoint.sh

USER root
RUN chmod 755 /entrypoint.sh

EXPOSE 8082

USER nginx

ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
	CMD test -s /tmp/env.js || exit 1