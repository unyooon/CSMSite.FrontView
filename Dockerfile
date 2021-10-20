FROM node:lts-alpine3.11

WORKDIR /app

RUN apk update && apk add git

ENV HOST 0.0.0.0
EXPOSE 8080