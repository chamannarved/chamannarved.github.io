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

