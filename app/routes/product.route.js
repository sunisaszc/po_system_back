var product = require('../controllers/product.controller');

module.exports = (app) => {
  var path = '/api/item';
  
  app.get(path + '/id/:id', product.getOne);
  app.get(path + '/getitem', product.getItems);
  app.post(path + '/additem', product.create);
  app.post(path + '/update', product.update);
  app.delete(path + '/delete/:id', product.delete);
}