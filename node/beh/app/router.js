'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.post('/getall', controller.images.getall);
  router.post('/uploadimg', controller.images.uploadimg);
  router.post('/del', controller.images.del);

  router.post('/login', controller.login.login);
};
