'use strict';

var mongoose = require('mongoose');

var PodSchema = mongoose.Schema({
  name:  {type: String, required:true},
  price: {type: Number, required:true},
  img: {type: String},
  time: {type: Number, required:true},
  date: {type: Date, required:true},
  taken: {type: Boolean, default:false},
  rooms: {type: Number, required:true},
  notes: {type: String},
  clients: [{type: String}]
});

module.exports = mongoose.model("Pod", PodSchema);
