FROM node:23-alpine3.20
WORKDIR /src
COPY . .
RUN npm install express
EXPOSE 4000
CMD node server.js
