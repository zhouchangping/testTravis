const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = {
    data:"Hello World!"
  }
});
app.listen(3000);
module.exports = app;