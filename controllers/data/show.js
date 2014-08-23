var path = require('path');
var jf = _require('utils/jsonFile');
var file = path.join(process.cwd(), '/data/show.json');
var parse = function(data){
    data.forEach(function(v){
        var date = new Date(v.time);
        v.time = [date.getFullYear(), '.', date.getMonth() + 1, '.', date.getDate(), ' ', date.getHours(), ':', date.getMinutes()].join('');
    });
    return data;
};
module.exports = {
    get : function(callback){
        jf.read(file, function(err, data) {
            if(err){
                callback && callback(err);
                return;
            }
            callback && callback(null, parse(data));
        });
    },
    add : function(data, callback){
        jf.appendToArray(file, data, function(err) {
            callback && callback(err);
        });
    }
};
