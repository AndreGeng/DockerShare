FROM node:8

WORKDIR /app

# 首先只copy package.json和package-lock.json, 这样可以更好的复用docker的层, @see http://bitjudo.com/blog/2014/03/13/building-efficient-dockerfiles-node-dot-js/
COPY package*.json ./

# RUN指令会在shell里使用命令包装器/bin/sh -c来执行
# RUN指令会新建一个新的层，经常被用于安装软件包
RUN npm install

COPY . .

EXPOSE 80

# 设置默认的启动参数，可以在容器启动时通过命令行修改
CMD [ "npm", "start" ]

