require('dotenv').config();
const Koa = require("koa");
const { createClient } = require("redis");
const app = new Koa();
const path = require("path");
const views = require("koa-views");
const router = require("./route");
const { redisConfig, PORT } = require('./config');

console.log(`redis://:${redisConfig.passwd}@${redisConfig.host}:${redisConfig.port}`)
const client = createClient({
  url: `redis://:${redisConfig.passwd}@${redisConfig.host}:${redisConfig.port}`
});

client.connect();
client.on("error", (err) => console.log("Redis Client Error", err));

app.context.redis = client;

// 加载模板引擎
app.use(
  views(path.join(__dirname, "./view"), {
    extension: "ejs",
  })
);

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, ()=>{
  console.log(`app is running on ${PORT}`)
});



