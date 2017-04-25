var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

router.get('/a', function (ctx, next) {
  ctx.body = 'a';
});


module.exports = router;
