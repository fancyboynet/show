define(["jquery", "bootstrap"], function($) {
    var $Modal = $('#modalAddOne');
    var $Btn = $('#btnAddOne');
    var $Form = $('#formAddOne');
    $Btn.on('click', function(){
        $Modal.modal();
    });
    $Form.on('submit', function(){
        $Btn.attr('disabled', 'disabled').button('提交中...');
    });
    return {
        show : function(){
            $Modal.modal('show');
        },
        hide : function(){
            $Modal.modal('hide');
        }
    }
});