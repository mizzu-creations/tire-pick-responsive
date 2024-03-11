const productListswiper = new Swiper(".swiper.product-list", {
  slidesPerView: 2.2,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  breakpoints: {
    769: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next.product-list",
    prevEl: ".swiper-button-prev.product-list",
  },
});
