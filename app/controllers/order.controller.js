var Order = require('mongoose').model('Order');
var path = require("path");

exports.getOne = (req, res, next) => {
  Order.findOne({ orderNo : req.params.id }, (err, data) => {
    if (err) {
      console.log('Failure: ' + err);
      return next(err);
    }
    else {
      console.log(data);
      res.json(data);
    }
  });
}

exports.getItems = (req, res, next) => {
  Order.find((err, order) => {
    if (err) {
      console.log('Failure');
      return next(err);
    }
    else {
      console.log('Success');
      res.json(order);
    }
  });
}

exports.update = (req, res, next) => {
  Order.findOneAndUpdate({ orderNo: req.body.orderNo},{$set: req.body}, (err, data) => {
    if (err) {
      console.log('Failure: ' + err);
      return next(err);
    }
    else {
      console.log(data);
      res.json(data);
    }
  });
}

exports.create = (req, res, next) => {
  var order = new Order(req.body);
  order.save((err) => {
    if (err) {
      console.log('Failure');
      return next(err);
    }
    else {
      console.log('Success');
      res.json(order);
    }
  });
}

exports.delete = (req, res, next) => {
  Order.findOneAndRemove({ productNo: req.params.id }, (err, data) => {
    if (err) {
      console.log('Failure: ' + err);
      return next(err);
    }
    else {
      console.log(data);
      res.json(data);
    }
  });
}