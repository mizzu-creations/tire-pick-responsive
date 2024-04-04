const swiWrapper = document.querySelector(".swiper.review .swiper-wrapper");
const userReviewData = [
  {
    customerInfo: {
      name: "이*지",
      car: "기아 K5",
    },
    review: {
      star: 5,
      date: "22.11.25",
      text: `피렐리 에서 굿이어로, 굿이어에서 마제스티로 ! <br>
    k5오너분들의 추천이 많은 타이어여서 해당 타이어로 <br>
    교체해봤습니다~ <br>
    사장님께서 정말 많이 친절하셨습니다!😄 <br>
    설명도 잘해주셨구요. <br>
    <br>
    타이어 교체하고나니 코너링시에도 흔들림없이 착 감키고 제동력도 <br>
    끝내줍니다. <br>
    고속주행을 많이 하는편이라서 착 감키는 안정감이 너무 마음에 <br>
    듭니다. <br>
    사장님 정말 감사했습니다~~!`,
      imgs: null,
      tags: {
        jedong: true,
        seoungchagam: true,
        soeum: true,
        gosoc: true,
        clean: false,
        gaseongbi: false,
        chinjul: false,
        sulmyung: false,
        ddabong: false,
        jaebangmun: false,
        huegesil: false,
      },
      recommend: 4,
    },
    product: {
      label: {
        hot: true,
        best: false,
      },
      img: "./assets/images/webp/tire_kh_hp71_11_45degree.webp",
      brand: "금호",
      title: "마제스티9 솔루스 TA91",
      model: "245/40R19",
    },
    store: {
      location: {
        name: "스피드메이트 이마트군산점",
        address: "전라북도 군산시 경암동",
      },
      countInfo: {
        review: null,
        visit: null,
      },
      visit: true,
      shipping: false,
      replacement: false,
      wheelAlign: true,
    },
  },
  {
    customerInfo: {
      name: "황*호",
      car: null,
    },
    review: {
      star: 4,
      date: "23.01.12",
      text: `항상 사용하는 보쉬 에어로 트윈 와이퍼입니다.<br />
      교체하려던 시점에 마침 이벤트 확인하여 좋은 제품 착한
      가격에<br />
      구입했습니다.<br />
      덕분에 타이어픽이라는 앱도 알거 설치하게 되었네요.<br />`,
      imgs: [
        "./assets/images/jpg/review_user01_img01.jpeg",
        "./assets/images/jpg/review_user01_img02.jpeg",
        "./assets/images/jpg/review_user01_img03.jpeg",
      ],
      tags: {
        jedong: false,
        seoungchagam: false,
        soeum: false,
        gosoc: false,
        clean: true,
        gaseongbi: true,
        chinjul: false,
        sulmyung: false,
        ddabong: false,
        jaebangmun: false,
        huegesil: false,
      },
      recommend: 3,
    },
    product: {
      label: {
        hot: false,
        best: false,
      },
      img: "./assets/images/webp/wiper_2023_12_137a702ggjj2456.webp",
      brand: "BOSCH",
      title: "보쉬 에어로트윈",
      model: "AEROTWIN 2S2 와이퍼",
    },
    store: {
      location: {
        name: null,
        address: null,
      },
      countInfo: {
        review: null,
        visit: null,
      },
      visit: false,
      shipping: true,
      replacement: false,
      wheelAlign: false,
    },
  },
  {
    customerInfo: {
      name: "유*연",
      car: "쉐보레 말리부",
    },
    review: {
      star: 5,
      date: "24.01.13",
      text: `처음 방문이라 좀 걱정했지만 도착하니 친절하게 타이어 제품
      <br />
      생산일 꼼꼼하게 네개 다 확인해주시고 휴게공간까지 <br />
      안내해주시더라고요 <br />
      휴게공간도 고급진 느낌 네스프레소도 맛있었고 <br />
      한시간 가량 타이어교체와 휠얼라이어먼트 조정한 후 <br />
      완료된 전화받고 갔어요. <br />
      타이어 틀어진 정보 프린트해주셔서 정확하게 뭐가 틀어졌는지
      <br />
      제꺼랑 평균치 친절하게 설명해주셨어요. <br />
      정말 친절하시고 다음에도 꼭 이용하고 싶네요 <br />
      그리고 교체하고나니 핸들링이 너무 부드러워 대만족입니다 <br />`,
      imgs: [
        "./assets/images/jpg/review_user02_img01.jpeg",
        "./assets/images/jpg/review_user02_img02.jpeg",
        "./assets/images/jpg/review_user02_img03.jpeg",
      ],
      tags: {
        jedong: false,
        seoungchagam: false,
        soeum: false,
        gosoc: false,
        clean: false,
        gaseongbi: false,
        chinjul: true,
        sulmyung: true,
        ddabong: true,
        jaebangmun: true,
        huegesil: true,
      },
      recommend: 1,
    },
    product: {
      label: {
        hot: false,
        best: false,
      },
      img: "./assets/images/png/tire-pick-repair-shop.png",
      brand: null,
      title: "아라바 서비스",
      model: null,
    },
    store: {
      location: {
        name: null,
        address: "경기도 하남시 덕풍동",
      },
      countInfo: {
        review: "0",
        visit: "156",
      },
      visit: false,
      shipping: false,
      replacement: true,
      wheelAlign: true,
    },
  },
  {
    customerInfo: {
      name: "최*우",
      car: "기아 포르테",
    },
    review: {
      star: 5,
      date: "24.03.24",
      text: `타이어 바꾸고 첫주행해봤는데 확실히 안정감이 있네요. 좋은
      <br />
      가격에 가성비 너무 좋습니다~~! <br />
      스피드메이트는 처음이용해봤는데 사장님도 친절하시고 설명을
      <br />
      잘해주셔서 좋았습니다`,
      imgs: null,
      tags: {
        jedong: true,
        seoungchagam: true,
        soeum: true,
        gosoc: false,
        clean: false,
        gaseongbi: false,
        chinjul: false,
        sulmyung: false,
        ddabong: false,
        jaebangmun: false,
        huegesil: false,
      },
      recommend: 1,
    },
    product: {
      label: {
        hot: false,
        best: false,
      },
      img: null,
      brand: null,
      title: null,
      model: null,
    },
    store: {
      location: {
        name: "스피드메이트 하이웨이점",
        address: "인천광역시 남동구",
      },
      countInfo: {
        review: null,
        visit: null,
      },
      visit: true,
      shipping: false,
      replacement: false,
      wheelAlign: true,
    },
  },
  {
    customerInfo: {
      name: "김*휘",
      car: "르노삼성 QM6",
    },
    review: {
      star: 4,
      date: "24.04.04",
      text: `아 ~~ 이것이 타이어픽이지요 <br>
      <br>
      싸다 싸 ~~ 거기에 23년 52주생산 <br>
      <br>
      거의 거저주는 가격이네요 <br>
      <br>
      매장 80만원 달라던데 여기서 54만원에 해결 <br>
      <br>
      베리 베리 굿`,
      imgs: ["./assets/images/jpg/review_user03_img01.jpeg"],
      tags: {
        jedong: false,
        seoungchagam: true,
        soeum: false,
        gosoc: true,
        clean: false,
        gaseongbi: false,
        chinjul: false,
        sulmyung: false,
        ddabong: false,
        jaebangmun: false,
        huegesil: false,
      },
      recommend: 3,
    },
    product: {
      label: {
        hot: false,
        best: true,
      },
      img: "./assets/images/webp/tire_kh_hp71_11_45degree.webp",
      brand: "금호",
      title: "크루젠 HP71",
      model: "235/55R18",
    },
    store: {
      location: {
        name: "스피드메이트 포항신덕점",
        address: "경상북도 포항시",
      },
      countInfo: {
        review: null,
        visit: null,
      },
      visit: true,
      shipping: false,
      replacement: false,
      wheelAlign: true,
    },
  },
];
userReviewData.forEach((data) => {
  const { customerInfo, review, product, store } = data;
  swiWrapper.insertAdjacentHTML(
    "beforeend",
    `<li class="swiper-slide review-card">
      <span class="hide">고객리뷰</span>
      <div class="review-card__left">
        <div class="customer-cartype">
          <span class="hide">고객명</span>
          <span class="customer">${customerInfo.name}</span>
          ${
            customerInfo.car
              ? `<span class="hide">차종</span>
          <span class="cartype">${customerInfo.car}</span>`
              : ""
          }
        </div>
        <div class="star-rate">
          <span class="hide">별점</span>
          <div class="star">
            ${`<img src="./assets/images/svg/star_gold.svg" alt="" />`.repeat(
              review.star
            )} ${`<img
              src="./assets/images/svg/star_empty.svg"
              alt=""
            />`.repeat(5 - review.star)}
          </div>
          <span class="hide">작성 날짜</span>
          <div class="date">${review.date}</div>
        </div>
        <span class="hide">리뷰내용</span>
        <p class="customer-review">${review.text}</p>
        <button class="review-more">더보기</button>
        <span class="hide">리뷰이미지</span>
        ${
          review.imgs
            ? `
            <ul class="review-imgs">
              ${review.imgs
                .map(
                  (img) => `
                <li>
                  <img src="${img}" alt="" />
                </li>
              `
                )
                .join("")}
            </ul>
            `
            : ""
        }
        <span class="hide">리뷰태그</span>
        <ul class="review-tags">
          ${
            review.tags.jedong
              ? `
          <li class="review-tag jedong">제동력이 좋아요</li>
          `
              : ""
          } ${
      review.tags.seoungchagam
        ? `
          <li class="review-tag seoungchagam">승차감이 편안해요</li>
          `
        : ""
    } ${
      review.tags.soeum
        ? `
          <li class="review-tag soeum">소음이 없어요</li>
          `
        : ""
    } ${
      review.tags.gosoc
        ? `
          <li class="review-tag gosoc">고속주행에도 안정적이에요</li>
          `
        : ""
    } ${
      review.tags.clean
        ? `
          <li class="review-tag clean">잘 닦여요</li>
          `
        : ""
    } ${
      review.tags.gaseongbi
        ? `
          <li class="review-tag gaseongbi">가성비가 좋아요</li>
          `
        : ""
    } ${
      review.tags.chinjul
        ? `
          <li class="review-tag chinjul">친절해요</li>
          `
        : ""
    } ${
      review.tags.sulmyung
        ? `
          <li class="review-tag sulmyung">잘 설명해주셨어요</li>
          `
        : ""
    } ${
      review.tags.ddabong
        ? `
          <li class="review-tag ddabong">작업이 만족스러워요</li>
          `
        : ""
    } ${
      review.tags.jaebangmun
        ? `
          <li class="review-tag jaebangmun">재방문하고 싶어요</li>
          `
        : ""
    } ${
      review.tags.huegesil
        ? `
          <li class="review-tag huegesil">휴게 공간이 있어요</li>
          `
        : ""
    }
        </ul>
        <button class="recommend-btn" aria-label="추천버튼">
          도움이 돼요 <span>${review.recommend}</span>
        </button>
      </div>
      <div class="review-card__right">
      ${
        product.img
          ? `<div class="product-info">
      <div class="product-info__img">
        ${product.label.hot ? `<span class="img-label hot">hot</span>` : ""}
        ${product.label.best ? `<span class="img-label best">best</span>` : ""}
        ${product.img ? ` <img src="${product.img}" alt="" />` : ""}
      </div>
      <div class="product-info__txt">
        ${product.brand ? `<span class="brand">${product.brand}</span>` : ""} ${
              product.title
                ? `<span class="title">${product.title}</span
        >`
                : ""
            } ${
              product.model
                ? `<span class="model"
          >${product.model}</span
        >`
                : ""
            } ${
              store.countInfo.review
                ? `<span class="location"
          >${store.location.address}</span
        >`
                : ""
            } ${
              store.countInfo.review
                ? `<span class="review-customer"
          >리뷰 ${store.countInfo.review} ∙ 방문고객
          ${store.countInfo.visit}</span
        >`
                : ""
            }
      </div>
    </div>`
          : ""
      }
        <div class="store-info">
          ${
            store.visit
              ? `
          <div class="visit-store"><span>매장방문</span></div>
          `
              : ""
          } ${
      store.shipping
        ? `
          <div class="standard-shipping">일반 배송</div>
          `
        : ""
    } ${
      store.replacement
        ? `
          <div class="tire-replacement">타이어 교체</div>
          `
        : ""
    } ${
      store.wheelAlign
        ? `
          <div class="wheel-align">
            <div><span>휠 얼라인먼트</span><span>추가</span></div>
          </div>
          `
        : ""
    } ${
      store.location.name
        ? `
          <div class="store-location">
            <div>
              <span>${store.location.name}</span>
              <span>${store.location.address}</span>
            </div>
          </div>
          `
        : ""
    }
        </div>
        ${
          product.img
            ? `<button class="more-btn product">상품 보기</button>`
            : ""
        }
      </div>
    </li>
    `
  );
});

const reviewSlide = document.querySelectorAll(".review .swiper-slide");
const reviewSwiper = new Swiper(".swiper.review", {
  direction: "vertical",
  loopedSlides: reviewSlide.length,
  loop: true,
  slidesPerView: "auto",
  speed: 1000,
  freeMode: true,
  mousewheel: true,
});
