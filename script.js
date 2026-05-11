/* NAVBAR BACKGROUND ON SCROLL */

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/* SCROLL REVEAL ANIMATION */

const revealElements =
document.querySelectorAll(
".philosophy, .project-card, .parallax, .process-item, .contact"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add("active");

        }

    });

};

window.addEventListener(
"scroll",
revealOnScroll
);

/* INITIAL CHECK */

revealOnScroll();


/* MOBILE MENU */

const menuToggle =
document.getElementById("menuToggle");

const mobileMenu =
document.getElementById("mobileMenu");

const mobileLinks =
document.querySelectorAll(".mobile-link");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    menuToggle.classList.toggle("active");

});

mobileLinks.forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuToggle.classList.remove("active");

    });

});
