_require('controllers/connectDb');
var schema = _require('models/schema_show');
var mongoose = require('mongoose');
var Works = mongoose.model('Works', schema);
module.exports = {
    get : function(callback){
        Works.find().lean().exec(function(err, works){
            if (err) {
                callback && callback(err);
                return;
            }
            callback && callback(null, works);
        });
    },
    add : function(data, callback){
        var work = new Works(data);
        work.save(function(err){
            callback && callback(err);
        });
    }
};
