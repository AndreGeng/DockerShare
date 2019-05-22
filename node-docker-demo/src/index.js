const os = require('os');
const Koa = require('koa');
const router = require('./router.js');

const app = new Koa();

const HOST = '0.0.0.0';
const PORT = 80;

// routers
app.use(router.routes()).use(router.allowedMethods());

app.use(async ctx => {

  ctx.body = `
    Hello you from docker ^_^!
    Hostname: ${os.hostname()}
    ${new Date()}`;
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
