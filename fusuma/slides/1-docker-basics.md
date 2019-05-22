docker核心概念
==========

+ 构成组件
+ 镜像 & 容器
+ registry服务与仓库
+ network & volumn
+ docker-compose

---

docker架构
========

![docker c/s架构](https://docs.docker.com/engine/images/architecture.svg)

---

<!--note 
(代码，运行时，库文件，环境变量，配置文件, etc.)
-->
镜像
==

image是一个可执行包，包含程序运行所需要的一切

<div class="grid">
  <div class="column">
    <ol>
      <li>写时复制</li>
      <li>构建image(Dockerfile)</li>
    </ol>
    <pre style="margin-top: 30px;">
      docker pull [imagename]
      docker image ls
      docker build -t [imagename] [directory contains Dockerfile]
    </pre>
  </div>
  <div class="column">
    <img src="https://www.ontrack.com/blog/wp-content/uploads/sites/7/docker.png" alt="docker image">
  </div>
</div>

---

Dockerfile
==========

```
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


```

---

<!-- classes: page pre-max-w-50 -->
容器
==

容器是image的运行实例。

```
docker container ls
docker run --name [container name] -d -p 4000:80 [imagename]
docker container stop [imagename]
docker container rm [imagename]
docker container logs -f [container id/name]
```

---

<!--note 
演示下docker hub的页面
-->
<!-- classes: page pre-max-w-50 -->
registry & 仓库(Repository)
=========================

```
docker login [registry]
docker tag [imagename] username/repo:tag
docker push username/repo:tag
```

---

network & volumn
================

+ network: 容器间通信
+ volumn: 数据持久化/共享

---

<!--note 

-->
<!-- classes: page pre-max-w-50 -->
docker-compose
==============

只要用于多容器环境的启动/管理

```
docker-compose up
docker-compose down

```

---

docker-compose.yml
==================

```
version: "3"
services:
  web:
    container_name: node_web
    build: .
    command: ["npm", "run", "dev:debug"]
    ports:
      - "8088:80"
      - "9229:9229"
    networks:
      - webnet
    volumes:
      - .:/app
  redis:
    container_name: redis_primary
    image: "redis:alpine"
    networks:
      - webnet
    volumes:
      - ./data:/data
networks:
  webnet:
```

---

Demo
====
