document.addEventListener("DOMContentLoaded", _ => {
    var backText = document.getElementById("text_back"),
        frontText = document.getElementById("text_front"),
        textFrontField = document.getElementById("front_text_field"),
        textBackField = document.getElementById("back_text_field");
    function send_front_text() {
        textFrontField = frontText.innerHTML;
    };

    function send_back_text() {
        textBackField = backText.innerHTML;
    };
});