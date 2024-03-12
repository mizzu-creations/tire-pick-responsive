const breakWidth = {
  490: {
    slidesPerView: 1.3,
    spaceBetween: 0,
  },
  590: {
    slidesPerView: 1.7,
    spaceBetween: 0,
  },
  690: {
    slidesPerView: 2.1,
    spaceBetween: 0,
  },
  769: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const productListswiper = new Swiper(".swiper.product-list", {
  slidesPerView: 1.07,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  breakpoints: {
    ...breakWidth,
  },
  navigation: {
    nextEl: ".swiper-button-next.product-list",
    prevEl: ".swiper-button-prev.product-list",
  },
});
