    var backText = document.getElementById("BackText"),
        frontText = document.getElementById("FrontText"),
        textFrontField = document.getElementById("front_text_field"),
        textBackField = document.getElementById("back_text_field");
    function send_front_text() {
        frontText.innerHTML = textFrontField.value;
    };

    function send_back_text() {
        backText.innerHTML = textBackField.value;
    };