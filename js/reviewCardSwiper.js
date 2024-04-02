const reviewSlide = document.querySelectorAll(".review .swiper-slide");
const reviewSwiper = new Swiper(".swiper.review", {
  direction: "vertical",
  loopedSlides: reviewSlide.length,
  loop: true,
  slidesPerView: "auto",
  speed: 1000,
  freeMode: true,
  mousewheel: true,
});
