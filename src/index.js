const Koa = require("koa");
const { createClient } = require("redis");
const app = new Koa();
const path = require("path");
const views = require("koa-views");
const router = require("./route");

<<<<<<< HEAD
const client = createClient({
  url: 'redis://:qwe123..@119.45.234.109:6379'
});
=======
const client = createClient({});
>>>>>>> 1394e3c4751d1e74ec08a308d0f81e433f8606ff
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

<<<<<<< HEAD
app.listen(3002);
=======
app.listen(3000);
>>>>>>> 1394e3c4751d1e74ec08a308d0f81e433f8606ff



