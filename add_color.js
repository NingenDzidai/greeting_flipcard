var FrontText = document.getElementById("FrontText"),
    BackText = document.getElementById("BackText"),
    ColorTextFront = document.getElementById("ColorTextFront"),
    ColorTextBack = document.getElementById("ColorTextBack");

function FTextColorSend() {
    FrontText.style.color = ColorTextFront.value;
}    

function BTextColorSend() {
    BackText.style.color = ColorTextBack.value;
}

document.getElementById("FrontColorBtn").addEventListener("click", FTextColorSend);
document.getElementById("BackColorBtn").addEventListener("click", BTextColorSend);