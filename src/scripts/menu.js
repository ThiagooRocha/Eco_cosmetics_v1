const btn_menu_burguer = document.querySelector(".btn_menu-burguer");
const btn_menu_close = document.querySelector(".btn_menu-close");
const menu_section = document.querySelector(".menu");
const nav__link = document.querySelectorAll(".nav__list__item__link");

btn_menu_burguer.addEventListener("click", openMenu);

btn_menu_close.addEventListener("click", closeMenu);

nav__link.forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

function openMenu() {
  menu_section.classList.add("active");
  document.body.classList.add("body--menu");
}

function closeMenu() {
  menu_section.classList.remove("active");
  document.body.classList.remove("body--menu");
}
