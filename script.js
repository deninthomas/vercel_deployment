document.getElementById("login-button").addEventListener("click", function() {
    document.getElementById("popup").style.display = "block";
});

document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
});

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
    document.getElementById("popup").style.display = "none";
});