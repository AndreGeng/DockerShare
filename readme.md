docker是什么
=========
+ 问题:环境配置繁琐. 
  - 操作系统，库，组件..旧模块还可能于当前环境不兼容
  - 不同硬件/软件组合多种多样
  - 换台机子还得再来一次
+ 解决方案
  1. 虚拟机(VMs, e.g. VMWare/openstack)
  2. Linux容器

  ![VM vs Container](http://p0.meituan.net/scarlett/711e764105828f0011ef33d00dad4c5046428.png)
+ 区别

  pros:
  1. 资源利用率更高
  2. 轻量级启动速度快
  3. 方便简化部署，优化运维管理方案 

  cons:
  1. docker可以看作是进程隔离，隔离性不如VMs严格

docker历史
========
+ 2013.3 docker发布, github pr贡献增长迅猛, 贡献者超200人，九成为其它公司员工，下载量超10万次
+ 2013.10 dotcloud(已更名为Docker Inc. )
+ 2017 发布docker ce/ee

docker基础
========
+ Docker架构
  ![docker c/s架构](https://docs.docker.com/engine/images/architecture.svg)
+ Docker版本
  1. 社区版(Community Edition, 简称CE)
  2. 企业版(Enterprise Edition, 简称EE)

    ps: 具体区别可见这里[docker-CE VS docker-EE](https://boxboat.com/2018/12/07/docker-ce-vs-docker-ee/)

  版本号：
  1. 2017以前最新的docker版本为v1.13, 发布CE和EE后版本格式变为v18.09.02

    ps: 最新的版本号格式为YY.MM.<patch>

  ps: 
  CE分为'stable','test'和'nightly'，'stable'的发版周期为半年.
+ 安装
  [Mac](https://docs.docker.com/docker-for-mac/install/)
  [Docker Desktop for Mac vs. Docker Toolbox](https://docs.docker.com/docker-for-mac/docker-toolbox/)
+ 核心概念
  1. 镜像(Image)
    * image是一个可执行包，包含程序运行所需要的一切(代码，运行时，库文件，环境变量，配置文件, etc.)
    * 写时复制(copy on write)
    * 用户镜像与顶层镜像
      1. andregeng/node-docker-demo
      2. ubuntu
    * Dockerfile
      1. 构建缓存
    ```
    docker pull [imagename]
    docker run -d -p 4000:80 [imagename]
    docker image ls
    docker rm [imagename]
    docker build -t [imagename] [directory contains Dockerfile]
    # 构建历史
    docker history [imagename]
    ```
  2. 容器(Container)
    1. 容器是image的运行实例。
    ```
    docker container ls
    docker container ls -q
    docker run -d -p 4000:80 [imagename]
    // -i 保持标准输入打开，-t为创建的容器分配一个伪ttp终端
    docker run --name [container name] -i -t [imagename] [command to run]
    docker attach [contanerid/name]
    docker container stop [imagename]
    docker container rm [imagename]
    docker container logs [container id]
    docker container top [container id]
    // -f与tail -f中的作用一致, -t给日志加上时间戳
    docker container logs -f [containerid]
    // enter the container
    docker exec -it <container id> /bin/bash
    ```
  3. registry & 仓库(Repository)
    ```
    docker build -t [imagename] [directory contains Dockerfile]
    docker build --no-cache -t [imagename] [directory contains Dockerfile]
    // 可以用来查看镜像的构建历史记录
    docker history [containerid]
    docker login [registry]
    docker tag [imagename] username/repo:tag
    docker push username/repo:tag

    // you can also build image into a tar file, then load it in your server
    docker image save -o image-name.tar group-name/image-name
    docker load < image-name.tar
    ```
  4. docker network
    1. bridge
    2. overlay
    3. macvlan
  5. docker volumn
    1. volumn
    2. bind mounts
    3. tmpfs
+ Demo
  1. dockerize nodejs web app
  2. 容器互联docker network
  3. 数据共享docker volumn
  4. debug node within container
+ 生产环境下的部署
  1. 集群(swarm)
    ```
    docker swarm init
    docker swarm leave --force
    docker node ls
    ```
  2. 服务(service)
    1. 服务是生产环境中的容器。一个服务可能是一组container
    2. docker-compose.yml, [YAML语法简介](http://www.ruanyifeng.com/blog/2016/07/yaml.html)
    ```
    docker service create --name node-docker-demo -p 8080:80 --replicas=5 [imagename]
    docker service rm [servicename]
    docker service ls
    docker service ps [service id]
    docker service rm [service id]
    ```
  3. 技术栈(stack)
    ```
    docker stack deploy -c docker-compose.yml [stackname]
    docker stack rm [stackname]
    ```
+ 实验experiment
  1. dockerized neovim





















Reference:

[docker的历史与现状，原理与概念](https://my.oschina.net/xiejunbo/blog/807460)

[Docker 三年回顾：梦想依在，人生正当年](https://www.infoq.cn/article/docker-turns-3)

[What’s the Diff: VMs vs Containers](What’s the Diff: VMs vs Containers)

[Docker 入门教程](http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html)

[Docker三岁生日快乐：发展历程回顾](http://dockone.io/article/1139)
