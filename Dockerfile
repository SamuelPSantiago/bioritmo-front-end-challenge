FROM node:18.20.3-alpine3.20
WORKDIR /bioritmo-front-end-challenge
RUN addgroup dev && adduser -S -G dev samuel

COPY package*.json ./
RUN npm install

COPY . .
RUN chown -R samuel:dev /bioritmo-front-end-challenge
USER samuel

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host"]