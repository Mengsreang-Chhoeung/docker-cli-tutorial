FROM node:17.0.1-alpine
WORKDIR /app
ADD package*.json ./
RUN npm install
ADD . .
CMD node app.js