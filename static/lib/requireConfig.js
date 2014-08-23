require.config({
    paths : {
        'jquery' : '/bower_components/jquery/dist/jquery.min',
        'bootstrap' : '/bower_components/bootstrap/dist/js/bootstrap.min',
        'addOne' : '/static/modules/addOne'
    },
    shim : {
        'bootstrap' : {
            deps : ['jquery']
        }
    }
});