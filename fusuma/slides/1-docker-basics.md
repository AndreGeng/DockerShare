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

<!-- note 
(代码，运行时，库文件，环境变量，配置文件, etc.)
最下层是bootfs, 它主负责image的装载，做为用户我们几乎是不用和它打交道的，当image装载到内存以后，bootfs这层会被卸载掉
接着是base image, 一般会是一个操作系统。但任何一个image都可以拿来当base image的，比方说我们可以把一个安装好了node环境的image当成base
上面的话就是我们对base image的一些更改，装我们应用的运行环境, 每一条操作指令都会行成一个新的层，而且这些层都是只读层

介绍下写时复制, device driver
这个是docker image的一个大概工作流程
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

<!-- note 
docker run --name test-alpine -it alpine /bin/sh
-->

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

<!-- classes: page pre-max-w-50 -->

<!-- note 
演示下docker hub的页面
-->
registry & 仓库(Repository)
=========================

```
docker login [registry]
docker tag [imagename] username/repo:tag
docker push username/repo:tag
```

---

<!-- note 
docker是推荐一个容器里只运行一个进程
我们一个应用一般都会由一组服务组成，那就需要每个服务运行在一个container里. 
container之间通信，一般是通过把它们放到一个network里来进行的

volumn的作用是持久化数据么，我们在container可写层做的更改都是临时性的，当container重启时会消失的。要想持久会数据一般方法是通过volumn
-->
network & volumn
================

+ network: 容器间通信
+ volumn: 数据持久化/共享

---

<!-- classes: page pre-max-w-50 -->

<!-- note 
我们一个应用一般由多个服务构成的么，那起每个服务都去跑docker run也比较麻烦
所以这个工具可以让我们以声明性的方式，指明我们要启动的那些container
-->
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
