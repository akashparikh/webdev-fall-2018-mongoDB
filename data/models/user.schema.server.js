const mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    _id:Number,
    username: String,
    password: String,
    firstName: String,
    lastName: String
}, {collection: 'user'});
module.exports = UserSchema;