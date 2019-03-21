FROM node:latest

RUN mkdir -p /usr/src/app/nestjs-mongo
WORKDIR /usr/src/app/nestjs-mongo

COPY package.json /usr/src/app/nestjs-mongo
RUN npm install

COPY . /usr/src/app/nestjs-mongo

EXPOSE 3500
CMD ["npm", "run", "start:prod"]