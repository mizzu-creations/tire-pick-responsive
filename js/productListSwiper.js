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

const swiperSections = document.querySelectorAll(".product-list .swiper");

// 카드 생성
const createProductCard = (data, wrapper, isRisingProduct) => {
  data.forEach((item) => {
    const cardTemplate = isRisingProduct
      ? risingProductCard(item)
      : basicProductCard(item);
    wrapper.insertAdjacentHTML("beforeend", cardTemplate);
  });
};
// 전체보기 버튼 추가
const addViewAllButton = (section, wrapper) => {
  if (
    !section.classList.contains("best-seller") &&
    !section.classList.contains("rising-product")
  ) {
    wrapper.insertAdjacentHTML("beforeend", viewAll());
  }
};
// 랭크 색상 변경
const changeRankColor = () => {
  const firstRankTire = document.querySelector(
    ".swiper.product-list .product__img__rank"
  );
  firstRankTire.style.backgroundColor = "#7b3ff1";
};
// Swiper 초기화
const initializeSwiper = (section, data) => {
  const wrapper = section.querySelector(".swiper-wrapper");
  const uniqueClassName = Array.from(section.classList).find(
    (className) => className !== "swiper" && className !== "product-list"
  );

  // 카드 생성
  createProductCard(
    data,
    wrapper,
    section.classList.contains("rising-product")
  );
  // swiper 설정
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
  // bestSeller 섹션인 경우에만 랭크 색상 변경
  if (section.classList.contains("best-seller")) {
    changeRankColor();
  }
};
// resize 이벤트 핸들러
const handleResize = (section) => {
  const uniqueClassName = Array.from(section.classList).find(
    (className) => className !== "swiper" && className !== "product-list"
  );
  const risingList = document.querySelector(".swiper.rising-product");
  const risingWrapper = risingList.querySelector(".swiper-wrapper");
  const risingSlide = risingWrapper.querySelectorAll(".swiper-slide");

  const setRisingListHeight = (height) => {
    risingList.style.height = `${height}rem`;
    risingWrapper.style.height = `${height}rem`;
  };
  const calculateHeight = () => {
    const gap = 16;
    let height = 0;
    risingSlide.forEach((slide) => (height += slide.offsetHeight));
    return height + gap * risingSlide.length - 1;
  };
  // list height 설정
  if (window.innerWidth < 540 && uniqueClassName === "rising-product") {
    setRisingListHeight(calculateHeight());
  } else if (window.innerWidth < 769 && uniqueClassName === "rising-product") {
    setRisingListHeight(calculateHeight() / 2);
  } else if (window.innerWidth >= 769) {
    setRisingListHeight(42);
  }
  // 모바일 swiper disable 설정
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
};
// 각 섹션별로 초기화 작업 및 이벤트 핸들러 등록
swiperSections.forEach((section) => {
  let data;
  // 해당 섹션에 맞는 데이터 선택
  switch (true) {
    case section.classList.contains("lowest-price"):
      data = lowestPrice;
      break;
    case section.classList.contains("winter"):
      data = winter;
      break;
    case section.classList.contains("women"):
      data = women;
      break;
    case section.classList.contains("wiper"):
      data = wiper;
      break;
    case section.classList.contains("storage"):
      data = storage;
      break;
    case section.classList.contains("rising-product"):
      data = risingProduct;
      break;
    default:
      data = bestSeller;
  }

  initializeSwiper(section, data);
  addViewAllButton(section, section.querySelector(".swiper-wrapper"));

  window.addEventListener("resize", () => handleResize(section));
});
