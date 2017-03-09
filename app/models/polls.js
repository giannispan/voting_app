'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var voteSchema = new mongoose.Schema({ ip: 'String' });
var choiceSchema = new mongoose.Schema({ 
  text: String,
  votes: [voteSchema]
});

var Poll = new Schema({
  question: { type: String, required: true },
  choices: {
  	text: String,
  	votes: Number
  }
});

module.exports = mongoose.model('Poll', Poll);