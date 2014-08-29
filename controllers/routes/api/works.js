var express = require('express');
var router = express.Router();
var dtWorks = _require('controllers/data/works');

router.get('/', function(req, res, next){
    dtWorks.get(function(err, data){
        if(err){
            res.json(null);
            return;
        }
        res.json(data);
    });
});


module.exports = router;
