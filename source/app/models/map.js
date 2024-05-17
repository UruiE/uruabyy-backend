
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const location = new Schema({
  uid: {type:String},
  name: {type:String , maxLength: 255},
  locationX: {type: Number},
  locationY: {type: Number},
});


module.exports = mongoose.model('locations', location);