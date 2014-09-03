var path = require('path');
var fs = require('fs');
var rootPath = process.cwd();
module.exports = {
    readSyncToString : function(file){
        return fs.readFileSync(path.join(rootPath, file), 'utf8');
    }
};