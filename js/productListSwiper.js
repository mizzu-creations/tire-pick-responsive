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
  viewAll,
} from "./productListCardTemplate.js";

const sections = [
  { name: "lowest-price", data: lowestPrice },
  { name: "winter", data: winter },
  { name: "women", data: women },
  { name: "wiper", data: wiper },
  { name: "storage", data: storage },
  { name: "rising-product", data: risingProduct },
  { name: "best-seller", data: bestSeller },
];

// Swiper 초기화 및 섹션 처리 함수
const initializeSections = () => {
  sections.forEach((section) => {
    const sectionElement = document.querySelector(`.${section.name}`);
    if (sectionElement) {
      const wrapper = sectionElement.querySelector(".swiper-wrapper");
      const isBestSeller = section.name === "best-seller";
      const isRisingProduct = section.name === "rising-product";

      renderProductCards(section.data, wrapper, isRisingProduct);
      initializeSwiper(section.name, isBestSeller);
      addViewAllButton(wrapper, section.name);

      if (isBestSeller) {
        const firstRankTire = wrapper.querySelector(".product__img__rank");
        if (firstRankTire) {
          firstRankTire.style.backgroundColor = "#7b3ff1";
        }
      }
      if (isRisingProduct) {
        handleRisingProductResize(sectionElement, wrapper);
        window.addEventListener("resize", () =>
          handleRisingProductResize(sectionElement, wrapper)
        );
      }
    }
  });
};
// Swiper 초기화 함수
const initializeSwiper = (sectionName, isBestSeller) => {
  new Swiper(`.swiper.${sectionName}`, {
    slidesPerView: "auto",
    spaceBetween: isBestSeller ? -40 : -24,
    pagination: {
      el: `.swiper-pagination.${sectionName}`,
      clickable: false,
    },
    breakpoints: {
      769: {
        slidesPerView: 4,
        spaceBetween: 24,
      },
    },
    navigation: {
      nextEl: `.swiper-button-next.${sectionName}`,
      prevEl: `.swiper-button-prev.${sectionName}`,
    },
  });
};
// 제품 카드 생성 함수
const renderProductCards = (data, wrapper, isRisingProduct) => {
  data.forEach((item) => {
    const cardTemplate = isRisingProduct
      ? risingProductCard(item)
      : basicProductCard(item);
    wrapper.insertAdjacentHTML("beforeend", cardTemplate);
  });
};
// 전체보기 버튼 추가 함수
const addViewAllButton = (wrapper, sectionName) => {
  if (!["best-seller", "rising-product"].includes(sectionName)) {
    wrapper.insertAdjacentHTML("beforeend", viewAll());
  }
};
// rising product 섹션 리사이징 처리 함수
const handleRisingProductResize = (sectionElement, wrapper) => {
  const risingSlide = wrapper.querySelectorAll(".swiper-slide");
  const setRisingListHeight = (height) => {
    sectionElement.style.height = `${height}px`;
    wrapper.style.height = `${height}px`;
  };
  const calculateHeight = () => {
    const gap = 16;
    let height = 0;
    risingSlide.forEach((slide) => (height += slide.offsetHeight));
    return height + gap * risingSlide.length - 1;
  };
  if (window.innerWidth < 540) {
    setRisingListHeight(calculateHeight());
  } else if (window.innerWidth < 769) {
    setRisingListHeight(calculateHeight() / 2);
  } else {
    setRisingListHeight(420);
  }
};
// 초기화 함수 호출
initializeSections();
