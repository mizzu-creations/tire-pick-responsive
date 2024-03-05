const productListswiper = new Swiper(".swiper.product-list", {
  slidesPerView: 4,
  spaceBetween: 24,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // breakpoints: {
  //   1280: {
  //     slidesPerView: 3
  //   },
  //   800: {
  //     slidesPerView: 2
  //   },
  //   640: {
  //     slidesPerView: 1
  //   }
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
