FROM node:lts-alpine3.11

WORKDIR /app

RUN apk update && apk add git && yarn global add @vue/cli

ENV HOST 0.0.0.0
EXPOSE 8080