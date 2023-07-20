FROM node:16-alpine

WORKDIR /app

COPY . /app

RUN apk add --update python3 make g++\
   && rm -rf /var/cache/apk/*

RUN npm install && npm run build

EXPOSE 1234

CMD ["node", "server.js"]