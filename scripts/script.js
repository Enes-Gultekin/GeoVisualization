const images = document.querySelectorAll(".mid_container img");
const mainImage = document.querySelector(".right_container img");

images.forEach((image) => {
  image.addEventListener("click", function () {
    console.log(this.alt);
    mainImage.src = this.src;
  });
});
