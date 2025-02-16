const mainImage = document.querySelector(".product-detail__image--main");

document.querySelector(".product-detail__thumbnails").addEventListener("click", (e) => {
  if (e.target.classList.contains("product-detail__image--thumbnail")) {
    mainImage.src = e.target.src;
  }
});
