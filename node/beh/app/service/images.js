'use strict';

const fs = require('fs');

const Service = require('egg').Service;

class ImagesService extends Service {
  async position(text, url, pwd) {
    const result = await this.app.mysql.insert('data', { text, url, pwd });
    console.log('add');
    console.log(result);
    return result;
  }

  async getall() {
    const res = await this.app.mysql.select('data');
    console.log(res);
    return res;
  }

  async delbyid(id) {
    const one = await this.app.mysql.get('data', { Id: id });
    console.log(one.pwd);

    fs.unlink(one.pwd, function(err) {
      console.log(err);
    });

    const result = await this.app.mysql.delete('data', { Id: id });
    console.log('del');
    console.log(result);
    return result;
  }

}

module.exports = ImagesService;
