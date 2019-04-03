FROM node:8

WORKDIR /app

# 首先只copy package.json和package-lock.json, 这样可以更好的复用docker的层, @see http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]


