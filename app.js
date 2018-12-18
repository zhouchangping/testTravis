const Koa = require('koa');
const app = new Koa();
 
// response
app.use(ctx => {
  ctx.body = {
  	data: "1"
  }
});
 
app.listen(8000);

module.exports = app;