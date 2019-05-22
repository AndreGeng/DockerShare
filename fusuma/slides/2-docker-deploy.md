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

service & stack
===============

---

Q & A
======

---

THANKS
======
