$(document).ready(function() {
    $("#aboutBtn").click(function() {
        scrollTo("#aboutChunk");
    });
    $("#socialBtn").click(function() {
        scrollTo("#socialChunk");
    });
        $("#eduBtn").click(function() {
        scrollTo("#tamkChunk");
    });
        $("#forestBtn").click(function() {
        scrollTo("#metsaChunk");
    });
        $("#kyyBtn").click(function() {
        scrollTo("#kyyChunk");
    });
        $("#adlBtn").click(function() {
        scrollTo("#militaryChunk");
    });
        $("#exeriumBtn").click(function() {
        scrollTo("#exeriumChunk");
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