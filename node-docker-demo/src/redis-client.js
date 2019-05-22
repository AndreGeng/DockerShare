const redis = require('redis');

const client = redis.createClient({
  host: process.env.REDIS_HOST || 'redis_primary',
});

module.exports = client;
