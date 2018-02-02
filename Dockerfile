# ========================== Base Image ==========================
FROM alpine:3.4 AS base

LABEL maintainer="douglas.expalves@gmail.com"

RUN apk update && apk add --no-cache nodejs && rm -rf /var/cache/apk/*

# ========================== Build Image ==========================
FROM alpine:3.4 AS builder

RUN apk update && apk add --no-cache nodejs && mkdir /typed

COPY ./package.json ./typed/package.json

WORKDIR /typed

RUN npm install

COPY . .

RUN npm run build

# ========================== Runtime Image ==========================
FROM base AS runtime

RUN mkdir -p /typed/build

COPY ./package.json ./typed/package.json

WORKDIR /typed/

COPY --from=builder /typed/build ./build/

RUN npm install --production

ENTRYPOINT ["npm", "start"]