var order = require('../controllers/order.controller');

module.exports = (app) => {
  var path = '/api/order';
  
  app.get(path + '/id/:id', order.getOne);
  app.get(path + '/getorder', order.getItems);
  app.post(path + '/addorder', order.create);
  app.post(path + '/update', order.update);
  app.delete(path + '/delete/:id', order.delete);
}