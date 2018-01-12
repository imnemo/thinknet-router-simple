const debug = require('debug')('thinknet')
const Router = require('thinknet')

class RouterSimple extends Router {
  constructor(opt = {}) {
    super(opt)
    //简单路由是不用中间件的，所以这个空起
    this.mid = []
    //存储一个type:handler的map
    this.handlers = {}
  }
  use(handlers) {
    this.handlers = handlers
  }
  handle(ctx) {
    let data = ctx.data
    let type = data.type
    let handler = this.handlers[type]
    if(handler && typeof handler === 'function'){
      handler(ctx)
    }
  }
}

module.exports = RouterSimple