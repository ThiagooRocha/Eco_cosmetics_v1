const cartBtn = document.querySelector(".cart");
const cart_order = document.querySelector(".cart__order");
const overlay = document.querySelector(".overlay");

cartBtn.addEventListener("click", () => {
    if (cart_order.classList.contains("active")) {
        closeCart();
    } else {
        openCart();
    }
})

overlay.addEventListener("click", closeCart)

function openCart() {
    cart_order.classList.add("active")
    overlay.classList.add("active")
    document.body.classList.add("body--menu");
}

function closeCart() {
    cart_order.classList.remove("active")
    overlay.classList.remove("active")
    document.body.classList.remove("body--menu");
}