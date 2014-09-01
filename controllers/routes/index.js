var express = require('express');
var router = express.Router();
var extend = require('f-extend');
var dtWorks = _require('controllers/data/works');
router.get('/', function(req, res, next) {
    dtWorks.get(function(err, data){
        if(err){
            next(err);
            return;
        }
        res.render('index', {
            header : {
                title : 'Show',
                version : req.app.get('version'),
                canAdd : true
            },
            works : data.works
        });
    });
});

router.post('/', function(req, res, next){

    if(req.body.code !== 'ctkj0571'){
        next(new Error('邀请码不正确'));
        return;
    }

    var data = extend({
        "name" : "",
        "author" : "",
        "email" : "",
        "des" : "",
        "img" : "",
        "url" : ""
    }, req.body);

    if(!data.name){
        next(new Error('作品名称必填'));
        return;
    }
    if(!data.author){
        next(new Error('作者必填'));
        return;
    }
    if(!data.email){
        next(new Error('邮箱必填'));
        return;
    }
    if(!data.des){
        next(new Error('描述必填'));
        return;
    }
    if(!data.img){
        next(new Error('封面图片必填'));
        return;
    }
    if(!data.url){
        next(new Error('作品地址必填'));
        return;
    }
    data.time = new Date();
    dtWorks.add(data, function(err){
        if(err){
            next(err);
            return;
        }
        res.redirect('/');
    });
});

module.exports = router;
