const Router = require('@koa/router');
const router = new Router()

router.get('/(.*)', async (ctx)=>{
    const modules = await ctx.redis.get('modules')
    console.log(modules)
    let title = 'hello koa2'
    await ctx.render('index', {
      title,
      modules: JSON.parse(modules)
    })
})

module.exports = router