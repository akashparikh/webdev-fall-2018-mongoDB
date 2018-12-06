const mongoose = require ('mongoose')
const QuizSchema = require('quiz-widget.schema.server').QuizSchema
const QuizModel = mongoose.model("QuizModel",QuizSchema)
module.exports = {QuizModel}