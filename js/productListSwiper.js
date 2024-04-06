const imgSrc = "./assets/images/webp/";
const productList = [
  {
    rank: 1,
    tireImg: `${imgSrc}tire/tire_kh_hp71_11_45degree.webp`,
    brandImg: `${imgSrc}logo/logo_kumho.webp`,
    brand: "금호",
    title: "크루젠 HP71",
    model: "235/55R19",
    discount: 47,
    price: 125000,
    rate: 4.7,
    review: 2833,
    keywords: { 1: "사계절용", 2: "SUV", 3: "고급형" },
  },
  {
    rank: 2,
    tireImg: `${imgSrc}tire/tire_kh_ta91_1_45degree.webp`,
    brandImg: `${imgSrc}logo/logo_kumho.webp`,
    brand: "금호",
    title: "마제스티9 솔루스 TA91",
    model: "245/45R18",
    discount: 46,
    price: 143500,
    rate: 4.8,
    review: 2288,
    keywords: { 1: "사계절용", 2: "승용차", 3: "고급형" },
  },
  {
    rank: 3,
    tireImg: `${imgSrc}tire/tire_hk_ventusS2AsH462_1_45degree.webp`,
    brandImg: `${imgSrc}logo/logo_hankook.webp`,
    brand: "한국타이어",
    title: "벤투스 S2 AS",
    model: "245/45R18",
    discount: 42,
    price: 158100,
    rate: 4.8,
    review: 624,
    keywords: { 1: "사계절용", 2: "승용차", 3: "고급형" },
  },
  {
    rank: 4,
    tireImg: `${imgSrc}tire/tire_kh_hp71_11_45degree.webp`,
    brandImg: `${imgSrc}logo/logo_kumho.webp`,
    brand: "금호",
    title: "크루젠 HP71",
    model: "225/55R18",
    discount: 47,
    price: 100900,
    rate: 4.7,
    review: 2840,
    keywords: { 1: "사계절용", 2: "SUV", 3: "고급형" },
  },
  {
    rank: 5,
    tireImg: `${imgSrc}tire/tire_kh_kl33_1_45degree.webp`,
    brandImg: `${imgSrc}logo/logo_kumho.webp`,
    brand: "금호",
    title: "크루젠 프리미엄 KL33",
    model: "235/60R18",
    discount: 49,
    price: 112000,
    rate: 4.7,
    review: 1547,
    keywords: { 1: "사계절용", 2: "SUV", 3: "가성비" },
  },
  {
    rank: 6,
    tireImg: `${imgSrc}tire/tire_kh_ta91_1_45degree.webp`,
    brandImg: `${imgSrc}logo/logo_kumho.webp`,
    brand: "금호",
    title: "마제스티9 솔루스 TA91",
    model: "225/55R17",
    discount: 45,
    price: 126400,
    rate: 4.8,
    review: 2288,
    keywords: { 1: "사계절용", 2: "승용차", 3: "고급형" },
  },
  {
    rank: 7,
    tireImg: `${imgSrc}tire/tire_kh_kl33_1_45degree.webp`,
    brandImg: `${imgSrc}logo/logo_kumho.webp`,
    brand: "금호",
    title: "크루젠 프리미엄 KL33",
    model: "235/55R19",
    discount: 49,
    price: 106000,
    rate: 4.7,
    review: 1547,
    keywords: { 1: "사계절용", 2: "SUV", 3: "가성비" },
  },
  {
    rank: 8,
    tireImg: `${imgSrc}tire/tire_kh_hp71_11_45degree.webp`,
    brandImg: `${imgSrc}logo/logo_kumho.webp`,
    brand: "금호",
    title: "크루젠 HP71",
    model: "235/60R18",
    discount: 46,
    price: 135000,
    rate: 4.7,
    review: 2840,
    keywords: { 1: "사계절용", 2: "SUV", 3: "고급형" },
  },
  {
    rank: 9,
    tireImg: `${imgSrc}tire/tire_ns_ah8_1_45degree.webp`,
    brandImg: `${imgSrc}logo/logo_nexen.webp`,
    brand: "넥센",
    title: "엔프리즈 AH8",
    model: "245/45R18",
    discount: 50,
    price: 91000,
    rate: 4.7,
    review: 1225,
    keywords: { 1: "사계절용", 2: "승용차", 3: "가성비" },
  },
  {
    rank: 10,
    tireImg: `${imgSrc}tire/tire_kh_ta91_1_45degree.webp`,
    brandImg: `${imgSrc}logo/logo_kumho.webp`,
    brand: "금호",
    title: "마제스티9 솔루스 TA91",
    model: "235/45R18",
    discount: 44,
    price: 142500,
    rate: 4.8,
    review: 2288,
    keywords: { 1: "사계절용", 2: "승용차", 3: "고급형" },
  },
];

const addComma = (number) => {
  return number.toLocaleString();
};

const swiperSectons = document.querySelectorAll(".product-list .swiper");

const createProductCard = () => {
  swiperSectons.forEach((section) => {
    const wrapper = section.querySelector(".swiper-wrapper");
    productList.forEach((data) => {
      if (!section.classList.contains("rising-product")) {
        wrapper.insertAdjacentHTML(
          "beforeend",
          `<div class="swiper-slide">
        <a href="javascript:void(0)">
          <figure class="product">
            <div class="product__img">
              <span class="product__img__rank">${data.rank}위</span>
              <img src="${data.tireImg}" alt="" class="product__img__tire">
              <img src="${
                data.brandImg
              }" alt="브랜드" class="product__img__mark">
            </div>
            <figcaption class="product__info">
              <div class="product__info__brand"><span class="hide">브랜드</span>${
                data.brand
              }</div>
              <div class="product__info__title"><span class="hide">제품명</span>${
                data.title
              }</div>
              <div class="product__info__model"><span class="hide">모델명</span>${
                data.model
              }</div>
              <div class="product__info__price">
                <span class="hide">할인율</span>
                <span class="product__info__price__discount">${
                  data.discount
                }%</span>
                <span class="hide">가격</span>
                <span class="product__info__price__value">${addComma(
                  data.price
                )}원</span>
              </div>
              <div class="product__info__review">
                <span class="hide">별점</span>
                <span class="product__info__review__rate">${data.rate}</span>
                <span class="hide">리뷰</span>
                <span class="product__info__review__count">리뷰 ${addComma(
                  data.review
                )}</span>
              </div>
              <ul class="product__info__keywords">
              ${Object.values(data.keywords)
                .map((keyword) => {
                  const outOfStock = keyword.split(" ")[0];
                  if (outOfStock === "품절임박") {
                    return `<li class="stock">${keyword}</li>`;
                  } else {
                    return `<li>${keyword}</li>`;
                  }
                })
                .join("")}
            </ul>
            </figcaption>
          </figure>
        </a>
      </div>`
        );
      }
    });
    if (
      !section.classList.contains("best-seller") &&
      !section.classList.contains("rising-product")
    ) {
      wrapper.insertAdjacentHTML(
        "beforeend",
        `<div class="swiper-slide view-all">
        <div></div>
        전체보기
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
