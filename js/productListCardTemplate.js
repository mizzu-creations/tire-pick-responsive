import { addComma } from "./utils.js";

const basicProductCard = (data) => {
  return `<div class="swiper-slide">
  <a href="javascript:void(0)">
    <figure class="product">
      <div class="product__img ${data.soldOut ? "sold-out" : ""}">
      ${data.soldOut ? `<span class="hide">품절</span>` : ""}
      ${
        data.rank
          ? `<span class="product__img__rank">${data.rank}위</span>`
          : data.iwol
          ? `<span class="product__img__rank iwol">이월상품</span>`
          : data.new
          ? `<span class="product__img__rank new">NEW</span>`
          : data.hot
          ? `<span class="product__img__rank hot">HOT</span>`
          : ""
      }
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
          <span class="product__info__price__discount">${data.discount}%</span>
          <span class="hide">가격</span>
          <span class="product__info__price__value">${addComma(
            data.price
          )}원</span>
        </div>
        ${
          data.review
            ? `<div class="product__info__review">
        <span class="hide">별점</span>
        <span class="product__info__review__rate">${data.rate}</span>
        <span class="hide">리뷰</span>
        <span class="product__info__review__count">리뷰 ${addComma(
          data.review
        )}</span>
      </div>`
            : ""
        }
        <ul class="product__info__keywords">
        ${Object.values(data.keywords)
          .map((keyword) => {
            const isOutOfStock = keyword.split(" ")[0] === "품절임박";
            const liClass = isOutOfStock ? "stock" : "";
            // const liContent = isOutOfStock ? keyword : `<li>${keyword}</li>`;
            return `<li class="${liClass}">${keyword}</li>`;
          })
          .join("")}
      </ul>
      ${
        data.launchEvent
          ? `<div class="product__info__event">런칭기념 만원 쿠폰 자동적용</div>`
          : ""
      }
      </figcaption>
    </figure>
  </a>
</div>`;
};
const risingProductCard = (data) => {
  return `<div class="swiper-slide sample">
  <a href="javascript:void(0)">
    <figure class="product rising-product">
      <div class="product__img">
        <img
          src="${data.productImg}"
          alt=""
          class="product__img__tire"
        />
        <img
          src="${data.brandImg}"
          alt="브랜드"
          class="product__img__mark"
        />
      </div>
      <figcaption class="product__info rising-product">
        <div class="product__info__brand">
          <span class="hide">브랜드</span>${data.brand}
        </div>
        <div class="product__info__title">
          <span class="hide">제품명</span>${data.title}
        </div>
        <div class="product__info__price">
          <span class="hide">할인율</span>
          <span class="product__info__price__discount"
            >최저가</span
          >
          <span class="hide">가격</span>
          <span class="product__info__price__value"
            >${addComma(data.price)}원 ~</span
          >
        </div>
        <div class="product__info__description rising-product">
          ${data.description}
        </div>
      </figcaption>
    </figure>
  </a>
</div>`;
};

export { basicProductCard, risingProductCard };
