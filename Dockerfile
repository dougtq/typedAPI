# ========================== Base Image ==========================
FROM alpine:3.4 AS base

LABEL maintainer="douglas.expalves@gmail.com"

RUN apk update && apk add --no-cache nodejs && rm -rf /var/cache/apk/*

# ========================== Build Image ==========================
FROM alpine:3.4 AS builder

RUN apk update && apk add --no-cache nodejs && mkdir /todo-api

COPY ./package.json ./todo-api/package.json

WORKDIR /todo-api

RUN npm install

COPY . .

RUN npm run build

# ========================== Runtime Image ==========================
FROM base AS runtime

RUN mkdir -p /todo-api/dist

COPY ./package.json ./todo-api/package.json

WORKDIR /todo-api/

COPY --from=builder /todo-api/dist ./dist/

RUN npm install --production

ENTRYPOINT ["npm", "start"]