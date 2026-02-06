#----------------------------------------------------------------------
# cartesgouvfr-documentation : Génération d'un build statique
#----------------------------------------------------------------------
FROM node:24-alpine AS builder

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
FROM nginxinc/nginx-unprivileged:alpine-slim
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