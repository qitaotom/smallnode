'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {
  async login() {
    const { ctx } = this;
    const result = await ctx.service.login.getlogin(ctx.request.body.username);
    console.log(result);
    const res = {
      code: 0,
      data: result,
    };
    if (ctx.request.body.password === result.password) {
      res.code = 1;
    }
    ctx.body = res;
  }

}

module.exports = LoginController;
