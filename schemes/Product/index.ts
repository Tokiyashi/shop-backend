import {model} from "mongoose";

const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: String,
    required: false
  },
  detail: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Detail'
  }
});
const Product = model('products', productSchema)

export default Product