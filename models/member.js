'use strict';

var mongoose = require('mongoose');

var MemberSchema = mongoose.Schema({
  name:  {type: String, default: "Member"},
  email:  {type: String},
  number: {type: String},
  pods: [{type: String}]
});

module.exports = mongoose.model("Member", MemberSchema);
