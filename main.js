
$(document).ready(function () {
    busTimeInit();
    busBind();
})

function busTimeInit() {
    $(".realTimePage").hide();
}

function busBind() {
    $("#realTime").unbind().bind('click', function () {
        window.location.href = './realTime.html';
    });

    $("#totalTime").unbind().bind('click', function () {
        window.location.href = './totalTime.html'
    });

    $("#recomendMenu").unbind().on("click", function() {
        window.location.href = './recommendMenu.html'
    })
}
