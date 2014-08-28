var db = _require('controllers/connectDb');
var schema = _require('models/schema_show');
var mongoose = require('mongoose');
var Works = mongoose.model('Works', schema);
var parse = function(data){
    data.forEach(function(v){
        var date = v.time;
        v.time = [date.getFullYear(), '.', date.getMonth() + 1, '.', date.getDate(), ' ', date.getHours(), ':', date.getMinutes()].join('');
    });
    return data;
};
module.exports = {
    get : function(callback){
        Works.find().lean().exec(function(err, works){
            if (err) {
                callback && callback(err);
                return;
            }
            callback && callback(null, parse(works));
        });
    },
    add : function(data, callback){
        var work = new Works(data);
        work.save(function(err){
            callback && callback(err);
        });
    }
};
