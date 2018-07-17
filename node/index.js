require('babel-core/register');

const Koa = require('koa');
const axios = require('axios');
const cors = require('@koa/cors');

const DateTime = require('./utils/date-conversion');

const app = new Koa();

app.use(cors({
  origin: 'http://localhost',
}));

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(async (ctx) => {
  const { query: { lat, lon } } = ctx;

  try {
    const dateTime = new DateTime();
    const response = await axios({
      url: 'https://api.foursquare.com/v2/venues/explore',
      params: {
        client_id: process.env.FOURSQUARE_CLIENT_ID,
        client_secret: process.env.FOURSQUARE_CLIENT_SECRET,
        ll: `${lat},${lon}`,
        v: dateTime.yyyymmdd,
      },
    });

    ctx.body = response.data;
  } catch (err) {
    throw new Error(err);
  }
});

app.listen(process.env.PORT || 3000);
