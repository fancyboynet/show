var express = require('express');
var router = express.Router();
var getApiRoute = function(api){
    return require('./api/' + api);
};

router.use('/works', getApiRoute('works'));

module.exports = router;
