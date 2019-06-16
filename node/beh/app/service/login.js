'use strict';

const Service = require('egg').Service;

class ImagesService extends Service {
  async getlogin(username) {
    const res = await this.app.mysql.get('login', { username });
    console.log(res);
    return res;
  }

}

module.exports = ImagesService;
