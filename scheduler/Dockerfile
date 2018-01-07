FROM node:8-slim


# RUN mkdir /app

# use nodemon for development
RUN npm install --global nodemon
RUN npm install --global babel-cli

# use cached layer for node modules
ADD app/package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /app && cp -a /tmp/node_modules /app/


# ADD ./app/package.json /app/package.json
# ADD ./app/package-lock.json /app/package-lock.json
# WORKDIR /app
# RUN npm install



CMD ["nodemon", "-w", "/app/src/", "/app/src/server.js", "--exec", "babel-node", "--presets", "es2015,stage-2"]