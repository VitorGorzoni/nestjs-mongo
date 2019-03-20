FROM node:latest

RUN mkdir -p /usr/src/app/nestjs-mongo
WORKDIR /usr/src/app/nestjs-mongo

COPY package.json .
RUN npm install

COPY . ./

EXPOSE 3500
CMD ["npm", "run", "start:prod"]