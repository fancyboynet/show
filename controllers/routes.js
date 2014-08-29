var express = require('express');
var router = express.Router();
var rtIndex = require('./routes/index');
var rtApi = require('./routes/api');

router.use('/', rtIndex);
router.use('/api', rtApi);

module.exports = function(){
    return router;
};
