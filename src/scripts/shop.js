const shop_product_title = document.querySelectorAll(".shop_product__title");
const card_img = document.querySelector("#card_img__img");
const card_title = document.querySelector(".card_infos__title");
const card_price = document.querySelector(".card_infos__price");

shop_product_title.forEach((link) => {
  link.addEventListener("click", () => {
    shop_product_title.forEach((el) => el.classList.remove("title--active"));

    switch (link.textContent) {
      case "face":
        card_img.src = "./src/images/mobile_hydrophilic-oil.png";
        card_title.textContent = "Hydrophilic oil";
        card_price.textContent = "160 UAH";
        break;
      case "body":
        card_img.src = "./src/images/moonligth.png";
        card_title.textContent = "Moonligth";
        card_price.textContent = "30 UAH";
        break;
      case "hair":
        card_img.src = "./src/images/almondShampoo.png";
        card_title.textContent = "Almond Shampoo";
        card_price.textContent = "80 UAH";
        break;
      case "candles":
        card_img.src = "./src/images/mobile_hero_image.png";
        card_title.textContent = "Candle";
        card_price.textContent = "60 UAH";
        break;
    }

    link.classList.add("title--active");
  });
});
