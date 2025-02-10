const thumbnails = document.querySelectorAll(
  ".product-detail__image--thumbnail"
);
const mainImage = document.querySelector(".product-detail__image--main");

thumbnails.forEach((thumb) => {
  thumb.addEventListener("click", (e) => {
    mainImage.src = e.target.src;
  });
});

export default thumbnails;
