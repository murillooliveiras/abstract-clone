const toggle = document.querySelector(".header_toggle");
const menu = document.querySelector(".header_action");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
});