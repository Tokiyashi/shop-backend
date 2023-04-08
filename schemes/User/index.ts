import {model} from "mongoose";

const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: false
  },
  detail: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Detail'
  }
});
const User = model('user', userSchema)

export default User