<!-- note
1. 生产环境部署之前，需要先把image推到公共仓库
  当然你打个tar包然后，上传到服务器上去也行
-->
生产环境部署
============

+ swarm
+ service
+ stack

---

swarm
=====

<div class="grid">
  <div class="column">
    <pre style="margin-top: 30px;">
      docker swarm init
      docker swarm leave --force
      docker node ls
      // 显示join-token
      docker swarm join-token worker
    </pre>
  </div>
  <div class="column">
    <img src="https://docs.docker.com/engine/swarm/images/ingress-routing-mesh.png" alt="docker swarm">
  </div>
</div>

---
<!-- note
docker stack deploy -c docker-compose.yml node-docker-demo
docker stack ps node-docker-demo
docker stack rm node-docker-demo
-->

service & stack
===============

---

Q & A
======

---

THANKS
======
