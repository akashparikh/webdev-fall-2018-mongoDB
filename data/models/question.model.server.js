const mongoose = require ('mongoose')
const QuestionSchema = require('./question.schema.server');
const QuestionModel = mongoose.model("QuestionModel",QuestionSchema)
module.exports = QuestionModel;