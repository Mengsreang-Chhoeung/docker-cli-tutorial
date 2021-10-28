FROM node:latest
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node app.js