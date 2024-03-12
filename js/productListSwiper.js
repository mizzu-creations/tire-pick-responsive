const imgSrc = "./assets/images/";
const productList = [
  {
    rank: 1,
    tireImg: `${imgSrc}tire_kh_hp71_11_45degree.webp`,
    brandImg: `${imgSrc}logo_kumho.webp`,
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
    tireImg: `${imgSrc}tire_kh_ta91_1_45degree.webp`,
    brandImg: `${imgSrc}logo_kumho.webp`,
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
    tireImg: `${imgSrc}tire_hk_ventusS2AsH462_1_45degree.webp`,
    brandImg: `${imgSrc}logo_hankook.webp`,
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
    tireImg: `${imgSrc}tire_kh_hp71_11_45degree.webp`,
    brandImg: `${imgSrc}logo_kumho.webp`,
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
    tireImg: `${imgSrc}tire_kh_kl33_1_45degree.webp`,
    brandImg: `${imgSrc}logo_kumho.webp`,
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
    tireImg: `${imgSrc}tire_kh_ta91_1_45degree.webp`,
    brandImg: `${imgSrc}logo_kumho.webp`,
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
    tireImg: `${imgSrc}tire_kh_kl33_1_45degree.webp`,
    brandImg: `${imgSrc}logo_kumho.webp`,
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
    tireImg: `${imgSrc}tire_kh_hp71_11_45degree.webp`,
    brandImg: `${imgSrc}logo_kumho.webp`,
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
    tireImg: `${imgSrc}tire_ns_ah8_1_45degree.webp`,
    brandImg: `${imgSrc}logo_nexen.webp`,
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
    tireImg: `${imgSrc}tire_kh_ta91_1_45degree.webp`,
    brandImg: `${imgSrc}logo_kumho.webp`,
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
const createProductCard = () => {
  const swiperWrapper = document.querySelector(
    ".swiper.product-list .swiper-wrapper"
  );
  productList.forEach((data) => {
    swiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide">
    <a href="javascript:void(0)">
      <figure class="product">
        <div class="product__img">
          <span class="product__img__rank">${data.rank}위</span>
          <img src="${data.tireImg}" alt="" class="product__img__tire">
          <img src="${data.brandImg}" alt="브랜드" class="product__img__mark">
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
            <li>${data.keywords[1]}</li>
            <li>${data.keywords[2]}</li>
            <li>${data.keywords[3]}</li>
        </ul>
        </figcaption>
      </figure>
    </a>
  </div>`
    );
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
