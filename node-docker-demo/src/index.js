const os = require('os');
const Koa = require('koa');
const app = new Koa();

const HOST = '0.0.0.0';
const PORT = 80;

app.use(async ctx => {

  ctx.body = `
    Hello World ^_^
    Hostname: ${os.hostname()}
    ${new Date()}`;
});

app.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);
