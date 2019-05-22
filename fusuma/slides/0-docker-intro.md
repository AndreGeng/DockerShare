docker分享
========

---

主要内容
=======
+ docker简介
+ 核心概念
+ demo(dockerize node server)
+ 线上docker部署

---

docker是什么
=========

---

<!-- note
docker经常被描述为"集装箱"么，它的目的主要是为了提供一种方式标准化生产环境的部署. 
1. 不同“集装箱”间的，隔离性
2. 标准化部署体验。 之前的云平台，不同的应用会有各自的部署流程，不同的平台部署流程也不一致。 现在只要统一支持docker那部署体验就是比较一致的。
-->
![docker](https://deploybot.com/assets/guides/_740x345_crop_center-center/docker-head-big@2x.png)

---

<!-- note
1. 不同的应用程序的运行环境是不同的
  1. 操作系统，库，组件..旧模块还可能于当前环境不兼容
  2. 不同硬件/软件组合多种多样
2. 随着硬件性能提升
  1. 硬件性能过剩
  2. 软件冲突
-->
解决的问题 
====
- 软件冲突
- 硬件性能过剩
- 部署环境配置繁琐

---

Container vs VM
========
- VMs
- Linux容器

![VM vs Container](http://p0.meituan.net/scarlett/711e764105828f0011ef33d00dad4c5046428.png)

---

PROS & CONS
===========

<div class="grid">
  <div class="column">
    <h3>优点</h3>
    <ol>
      <li>资源利用率更高</li>
      <li>轻量级启动速度快</li>
      <li>方便简化部署</li>
      <li>优化运维管理方案</li>
    </ol>
  </div>
  <div class="column">
    <h3>缺点</h3>
    <ol>
      <li>docker可以看作是进程隔离，隔离性不如VMs严格</li>
    </ol>
  </div>
</div>

---
<!-- note 
Docker版本
  1. 社区版(Community Edition, 简称CE)
  2. 企业版(Enterprise Edition, 简称EE)

    ps: 具体区别可见这里[docker-CE VS docker-EE](https://boxboat.com/2018/12/07/docker-ce-vs-docker-ee/)

  版本号：
  1. 2017以前最新的docker版本为v1.13, 发布CE和EE后版本格式变为v18.09.02

    ps: 最新的版本号格式为YY.MM.<patch>

  ps: 
  CE分为'stable','test'和'nightly'，'stable'的发版周期为半年.

-->
docker发展过程
==========
+ 2013.3 docker发布, github pr贡献增长迅猛,下载量超10万次
+ 2013.10 dotcloud(已更名为Docker Inc. )
+ 2017 发布docker ce/ee ([ce vs ee](https://boxboat.com/2018/12/07/docker-ce-vs-docker-ee/))

---

安装
==

+ [Mac](https://docs.docker.com/docker-for-mac/install/)
+ [Docker Desktop for Mac vs. Docker Toolbox](https://docs.docker.com/docker-for-mac/docker-toolbox/)
