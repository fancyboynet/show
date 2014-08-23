var fs = require('fs');
module.exports = {
    read : function(file, callback){
        fs.readFile(file, function(err, data) {
            if (err) {
                return callback(err, null);
            }
            try {
                data = JSON.parse(data);
            } catch (err) {
                return callback(err);
            }
            callback(null, data);
        });
    },
    appendToArray : function(file, data, callback){
        var cb = function(err){
            callback && callback(err);
        };
        try{
            var s = fs.readFileSync(file).toString();
        }
        catch (err){
            cb(err);
            return;
        }
        if(!/^\[|\]$/.test(s)){
            cb(new Error('文件不是数组格式'));
            return;
        }
        try{
            var s2 = JSON.stringify(data);
        }
        catch (err){
            cb(err);
            return;
        }
        s2 = s2 + ']';
        var s3 = s.slice(0, -1);
        if(s3 !== '['){
            s2 = ',' + s2;
        }
        fs.writeFile(file, s3 + s2, function(err){
            cb(err);
        });
    }
};
