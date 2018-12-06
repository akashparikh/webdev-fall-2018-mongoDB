const mongoose = require('mongoose');
const TrueFalseSchema = mongoose.Schema({
    isTure:Boolean,
});
module.exports = TrueFalseSchema;