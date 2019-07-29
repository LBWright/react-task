FROM node:12

WORKDIR /usr/src/app

ENV NODE_ENV development

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD ["npm", "start"]