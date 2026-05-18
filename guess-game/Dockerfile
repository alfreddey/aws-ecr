FROM node:24-alpine
WORKDIR /guess-game
COPY package.json package-lock.json .
RUN npm ci --omit=dev
COPY ./src ./src
EXPOSE 3000
CMD ["node", "src/server.js"]