$(document).ready(function() {
    $("#aboutBtn").click(function() {
        scrollTo("#aboutChunk");
    });
    $("#socialBtn").click(function() {
        scrollTo("#socialChunk");
    });
});

var scrollSpeed = 1500;

function Alert() {
    window.alert(5 + 6);
}

function scrollTo(id) {
    $('html, body').animate({
        scrollTop: $(id).offset().top
    }, scrollSpeed);
}