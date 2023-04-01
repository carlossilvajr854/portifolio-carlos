const header = document.querySelectorAll("[data-header]");
const divMother = document.querySelector(".mother");
const lightbox = document.querySelector(".lightbox");

function controlSizeHeader() {
    let status = window.pageYOffset > 50 ? true : false;

    header[0].classList.toggle("animate-header", status);
    header[1].classList.toggle("animate-logo-header", status);
    header[2].classList.toggle("animate-hamburger-header", status);
}

function showMenu() {
    divMother.classList.toggle("show-menu", true);
    lightbox.classList.toggle("active-lightbox", true);
}

function hideMenu() {
    divMother.classList.toggle("show-menu", false);
    lightbox.classList.toggle("active-lightbox", false);
}
