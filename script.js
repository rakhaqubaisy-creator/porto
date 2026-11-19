
// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// CLOSE MENU WHEN LINK IS CLICKED

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navMenu.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .skill-item, .project-card, .contact-content"
);

revealElements.forEach(function(element) {
    element.classList.add("reveal");
});

const observer = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            entry.target.classList.add("active");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});


revealElements.forEach(function(element) {
    observer.observe(element);
});


// =========================
// NAVBAR SCROLL EFFECT
// =========================

window.addEventListener("scroll", function() {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.background = "rgba(17, 17, 17, 0.95)";
        header.style.backdropFilter = "blur(10px)";

    } else {

        header.style.background = "transparent";
        header.style.backdropFilter = "none";

    }

});
