document.addEventListener("DOMContentLoaded", function() {
    var storedText = localStorage.getItem("text");
    if (storedText) {
        document.getElementById("data").textContent = storedText;
    }
});
