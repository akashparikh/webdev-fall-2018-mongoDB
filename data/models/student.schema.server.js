const mongoose = require('mongoose');
const StudentSchema = mongoose.Schema({
    _id:Number,
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    gradYear:Number,
    scholarship:Number,
}, {collection: 'student'});
module.exports = StudentSchema