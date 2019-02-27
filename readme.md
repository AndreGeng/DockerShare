docker历史
========
+ dotcloud(已更名为Docker Inc. ) -> docker开源

docker是什么
=========
+ 环境隔离，相对VMs(VMWare/openstack)来说：
  1. 简化部署，优化运维管理方案
  2. 资源利用率更高

docker基础
========
+ 核心概念
  1. 镜像(Image)
    1. image是一个可执行包，包含程序运行所需要的一切(代码，运行时，库文件，环境变量，配置文件, etc.)
    2. Dockerfile
  2. 容器(Container)
    1. 容器是image的运行实例。
  3. 服务(service)
      1. docker-compose.yml, [YAML语法简介](http://www.ruanyifeng.com/blog/2016/07/yaml.html)
  4. 仓库(Repository)
