
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const day = new Schema({
  day: {type:String},
  lesson1: {type:String},
  lesson2: {type:String},
  lesson3: {type:String},
  lesson4: {type:String},
  lesson5: {type:String},
  lesson6: {type:String},
  lesson7: {type:String},
  lesson8: {type:String},
  lesson9: {type:String},

});


module.exports = mongoose.model('schedules', day);