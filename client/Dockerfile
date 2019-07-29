FROM node:12

WORKDIR /usr/src/app

ENV NODE_ENV development

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000:3000

CMD ["npm", "start"]