const monthlySwiper = new Swiper(".swiper.monthly-special", {
  slidesPerView: "auto",
  spaceBetween: -24,
  clickable: true,
  breakpoints: {
    769: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
});
