'use strict';

var mongoose = require('mongoose');

var PodSchema = mongoose.Schema({
  name:  {type: String, required:true},
  time: {type: Number, required:true},
  date: {type: Date, required:true},
  taken: {type: Boolean, default:false},
  rooms: {type: Number, required:true},
  notes: {type: String}
});

module.exports = mongoose.model("Pod", PodSchema)
