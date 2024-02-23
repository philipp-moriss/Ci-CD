FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
ADD . .
RUN npm run build
EXPOSE 10000
CMD [ "node", "./dist/index.js" ]