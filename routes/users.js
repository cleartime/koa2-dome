var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

router.get('/hello', function (ctx, next) {
  ctx.body = 'hello ';
});

module.exports = router;
