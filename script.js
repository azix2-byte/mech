// =========================
// MENU MOBILNE
// =========================

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// Zamknięcie menu po kliknięciu w link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// =========================
// AKTUALNY ROK W STOPCE
// =========================

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();