const header = document.querySelectorAll("[data-header]");
const divMother = document.querySelector(".mother");
const lightbox = document.querySelector(".lightbox");
const linksMenu = document.querySelectorAll(".link-menu");
const linkActive = document.querySelector(".link-active");

function removeClass(element, nameClass) {
    element = document.querySelector("." + nameClass);
    element.classList.remove(nameClass);
}

function addClass(element, nameClass) {
    element.classList.add(nameClass);
}

function setCurrentPage() {
    return Math.trunc(window.pageYOffset / window.innerHeight);
}

function setLinkActive(page) {
    removeClass(linkActive, "link-active");
    addClass(linksMenu[page], "link-active");
}

function controlSizeHeader() {
    let status = window.pageYOffset > 50 ? true : false;

    setLinkActive(setCurrentPage());

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
