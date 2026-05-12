/* SCROLL REVEAL */

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(reveal => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        reveal.getBoundingClientRect().top;

        const revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){

            reveal.classList.add("active");

        }

    });

});


/* LIGHTBOX */

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

const galleryImages =
document.querySelectorAll(".grid-item img");

const closeLightbox =
document.querySelector(".close-lightbox");

/* OPEN */

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("active");

        lightboxImg.src = img.src;

    });

});

/* CLOSE BUTTON */

closeLightbox.addEventListener("click", () => {

    lightbox.classList.remove("active");

});

/* CLOSE WHEN CLICKING OUTSIDE */

lightbox.addEventListener("click", (e) => {

    if(e.target !== lightboxImg){

        lightbox.classList.remove("active");

    }

});
