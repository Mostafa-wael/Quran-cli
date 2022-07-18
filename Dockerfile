FROM node:lts-alpine
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "lib/", "bin/", "./"]
RUN npm ci 
COPY . .
RUN chown -R node /usr/src/app

USER node
WORKDIR /usr/src/app
ENTRYPOINT ["node", "src/index.js"]
CMD ["-d", "0"]
