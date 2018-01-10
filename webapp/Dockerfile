FROM node:8-slim

RUN mkdir /app

WORKDIR /app

ADD ./app/package.json /app/package.json
# ADD ./app/package-lock.json /app/package-lock.json
ADD ./app/webpack.config.js /app/webpack.config.js
ADD ./app/src /app/src

RUN npm install

RUN NODE_ENV=production node_modules/.bin/webpack -p



CMD NODE_ENV=production node_modules/.bin/babel-node --presets react,es2015 src/server.js