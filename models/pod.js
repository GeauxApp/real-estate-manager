'use strict';

var mongoose = require('mongoose');

var PodSchema = mongoose.Schema({
  name:  {type: String, default: "Pod"},
  price: {type: Number, default: 50},
  img: {type: String},
  time: {type: Number, default:true},
  date: {type: Date, default: Date.now()},
  taken: {type: Boolean, default:false},
  rooms: {type: Number, default: 1},
  notes: {type: String},
  clients: [{type: String}]
});

module.exports = mongoose.model("Pod", PodSchema);
