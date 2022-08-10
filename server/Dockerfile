FROM node:16.16.0 as BUILDER

WORKDIR /usr/src/app/

COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .

FROM node:16.16.0-alpine

WORKDIR /usr/src/app/

COPY --chown=node:node --from=BUILDER /usr/src/app .

USER node

CMD ["npm", "run", "start:dev"]