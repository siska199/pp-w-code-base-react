FROM node:20-alpine

WORKDIR /kyuuchan-199/app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]
