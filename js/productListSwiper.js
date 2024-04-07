import {
  bestSeller,
  lowestPrice,
  risingProduct,
  winter,
  women,
  wiper,
  storage,
} from "./productListData.js";
import {
  basicProductCard,
  risingProductCard,
} from "./productListCardTemplate.js";

const swiperSectons = document.querySelectorAll(".product-list .swiper");

const createProductCard = () => {
  swiperSectons.forEach((section) => {
    const wrapper = section.querySelector(".swiper-wrapper");
    if (section.classList.contains("lowest-price")) {
      lowestPrice.forEach((data) => {
        wrapper.insertAdjacentHTML("beforeend", basicProductCard(data));
      });
    } else if (section.classList.contains("winter")) {
      winter.forEach((data) => {
        wrapper.insertAdjacentHTML("beforeend", basicProductCard(data));
      });
    } else if (section.classList.contains("women")) {
      women.forEach((data) => {
        wrapper.insertAdjacentHTML("beforeend", basicProductCard(data));
      });
    } else if (section.classList.contains("wiper")) {
      wiper.forEach((data) => {
        wrapper.insertAdjacentHTML("beforeend", basicProductCard(data));
      });
    } else if (section.classList.contains("storage")) {
      storage.forEach((data) => {
        wrapper.insertAdjacentHTML("beforeend", basicProductCard(data));
      });
    } else if (!section.classList.contains("rising-product")) {
      bestSeller.forEach((data) => {
        wrapper.insertAdjacentHTML("beforeend", basicProductCard(data));
      });
    } else {
      risingProduct.forEach((data) => {
        wrapper.insertAdjacentHTML("beforeend", risingProductCard(data));
      });
    }

    if (
      !section.classList.contains("best-seller") &&
      !section.classList.contains("rising-product")
    ) {
      wrapper.insertAdjacentHTML(
        "beforeend",
        `<div class="swiper-slide view-all">
        <a href="javascript:void(0)">
          <div></div>
          전체보기
        </a>
      </div>`
      );
    }
  });
};
const changeRankColor = () => {
  const firstRankTire = document.querySelector(
    ".swiper.product-list .product__img__rank"
  );
  firstRankTire.style.backgroundColor = "#7b3ff1";
};

createProductCard();
changeRankColor();

const risingList = document.querySelector(".swiper.rising-product");
const risingWrapper = document.querySelector(
  ".swiper.rising-product .swiper-wrapper"
);
const risingSlide = document.querySelectorAll(
  ".swiper.rising-product .swiper-wrapper .swiper-slide"
);

const gap = 16;

swiperSectons.forEach((section) => {
  const uniqueClassName = Array.from(section.classList).find(
    (className) => className !== "swiper" && className !== "product-list"
  );

  window.addEventListener("resize", () => {
    if (window.innerWidth < 540 && uniqueClassName === "rising-product") {
      let height = 0;

      risingSlide.forEach((el) => (height += el.offsetHeight));

      height += gap * risingSlide.length - 1;

      risingList.style.height = `${height}px`;
      risingWrapper.style.height = `${height}px`;
    } else if (
      window.innerWidth < 769 &&
      uniqueClassName === "rising-product"
    ) {
      let height = 0;

      risingSlide.forEach((el) => (height += el.offsetHeight));

      height += gap * risingSlide.length - 1;

      risingList.style.height = `${height / 2}px`;
      risingWrapper.style.height = `${height / 2}px`;
    } else if (window.innerWidth >= 769) {
      risingList.style.height = "42rem";
      risingWrapper.style.height = "42rem";
    }

    if (window.innerWidth <= 769 && uniqueClassName === "rising-product") {
      return;
    } else {
      const productSwiper = new Swiper(`.swiper.${uniqueClassName}`, {
        slidesPerView: "auto",
        spaceBetween: uniqueClassName === "best-seller" ? -40 : -24,
        pagination: {
          el: `.swiper-pagination.${uniqueClassName}`,
          clickable: false,
        },
        breakpoints: {
          769: {
            slidesPerView: 4,
            spaceBetween: 24,
          },
        },
        navigation: {
          nextEl: `.swiper-button-next.${uniqueClassName}`,
          prevEl: `.swiper-button-prev.${uniqueClassName}`,
        },
      });
      productSwiper.update();
    }
  });

  if (window.innerWidth < 540 && uniqueClassName === "rising-product") {
    let height = 0;

    risingSlide.forEach((el) => (height += el.offsetHeight));

    height += gap * risingSlide.length - 1;

    risingList.style.height = `${height}px`;
    risingWrapper.style.height = `${height}px`;
  } else if (window.innerWidth < 769 && uniqueClassName === "rising-product") {
    let height = 0;

    risingSlide.forEach((el) => (height += el.offsetHeight));

    height += gap * risingSlide.length - 1;

    risingList.style.height = `${height / 2}px`;
    risingWrapper.style.height = `${height / 2}px`;
  } else if (window.innerWidth >= 769) {
    risingList.style.height = "42rem";
    risingWrapper.style.height = "42rem";
  }

  if (window.innerWidth <= 780 && uniqueClassName === "rising-product") {
    return;
  } else {
    new Swiper(`.swiper.${uniqueClassName}`, {
      slidesPerView: "auto",
      spaceBetween: uniqueClassName === "best-seller" ? -40 : -24,
      pagination: {
        el: `.swiper-pagination.${uniqueClassName}`,
        clickable: false,
      },
      breakpoints: {
        769: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      },
      navigation: {
        nextEl: `.swiper-button-next.${uniqueClassName}`,
        prevEl: `.swiper-button-prev.${uniqueClassName}`,
      },
    });
  }
});
