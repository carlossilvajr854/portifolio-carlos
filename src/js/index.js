const NAVBAR = document.querySelector(".navbar");
const LINKS_MENU = document.querySelectorAll(".nav-link");
const LINK_ATIVO = document.querySelector(".nav-link .active");

function removeClasse(elemento, nomeClasse) {
    elemento = document.querySelector("." + nomeClasse);
    elemento.classList.remove(nomeClasse);
}

function adicionaClasse(elemento, nomeClasse) {
    elemento.classList.add(nomeClasse);
}

function definePaginaAtual() {
    return Math.trunc(window.pageYOffset / window.innerHeight);
}

function marcaLinkAtivo(pagina) {
    removeClasse(LINK_ATIVO, "active");
    adicionaClasse(LINKS_MENU[pagina], "active");
}

function ajustaNavbar() {
    let status = null;

    marcaLinkAtivo(definePaginaAtual());

    status = window.pageYOffset > 50 ? true : false;
    NAVBAR.classList.toggle("navbar-retract", status);
}
