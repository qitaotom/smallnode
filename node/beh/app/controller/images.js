'use strict';

const path = require('path');

const Controller = require('egg').Controller;

class ImagesController extends Controller {
  async getall() {
    const { ctx } = this;
    const result = await ctx.service.images.getall();
    console.log(result);
    const res = {
      code: 0,
      data: result,
    };
    if (result) {
      res.code = 1;
    }
    ctx.body = res;
  }

  async uploadimg() {
    const { ctx } = this;
    const file = ctx.request.files[0];
    const name = 'egg-multipart-test/' + path.basename(file.filename);
    console.log(name);
    console.log(path.basename(file.filename));
    const filepwd = file.filepath.replace(/\\/g, '/');
    console.log(filepwd);
    const pwdarr = filepwd.split('app/public');
    console.log(pwdarr[1]);

    const fileurl = 'http://' + ctx.request.header.host + '/public' + pwdarr[1];
    console.log(fileurl);

    const result = await ctx.service.images.position(ctx.request.body.text, fileurl, filepwd);
    console.log(ctx.request.body.text);
    console.log(fileurl);
    console.log(filepwd);

    const res = {
      code: 0,
      message: result,
    };

    ctx.body = res;
  }

  async del() {
    const { ctx } = this;
    console.log(ctx.request.body);
    const result = await ctx.service.images.delbyid(ctx.request.body.id);
    console.log(result);
    const res = {
      code: 1,
      data: result,
    };
    ctx.body = res;
  }
}

module.exports = ImagesController;
