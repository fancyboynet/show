var express = require('express');
var router = express.Router();
var rtIndex = require('./routes/index');

router.use('/', rtIndex);

module.exports = function(){
    return router;
};
