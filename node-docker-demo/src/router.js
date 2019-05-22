const Router = require('koa-router');
const redis = require('./redis-client.js');
const util = require('util');

const getAsync = util.promisify(redis.get).bind(redis);
const delAsync = util.promisify(redis.del).bind(redis);

const router = new Router();

router.get('/counter', async (ctx) => {
  const counter = Number(await getAsync('counter')) || 1;
  redis.set('counter', counter + 1);
  ctx.body = `
    Hello you have visited ${counter} times
  `;
});

router.delete('/counter', async (ctx) => {
  try {
    await delAsync('counter');
    ctx.body = 'delete success!';
  } catch (e) {
    console.error('delete fail: ', e);
  }
});

module.exports = router;
