const bannerImgs = [
  {
    imgWeb: "./assets/images/webp/slide_main01",
    imgMobile: "./assets/images/webp/slide_main01_m",
    color: "#d3e3df",
    alt: "주말마다 만나요! 타이어픽 만포인트 참여 시 100% 드려요",
  },
  {
    imgWeb: "./assets/images/webp/slide_main02",
    imgMobile: "./assets/images/webp/slide_main02_m",
    color: "#ecf2fb",
    alt: "삼공사공 여성의 픽 인기 타이어 탑 텐 최대 53% 할인",
  },
  {
    imgWeb: "./assets/images/webp/slide_main03",
    imgMobile: "./assets/images/webp/slide_main03_m",
    color: "#2b5cd2",
    alt: "와이퍼도 타이어픽 전 상품 무료배송 최대 74% 할인",
  },
  {
    imgWeb: "./assets/images/webp/slide_main04",
    imgMobile: "./assets/images/webp/slide_main04_m",
    color: "#6f49fa",
    alt: "구매리뷰 쓰고 만사천 포인트 받자! 타이어픽 리뷰 이벤트",
  },
  {
    imgWeb: "./assets/images/webp/slide_main05",
    imgMobile: "./assets/images/webp/slide_main05_m",
    color: "#21273c",
    alt: "신규회원 3천원 할인 앱 설치하면 4천원 더",
  },
  {
    imgWeb: "./assets/images/webp/slide_main06",
    imgMobile: "./assets/images/webp/slide_main06_m",
    color: "#070707",
    alt: "나도 친구도 만원씩 사이좋게 혜택받자 친구초대 이벤트",
  },
  {
    imgWeb: "./assets/images/webp/slide_main07",
    imgMobile: "./assets/images/webp/slide_main07_m",
    color: "#3264d3",
    alt: "집 앞에서 간편교체! 출장교체 지역 확대 서울부터 경기 성남시까지",
  },
];
let eventSwiper;

const createSlide = () => {
  const swiperWrapper = document.querySelector(
    ".swiper.visual .swiper-wrapper"
  );
  bannerImgs.forEach((data) => {
    swiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide" style="background-color: ${data.color}">
      <div class="slide-bg">
        <picture>
          <source
            media="(max-width: 769px)"
            srcset="${data.imgMobile}.webp"
          />
          <img src="${data.imgWeb}.webp" alt="${data.alt}" />
        </picture>
      </div>
    </div>`
    );
  });
};
const changeBgColor = () => {
  const swiperSlide = document.querySelectorAll(".swiper.visual .swiper-slide");
  if (window.innerWidth > 769) {
    swiperSlide.forEach((slide, index) => {
      slide.style.backgroundColor = bannerImgs[index].color;
    });
  }
};
const initSwiper = () => {
  eventSwiper = new Swiper(".swiper.visual", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};
const swiperBtnHover = () => {
  const swiper = document.querySelector(".swiper.visual");
  const next = document.querySelector(".swiper.visual .swiper-button-next");
  const prev = document.querySelector(".swiper.visual .swiper-button-prev");

  swiper.addEventListener("mouseenter", () => {
    next.style.display = "flex";
    prev.style.display = "flex";
  });
  swiper.addEventListener("mouseleave", () => {
    next.style.display = "none";
    prev.style.display = "none";
  });
};
const responsiveApplication = () => {
  const swiperFraction = document.querySelector(
    ".swiper.visual .swiper-pagination-fraction"
  );
  swiperFraction.insertAdjacentHTML(
    "beforeend",
    `<span class="swiper-pagination-all swiper-res">모두보기</span>
    <img class="swiper-res" src="./assets/images/svg/menu.svg" alt="">`
  );
};

const initialize = () => {
  createSlide();
  changeBgColor();
  initSwiper();
  swiperBtnHover();
  responsiveApplication();
};

initialize();
window.addEventListener("resize", () => {
  eventSwiper.destroy();
  changeBgColor();
  initSwiper();
  responsiveApplication();
});
