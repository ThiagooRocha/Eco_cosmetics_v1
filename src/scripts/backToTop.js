const page_body = document.querySelector(".page__body");
const backToTop_btn = document.querySelector(".back_to_top__btn");

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop_btn.classList.add('active')
    } else {
        backToTop_btn.classList.remove('active')
    }
    
});