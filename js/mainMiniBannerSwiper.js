const miniBannerSwiper = new Swiper(".swiper.mini", {
  slidesPerView: "auto",
  spaceBetween: -30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
