const koa = require('koa');
const bodyParser = require('koa-body');
const koaLogger = require('koa-logger');
const router = require('./middleware/customerRouter');
const cors = require('@koa/cors');
const logger = require('./logger');

const app = new koa();
const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/angular",
    {useNewUrlParser: true}
)

const db = mongoose.connection;

db.on('error', error=>{
    logger.log('Error connecting to database');
    //throw new Error('Error connecting to database')
});

db.once('open', () => console.log('Connected to Database'));

app.use(koaLogger());
app.use(bodyParser());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());
const port = process.env.Port || 3001;

app.listen(port, () => {
    logger.log(`Server started http://localhost:${port}`);
    console.log(`Server is running on http://localhost:${port}`)
})




