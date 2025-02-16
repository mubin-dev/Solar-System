document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
        document.getElementById("popup").style.display = "flex";
    }, 10000);
});

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function redirectToPage() {
    window.location.href = "https://mubin.eu"; // My Portfolio
}