#----------------------------------------------------------------------
# cartesgouvfr-documentation : Génération d'un build statique
#----------------------------------------------------------------------
FROM node:18-alpine as builder

RUN apk add git

WORKDIR /app
COPY . .
RUN npm ci \
	&& npx @11ty/eleventy \
	&& rm -rf node_modules .git

#----------------------------------------------------------------------
# cartesgouvfr-documentation : Config d'un serveur statique avec nginx
#----------------------------------------------------------------------
FROM nginx:alpine
COPY --from=builder /app/_site /usr/share/nginx/html/
COPY .docker/nginx.conf /etc/nginx/nginx.conf

WORKDIR /app

RUN chown -R nginx:nginx /app && chmod -R 755 /app \
	&& chown -R nginx:nginx /var/cache/nginx \
	&& chown -R nginx:nginx /var/log/nginx \
	&& chown -R nginx:nginx /etc/nginx/conf.d

RUN touch /var/run/nginx.pid \
	&& chown -R nginx:nginx /var/run/nginx.pid

EXPOSE 8082

USER nginx

CMD ["nginx", "-g", "daemon off;"]