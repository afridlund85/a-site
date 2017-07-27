FROM node:8.2

WORKDIR /usr/src/app

COPY package.json .
RUN npm install
COPY . .
RUN chown -R node:node /usr/src/app

USER node
