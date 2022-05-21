FROM node:14.17.1-alpine3.12

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli@8.0.0

USER node

WORKDIR /home/node/app