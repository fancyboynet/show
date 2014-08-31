module.exports = function(isDev){
    return function(err, req, res, next) {
        var status = err.status || 500;
        res.status(status);
        res.render('error', {
            header : {
                title : status,
                version : req.app.get('version'),
                canAdd : false
            },
            message: err.message,
            error: isDev ? err : {}
        });
    };
};