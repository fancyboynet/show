require.config({
    baseUrl: "/",
    paths : {
        'jquery' : 'bower_components/jquery/dist/jquery.min',
        'bootstrap' : 'bower_components/bootstrap/dist/js/bootstrap.min',
        'ejs' : 'bower_components/ejs/ejs.min',
        'addOne' : 'static/modules/addOne'
    },
    shim : {
        'bootstrap' : {
            deps : ['jquery']
        }
    }
});