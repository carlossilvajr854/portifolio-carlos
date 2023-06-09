const header = document.querySelectorAll("[data-header]");
const divMother = document.querySelector(".mother");
const lightbox = document.querySelector(".lightbox");
const modalSkills = document.querySelector(".modal");
const firstProject = document.querySelector("#first-project");
const linksMenu = document.querySelectorAll(".link-menu");
const linkActive = document.querySelector(".link-active");
const pTextAbout = document.getElementById("text-about");
let textAbout = [
    "Olá! Me chamo Carlos Silva e sou Desenvolvedor Frontend! Sou apaixonado por tecnologia, e acredito que através dela podemos contribuir para um mundo melhor, resolvendo os mais diversos problemas, desde os mais simples até os mais complexos.",
    "Sou um profissional proativo e dinâmico, amo novos desafios, principalmente os que exigem que eu me torne melhor para resolvê-los, estou sempre fazendo novos cursos, buscando me atualizar e aprimorar meus conhecimentos em Desenvolvimento de Softwares para melhorar minha performance e produtividade.",
    "Sou muito dedicado, esforçado e comprometido com minhas obrigações, tenho facilidade em aprender tudo o que me proponho, e me adapto rapidamente a novas tarefas, funções e tecnologias. Gosto de trabalhar em equipe e sempre que possível, gosto de ajudar pessoas do time em algo que tenho mais experiência que elas. Por isso, tenho certeza que posso contribuir em qualquer time com as minhas habilidades.",
    "Sou apaixonado por música, amo tocar violão e cantar, curto programas mais caseiros com minha família, como assistir filmes e séries com minha esposa e meus filhos.",
];
let buttonsSlideAbout, buttonSelected;
let timeSlide = 10;
let currentSlide = 0;
let statusModal = false;
let amountProjects = document.querySelectorAll(
    ".my-projects .carousel-item"
).length;
let currentProjectSlide = 0;
let currentMarginFirstProject = currentProjectSlide * sizeItemProject();

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

function activateLightbox() {
    lightbox.classList.toggle("active-lightbox", true);
}

function deactivateLightbox() {
    if (statusModal) {
        modalSkills.classList.toggle("active", false);
        statusModal = false;
    }

    lightbox.classList.toggle("active-lightbox", false);
}

function showMenu() {
    divMother.classList.toggle("show-menu", true);
    activateLightbox();
}

function hideMenu() {
    divMother.classList.toggle("show-menu", false);
    deactivateLightbox();
}

function createControlSlidesAbout() {
    buttonsSlideAbout = document.querySelectorAll(".button-slide-about");

    buttonsSlideAbout.forEach((element, index) => {
        element.addEventListener("click", () => {
            currentSlide = index;
            setSlideAbout("click");
        });
    });
}

function setSlideAbout(isClick) {
    pTextAbout.classList.toggle("slide-active", false);

    setTimeout(() => {
        pTextAbout.innerHTML = textAbout[currentSlide];
        buttonSelected = document.querySelector(".slide-selected");
        if (buttonSelected) {
            removeClass(buttonSelected, "slide-selected");
        }

        if (isClick) {
            timeSlide = 30;
        } else {
            timeSlide = 10;
        }

        addClass(buttonsSlideAbout[currentSlide], "slide-selected");
    }, 250);

    setTimeout(() => {
        pTextAbout.classList.toggle("slide-active", true);
    }, 400);
}

function timerAbout() {
    setInterval(() => {
        if (timeSlide > 0) {
            timeSlide--;
        } else {
            if (textAbout[currentSlide + 1]) {
                currentSlide++;
            } else {
                currentSlide = 0;
            }
            setSlideAbout();
        }
    }, 1000);
}

function createSlidesAbout() {
    let divButtons = document.querySelector(".buttons-slides-about");
    let button;

    textAbout.forEach(() => {
        button = document.createElement("button");
        button.className = "button-slide-about";
        divButtons.appendChild(button);
    });

    createControlSlidesAbout();
    setSlideAbout();
    timerAbout();
}

createSlidesAbout();

function openModalSkills() {
    statusModal = true;
    modalSkills.classList.toggle("active", true);
    activateLightbox();
}

function sizeItemProject() {
    return 100 / amountProjects;
}

function setSizeSliderProjects() {
    document.getElementById("carousel-slides-projects").style.width =
        amountProjects * 100 + "%";

    let carouselItems = document.querySelectorAll(".carousel-item");

    carouselItems.forEach((item) => {
        item.style.width = sizeItemProject() + "%";
    });
}

console.log(currentProjectSlide);
function nextProject() {
    currentProjectSlide++;
    if (currentProjectSlide < amountProjects) {
        currentMarginFirstProject -= sizeItemProject();
        firstProject.style.marginLeft = currentMarginFirstProject + "%";
    } else {
        currentMarginFirstProject = 0;
        firstProject.style.marginLeft = currentMarginFirstProject;
        currentProjectSlide = 0
    }
}

function previousProject() {
    if (currentProjectSlide > 0) {
        currentMarginFirstProject += sizeItemProject();
        firstProject.style.marginLeft = currentMarginFirstProject + "%";
        currentProjectSlide--;
    } else {
        currentMarginFirstProject = -100 + sizeItemProject() + "%";
        firstProject.style.marginLeft = currentMarginFirstProject;
        currentProjectSlide = amountProjects-1;
    }
    
    console.log(currentMarginFirstProject);
    console.log(currentProjectSlide);
}

setSizeSliderProjects();
