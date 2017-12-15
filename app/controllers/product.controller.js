var Product = require('mongoose').model('Product');
var path = require("path");

exports.getOne = (req, res, next) => {
  Product.findOne({ productNo: req.params.id }, (err, data) => {
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
  Product.find((err, product) => {
    if (err) {
      console.log('Failure');
      return next(err);
    }
    else {
      console.log('Success');
      res.json(product);
    }
  });
}

exports.update = (req, res, next) => {
  var newvalues ={
    productName: req.body.productName,
    picturePath: req.body.picturePath,
    productPrice: req.body.productPrice,
    productDetail:req.body.productDetail,
    capacity: req.body.capacity,
    productWeight: req.body.productWeight,
    material: req.body.material,
    packing_detail: req.body.packing_detail,
    qty_ctn: req.body.qty_ctn,
    UpdateTime: new Date(),
    productMeasurement:{
      l:req.body.productMeasurement.l,
      w:req.body.productMeasurement.w,
      h:req.body.productMeasurement.h
    }
    ,
    cartonSize:{
      l:req.body.cartonSize.l,
      w:req.body.cartonSize.w,
      h:req.body.cartonSize.h,
      cbm_ctn:req.body.cartonSize.cbm_ctn
    },
    productStatus: req.body.productStatus
  };
  Product.findOneAndUpdate({ productNo: req.body.productNo},{$set: newvalues}, (err, data) => {
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
  var product = new Product(req.body);
  product.save((err) => {
    if (err) {
      console.log('Failure');
      return next(err);
    }
    else {
      console.log('Success');
      res.json(product);
    }
  });
}

exports.delete = (req, res, next) => {
  Product.findOneAndRemove({ productNo: req.params.id }, (err, data) => {
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