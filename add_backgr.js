document.addEventListener("DOMContentLoaded", _ => {
    document.getElementById("bck_1").onchange = function() {
        let url = URL.createObjectURL(this.files[0]);
        document.getElementsByClassName("front")[0].style.backgroundImage = "url("+ url +")";
    }
    document.getElementById("bck_2").onchange = function() {
        let url = URL.createObjectURL(this.files[0]);
        document.getElementsByClassName("back")[0].style.backgroundImage = "url("+ url +")";
    }
});