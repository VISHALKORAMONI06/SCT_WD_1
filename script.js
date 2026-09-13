// ================= NAVBAR SCROLL EFFECT =================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// ================= MOBILE MENU =================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// Close mobile menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// ================= MENU FILTER =================

const filterButtons =
    document.querySelectorAll(".filter");

const menuCards =
    document.querySelectorAll(".menu-card");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        // Remove active class from all buttons

        filterButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });


        // Add active class to clicked button

        button.classList.add("active");


        const category =
            button.getAttribute("data-category");


        // Filter menu cards

        menuCards.forEach(function (card) {

            const cardCategory =
                card.getAttribute("data-category");


            if (
                category === "all" ||
                category === cardCategory
            ) {

                card.style.display = "flex";

            } else {

                card.style.display = "none";

            }

        });

    });

});


// ================= ADD TO ORDER =================

const orderButtons =
    document.querySelectorAll(
        ".order-btn, .small-order"
    );

const toast =
    document.getElementById("toast");


orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const food =
            button.getAttribute("data-food");


        toast.querySelector("span").textContent =
            food + " added to your order!";


        toast.classList.add("show");


        setTimeout(function () {

            toast.classList.remove("show");

        }, 2200);

    });

});