const mongoose = require ('mongoose')
const StudentSchema = require('./student.schema.server');
const StudentModel = mongoose.model("StudentModel",StudentSchema)
module.exports = StudentModel;