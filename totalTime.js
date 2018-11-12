$(document).ready(function(){

    totalTimeBind();
});

function totalTimeBind() {
    $("#backHome").unbind().bind('click',function() {
        window.location.href = './index.html';
    });
}