const header = document.querySelectorAll("[data-header]");
const divMother = document.querySelector(".mother");
const lightbox = document.querySelector(".lightbox");
const linksMenu = document.querySelectorAll(".link-menu");
const linkActive = document.querySelector(".link-active");
const pTextAbout = document.querySelector("#text-about");
let textAbout = [
    "Olá! Me chamo Carlos Silva e sou Desenvolvedor Frontend! Sou apaixonado por tecnologia, e acredito que através dela podemos contribuir para um mundo melhor, resolvendo os mais diversos problemas, desde os mais simples até os mais complexos.",
    "Sou um profissional proativo e dinâmico, amo novos desafios, principalmente os que exigem que eu me torne melhor para resolvê-los, estou sempre fazendo novos cursos, buscando me atualizar e aprimorar meus conhecimentos em Desenvolvimento de Softwares para melhorar minha performance e produtividade.",
    "Sou muito dedicado, esforçado e comprometido com minhas obrigações, tenho facilidade em aprender tudo o que me proponho, e me adapto rapidamente a novas tarefas, funções e tecnologias. Gosto de trabalhar em equipe e sempre que possível, gosto de ajudar pessoas do time em algo que tenho mais experiência que elas. Por isso, tenho certeza que posso contribuir em qualquer time com as minhas habilidades.",
    "Sou apaixonado por música, amo tocar violão e cantar, curto programas mais caseiros com minha família, como assistir filmes e séries com minha esposa e meus filhos.",
];

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

function timerAbout() {
    let timeSlide = 10;
    let amountSlides = textAbout.length;
    let currentSlide = 0;

    setInterval(() => {
        if (timeSlide > 0) {
            timeSlide--;
        } else {
        }
    }, 1000);
}

function controlTextAbout() {}

controlTextAbout();
