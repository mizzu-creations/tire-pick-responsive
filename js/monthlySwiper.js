const swiperBreaks = {
  350: {
    slidesPerView: 1.3,
    spaceBetween: -4,
  },
  380: {
    slidesPerView: 1.4,
    spaceBetween: -4,
  },
  430: {
    slidesPerView: 1.6,
    spaceBetween: -4,
  },
  508: {
    slidesPerView: 1.9,
    spaceBetween: -4,
  },
  600: {
    slidesPerView: 2.2,
    spaceBetween: -4,
  },
  700: {
    slidesPerView: 2.5,
    spaceBetween: -4,
  },
  769: {
    slidesPerView: 3,
    spaceBetween: 24,
  },
};
const monthlySwiper = new Swiper(".swiper.monthly-special", {
  slidesPerView: 1.2,
  spaceBetween: -4,
  clickable: true,
  breakpoints: {
    ...swiperBreaks,
  },
});
