'use strict';

var mongoose = require('mongoose');

var ClientSchema = mongoose.Schema({
  name:  {type: String, default: "Client"},
  img:  {type: String},
  email:  {type: String},
  number: {type: String},
  pods: [{type: String}]
});

module.exports = mongoose.model("Client", ClientSchema);
