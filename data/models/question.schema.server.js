const mongoose = require('mongoose')
const TrueFalseSchema = require('./true-false.schema.server.js')
const MultipleChoiceSchema = require('./multiple-choice.schema.server.js')
const QuestionSchema = mongoose.Schema({
    _id:Number,
    question: String,
    points: Number,
    questionType: String,
    multipleChoice: MultipleChoiceSchema,
    trueFalse: TrueFalseSchema
}, {collection: 'questions'});
module.exports = QuestionSchema

// const mongoose = require('mongoose');
// const StudentSchema = mongoose.Schema({
//     _id:Number,
//     username: String,
//     password: String,
//     firstName: String,
//     lastName: String,
//     gradYear:Number,
//     scholarship:Number,
// }, {collection: 'student'});
// module.exports = StudentSchema