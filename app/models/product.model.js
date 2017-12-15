import mongoose from 'mongoose';
var Schema = mongoose.Schema;

const status = ["avaliable", "sold out"];
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
  picturePath: {
    type: String,
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  productDetail: {
    type: String,
    required: true
  },
  capacity: {
    type: Number
  },
  productWeight: {
    type: Number,
    required: true
  },
  material: {
    type: String,
    required: true
  },
  productType: {
    type: String
  },
  qty_ctn: {
    type: Number,
    required: true
  },
  productMeasurement:
    {
      l: {
        type: Number,
        required: true
      },
      w: {
        type: Number,
        required: true
      },
      h: {
        type: Number,
        required: true
      }
    },
  cartonSize: {
    l: {
      type: Number,
      required: true
    },
    w: {
      type: Number,
      required: true
    },
    h: {
      type: Number,
      required: true
    },
    cbm_ctn: {
      type: Number,
      required: true
    }
  },
  productStatus: {
    type: String,
    default: "avaliable",
    enum: status
  },
  CreateTime: {
    type: Date,
    default: Date.now
  },
  UpdateTime: {
    type: Date,
    default: Date.now
  }
});



mongoose.model('Product', ProductSchema);