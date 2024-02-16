const navbarListDOM = document.querySelector(".navbar__list"); // Cambiado a querySelector
const navbarLinksDOM = document.querySelectorAll(".navbar__link");
const sectionsDOM = document.querySelectorAll("section");

function activeMenu(e){
    if (e && e.type === "click") {
        const clickedLink = e.target.closest(".navbar__link"); // Corrección en closest
        const activeLinks = document.querySelectorAll(".navbar__link.active"); // Cambiado a querySelectorAll

        activeLinks.forEach(link => {
            link.classList.remove("active");
        });

        if (clickedLink) {
            clickedLink.classList.add("active");
        }
    } else if (e && e.type === "scroll") {
        const scrollPosition = window.scrollY + 50;

        for (let i = sectionsDOM.length - 1; i >= 0; i--) {
            if (scrollPosition >= sectionsDOM[i].offsetTop) {
                const activeLink = navbarListDOM.querySelector(".navbar__link.active"); // Corrección en querySelector
                if (activeLink) {
                    activeLink.classList.remove("active");
                }
                navbarLinksDOM[i].classList.add("active");
                break;
            }   
        }
    }
}

navbarListDOM.addEventListener("click", activeMenu);
window.addEventListener("scroll", activeMenu);

export default activeMenu;


