
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const tt = new Schema({
  uid: {type:String},
  name: {type:String , maxLength: 255},
  image: {type:String , maxLength:255},
  math: {type: Number},
  english: {type : Number},
  physic: {type: Number},
  slug: {type:String },
  character: {type:String , maxLength: 255},
});


module.exports = mongoose.model('datas', tt);