var Height = document.getElementById("HeightField"),
    Width = document.getElementById("WidthField");

function HeightSend() {
    document.getElementsByClassName("card")[0].style.height = Height.value + "px";
}

function WidthSend() {
    document.getElementsByClassName("card")[0].style.width = Width.value + "px";
}

document.getElementById("HeightBtn").addEventListener("click", HeightSend);
document.getElementById("WidthBtn").addEventListener("click", WidthSend);