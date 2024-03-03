const bannerImgs = [
  {
    img: "./images/slide_main01",
    color: "#d3e3df",
    alt: "주말마다 만나요! 타이어픽 만포인트 참여 시 100% 드려요",
  },
  {
    img: "./images/slide_main02",
    color: "#ecf2fb",
    alt: "삼공사공 여성의 픽 인기 타이어 탑 텐 최대 53% 할인",
  },
  {
    img: "./images/slide_main03",
    color: "#2b5cd2",
    alt: "와이퍼도 타이어픽 전 상품 무료배송 최대 74% 할인",
  },
  {
    img: "./images/slide_main04",
    color: "#6f49fa",
    alt: "구매리뷰 쓰고 만사천 포인트 받자! 타이어픽 리뷰 이벤트",
  },
  {
    img: "./images/slide_main05",
    color: "#21273c",
    alt: "신규회원 3천원 할인 앱 설치하면 4천원 더",
  },
  {
    img: "./images/slide_main06",
    color: "#070707",
    alt: "나도 친구도 만원씩 사이좋게 혜택받자 친구초대 이벤트",
  },
  {
    img: "./images/slide_main07",
    color: "#3264d3",
    alt: "집 앞에서 간편교체! 출장교체 지역 확대 서울부터 경기 성남시까지",
  },
];
let imgChangeFlag = false;

const createSlide = () => {
  const swiperWrapper = document.querySelector(".swiper-wrapper");
  bannerImgs.forEach((data) => {
    swiperWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="swiper-slide" style="background-color: ${data.color}">
<div class="slide-bg">
  <img src="${data.img}.webp" alt="${data.alt}" />
</div>
</div>`
    );
  });
};
const changeMobileImg = () => {
  const swiperSlide = document.querySelectorAll(".swiper-slide");

  if (window.innerWidth <= 769 && !imgChangeFlag) {
    swiperSlide.forEach((slide) => {
      const slideBg = slide.children;
      let slideImg = slideBg[0].children[0];
      let src = slideImg.src;
      src = src.replace(".webp", "_m.webp");
      slideImg.src = src;
    });

    imgChangeFlag = true;
  } else if (window.innerWidth > 769 && imgChangeFlag) {
    swiperSlide.forEach((slide) => {
      const slideBg = slide.children;
      let slideImg = slideBg[0].children[0];
      let src = slideImg.src;
      src = src.replace(/_m(?=.webp)/, "");
      slideImg.src = src;
    });

    imgChangeFlag = false;
  }
};

createSlide();
changeMobileImg();
window.addEventListener("resize", changeMobileImg);

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const swiperBtnHover = () => {
  const swiper = document.querySelector(".swiper");
  const next = document.querySelector(".swiper-button-next");
  const prev = document.querySelector(".swiper-button-prev");

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
  const swiperFraction = document.querySelector(".swiper-pagination-fraction");

  swiperFraction.insertAdjacentHTML(
    "beforeend",
    `<span class="swiper-pagination-all swiper-res">모두보기</span>
    <img class="swiper-res" src="./images/menu.svg" alt="">`
  );
};

swiperBtnHover();
responsiveApplication();
