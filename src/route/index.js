const Router = require('@koa/router');
const router = new Router()

router.get('/(.*)', async (ctx)=>{
<<<<<<< HEAD
=======

>>>>>>> 1394e3c4751d1e74ec08a308d0f81e433f8606ff
    const modules = await ctx.redis.get('modules')
    console.log(modules)
    let title = 'hello koa2'
    await ctx.render('index', {
      title,
      modules: JSON.parse(modules)
    })
})

module.exports = router