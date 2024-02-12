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

EXPOSE 8082
