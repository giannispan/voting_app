'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Poll = new Schema({
  question: { type: String, required: true },
  choices: {
  	text: String,
  	votes: {
  	ip: String
  	}
  }
});

module.exports = mongoose.model('Poll', Poll);