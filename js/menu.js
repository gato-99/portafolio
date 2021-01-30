const btnIcon = document.getElementById("btn-icon");
const menu = document.getElementById("menu");
const mainMenu = document.getElementById("main_menu");
btnIcon.addEventListener("click", () => {
  menu.classList.toggle("menu--open_menu");
  mainMenu.classList.toggle("menu--open_menu");
});

