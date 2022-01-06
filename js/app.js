const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

//display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener("click", mobileMenu);

//show active menu
const highlightMenu = () => {
    const elem = document.querySelector(".highlight");
    const homeMenu = document.querySelector("#home-page");
    const aboutMenu = document.querySelector("#about-page");
    const projectsMenu = document.querySelector("#projects-page");
    const interestsMenu = document.querySelector("#interests-page");
    const contactMenu = document.querySelector("#contact-page");
    let scrollPos = window.scrollY;

    //add highlight class to my menu items
    if (window.innerWidth > 960) {
        if (scrollPos < 600){
            homeMenu.classList.add("highlight");
            aboutMenu.classList.remove("highlight");
            return;
        } else if (scrollPos < 1500) {
            homeMenu.classList.remove("highlight");
            aboutMenu.classList.add("highlight");
            projectsMenu.classList.remove("highlight");
            return;
        } else if (scrollPos < 3000) {
            aboutMenu.classList.remove("highlight");
            projectsMenu.classList.add("highlight");
            interestsMenu.classList.remove("highlight");
            return;
        } else if (scrollPos < 3300) {
            projectsMenu.classList.remove("highlight");
            interestsMenu.classList.add("highlight");
            contactMenu.classList.remove("highlight");
            return;
        } else if (scrollPos < 6000) {
            interestsMenu.classList.remove("highlight");
            contactMenu.classList.add("highlight");
            return;
        }
    }

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
        elem.classList.remove("highlight");
    }
};

window.addEventListener("scroll", highlightMenu);
window.addEventListener("click", highlightMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector(".is-active");
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle("is-active");
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener("click", hideMobileMenu);
navLogo.addEventListener("click", hideMobileMenu);