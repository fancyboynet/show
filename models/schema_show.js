var mongoose = require('mongoose');
var schema = mongoose.Schema({
    name : String,
    author : String,
    email : String,
    time : Date,
    des : String,
    img : String,
    url : String
});
module.exports = schema;
