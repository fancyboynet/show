_require('controllers/connectDb');
var schema = _require('models/schema_show');
var mongoose = require('mongoose');
var Works = mongoose.model('Works', schema);
var util = _require('utils/util');
var getWorksBetween = function(range, callback){
    var start = range.range[0];
    var end = range.range[1];
    Works.find().skip(start).limit(end - start + 1).lean().exec(function(err, works){
        if(!callback){
            return;
        }
        if (err) {
            callback(err);
            return;
        }
        callback(null, {
            totalPages : range.totalPages,
            works : works
        });
    });
};
var getWorksByPage = function(page, pageRecords, callback){
    Works.count(function(err, count){
        if(!callback){
            return;
        }
        if (err) {
            callback(err);
            return;
        }
        var range = util.getPageRange(count, pageRecords, page);
        if(page > range.totalPages){
            callback(null, {
                totalPages : range.totalPages,
                works : []
            });
            return;
        }
        getWorksBetween(range, callback);
    });
};
module.exports = {
    get : function(page, callback, pageRecords){
        if((typeof page) === 'function'){
            callback = page;
            page = 1;
        }
        pageRecords = pageRecords || 6;
        getWorksByPage(page, pageRecords, callback);
    },
    add : function(data, callback){
        var work = new Works(data);
        if(!callback){
            return;
        }
        work.save(function(err){
            callback(err);
        });
    }
};
