const Koarouter = require('koa-router');
const router = new Koarouter();

const customerController = require('../controllers/customerController');

router.get('/', async  ctx => (ctx.body="welcome to NodeJs Rest API"))
      .get('/customer', async  ctx => (customerController.index(ctx)))
      .get('/customer/customerSearch/:searchText', async  ctx => (customerController.searchCustomer(ctx)));

module.exports = router;