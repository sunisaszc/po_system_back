import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const status = ["wait","sent"];
var ProductSchema = new Schema({
  productNo: {
    type: String,
    unique: true,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  productPrice: {
    type: Number,
    required: true
  },
  productDetail: {
    type: String,
    required: true
  },
  qty_ctn: {
    type: Number,
    required: true
  },
  productWeight: {
    type: Number,
    required: true
  },
  material: {
    type: String,
    required: true
  },
  cbm_ctn: {
    type: Number,
    required: true
  },
  productQty:{
    type: Number,
    required: true
  }
})

var OrderSchema = new Schema({
  OrderNo: {
    type: String,
    unique: true,
    required: true,
  },
  productList: [{ProductSchema}],
  picturePath: {
    type: String,
    required: true
  },
  author:{
    type: String,
    required: true,
    trim: true
  },
  time: {
      type: Date,
      default: Date.now
  },
  status:{
    type: String,
    default : "wait",
    enum : status
  }
});



mongoose.model('Order', OrderSchema);