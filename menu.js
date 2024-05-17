const btn_menu_burguer = document.querySelector(".btn_menu-burguer");
const btn_menu_close = document.querySelector(".btn_menu-close");
const menu_section = document.querySelector(".menu");


btn_menu_burguer.addEventListener('click', () => {
    menu_section.classList.add("active")
})

btn_menu_close.addEventListener('click', () => {
    menu_section.classList.remove("active")
})