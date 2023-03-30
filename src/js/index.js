function controlSizeHeader() {
    if (window.pageYOffset > 50) {
        shrinkHeader();
    } else {
        increaseHeader();
    }
}

function shrinkHeader() {
    let tagHeader = document.getElementsByTagName("header")[0];
    tagHeader.style.animation = "";
    tagHeader.classList.add("headerMinimizado");
    let logo = document.getElementsByClassName("logo")[0];
    logo.style.animation = "";
    logo.classList.add("logoMinimizada");
    let hamburger = document.getElementsByClassName("hamburger")[0];
    hamburger.style.animation = "";
    hamburger.classList.add("hamburgerMinimizado");
}

function increaseHeader() {
    let tagHeader = document.getElementsByTagName("header")[0];
    tagHeader.style.animation = "aumentarHeader 1s";
    tagHeader.classList.remove("headerMinimizado");
    let logo = document.getElementsByClassName("logo")[0];
    logo.style.animation = "aumentarLogo 1s";
    logo.classList.remove("logoMinimizada");
    let hamburger = document.getElementsByClassName("hamburger")[0];
    hamburger.style.animation = "aumentarHamburger 1s";
    hamburger.classList.remove("hamburgerMinimizado");
}

function showMenu() {
    let divMother = document.querySelector(".mother");
    divMother.classList.toggle("show-menu");
}
