require(['jquery', 'bootstrap', 'ejs', 'addOne'], function($) {
    var tplWork = $('#tplWork').html();
    var $Win = $(window);
    var $Doc = $(document);
    var $Works = $('#works');
    var _isGetting = false;
    var _lastPage = 2;
    var _isEnd = false;
    var isGoingToGetMore = function(){
        if(($Win.height() + $Doc.scrollTop()) >= $Doc.height()){
            return true;
        }
        return false;
    };
    var unbindGetMore = function(){
        $Win.off('scroll');
    };
    var getMoreWorks = function(){
        if(_isGetting){
            return;
        }
        if(_isEnd){
            unbindGetMore();
            return;
        }
        _isGetting = true;
        $.ajax({
            url : '/api/works',
            data : {
                p : _lastPage
            },
            dataType : 'json',
            success : function(data){
                if(data.status === -1){
                    console.log(data.message);
                    return;
                }
                data = data.data;
                if(data.totalPages <= _lastPage){
                    _isEnd = true;
                }
                _lastPage = _lastPage + 1;
                render(data.works);
            },
            complete : function(){
                _isGetting = false;
            }
        });
    };
    var render = function(works){
        var html = [];
        works = group(works, 3);
        $.each(works, function(i, v){
            html.push('<div class="row">');
            $.each(v, function(i, v){
                html.push('<div class="col-md-4">');
                html.push(ejs.render(tplWork, {
                    work : v
                }));
                html.push('</div>');
            });
            html.push('</div>');
        });
        $Works.append(html.join(''));
    };
    var group = function(data, size){
        var output = [];
        var raw = [];
        var len = data.length;
        $.each(data, function(i, v){
            raw.push(v);
            if((i === len - 1) || ((i + 1) % size === 0)){
                output.push(raw);
                raw = [];
            }
        });
        return output;
    };
    $Win.on('scroll', function(){
        if(isGoingToGetMore()){
            getMoreWorks();
        }
    });
});