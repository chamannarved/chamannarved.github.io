const menuBtn = document.querySelector(".menu-btn");
const menuSection = document.querySelector(".menu-section");
const closeBtn = document.querySelector('.btn-close');

menuBtn.addEventListener("click", function() {
    menuSection.classList.remove("hide-menu");
    menuSection.classList.add("show-menu");
});

closeBtn.addEventListener('click', function() {
    menuSection.classList.remove("show-menu");
    menuSection.classList.add("hide-menu");
});

window.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth > 600) {
        menuSection.classList.remove("hide-menu");
    } else {
        menuSection.classList.add("hide-menu");
    }
});

// const themeBtn = document.querySelector(".theme-btn");
// const themeIcon = themeBtn.getHTML;
//
// themeBtn.addEventListener("click", function() {
//     themeBtn.innerHTML = "<img src='assets/imgs/light-theme-icon.svg' alt='lignt-theme-icon' width='30'/>";
//     document.getRootNode.set colorScheme(light) {
//
//     }
// });
