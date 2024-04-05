const miniBannerSwiper = new Swiper(".swiper.mini", {
  slidesPerView: "auto",
  spaceBetween: -30,
  navigation: {
    nextEl: ".swiper-button-next.mini",
    prevEl: ".swiper-button-prev.mini",
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});
