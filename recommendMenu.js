
$(document).ready(function () {
    junMatInit();
    junMatBind();
})

function junMatInit() {

}

function junMatBind() {
    $("#back").unbind().bind("click", function () {
        window.location.href = "./index.html";
    })
}