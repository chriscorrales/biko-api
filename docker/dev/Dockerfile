FROM node:12-alpine

RUN apk add --no-cache --virtual .gyp  python make g++

WORKDIR /app

COPY package.json yarn.lock /app/

RUN yarn

ADD . /src

EXPOSE 3000 9229

CMD yarn dev