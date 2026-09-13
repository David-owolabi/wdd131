const menuButton = document.querySelector("#menu");
const navBar = document.querySelector("nav");

menuButton.addEventListener("click", function () {
  navBar.classList.toggle("show");
  menuButton.classList.toggle("open");
});
