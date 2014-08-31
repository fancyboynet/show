var express = require('express');
var router = express.Router();
var dtWorks = _require('controllers/data/works');

router.get('/', function(req, res, next){
    var page = req.param('p');
    var pageRecords = req.param('pd');
    dtWorks.get(page, function(err, data){
        if(err){
            res.json({
                status : -1,
                message : err.message
            });
            return;
        }
        res.json({
            status : 1,
            data : data
        });
    }, pageRecords);
});


module.exports = router;
