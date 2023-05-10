const NAVBAR = document.querySelector(".navbar");

function controlSizeHeader() {
    let status = null;

    status = window.pageYOffset > 50 ? true : false;
    NAVBAR.classList.toggle("navbar-retract", status);
}
