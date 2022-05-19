const burgerButton = document.getElementById("icon-open");
const closeButton = document.getElementById("close-icon");
const mobileMenu = document.getElementById("menu");


burgerButton.addEventListener("click", function handleClick() {
    mobileMenu.style.display = "flex";
});

closeButton.addEventListener("click", function handleClick() {
    mobileMenu.style.display = "none";

});