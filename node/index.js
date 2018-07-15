require('babel-core/register');
require('dotenv').config();

const Koa = require('koa');
const axios = require('axios');

const app = new Koa();

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

app.use(async (ctx) => {
  const { query: { lat, lon } } = ctx;

  try {
    const response = await axios({
      url: 'https://api.foursquare.com/v2/venues/explore',
      params: {
        client_id: process.env.FOURSQUARE_CLIENT_ID,
        client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
        ll: `${lat},${lon}`,
        v: '20180715',
      },
    });

    ctx.body = response.data;
  } catch (err) {
    console.log(err);
  }
});

app.listen(3000);

