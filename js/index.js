document.getElementById("buttonText").addEventListener("click", function() {
    textvalue = document.getElementById("inputText").value;
    localStorage.setItem("text", textvalue);
});