import { addComma } from "./utils.js";

const basicProductCard = (data) => {
  const {
    soldOut,
    tags,
    imgs,
    productInfo,
    price,
    review,
    keywords,
    launchEvent,
  } = data;

  return `<div class="swiper-slide">
  <a href="javascript:void(0)">
    <figure class="product">
      <div class="product__img ${soldOut ? "sold-out" : ""}">
      ${soldOut ? `<span class="hide">품절</span>` : ""}
      ${
        tags.rank
          ? `<span class="product__img__rank">${tags.rank}위</span>`
          : tags.iwol
          ? `<span class="product__img__rank iwol">이월상품</span>`
          : tags.new
          ? `<span class="product__img__rank new">NEW</span>`
          : tags.hot
          ? `<span class="product__img__rank hot">HOT</span>`
          : ""
      }
        <img src="${imgs.tireImg}" alt="" class="product__img__tire">
        <img src="${imgs.brandImg}" alt="브랜드" class="product__img__mark">
      </div>
      <figcaption class="product__info">
        <div class="product__info__brand"><span class="hide">브랜드</span>${
          productInfo.brand
        }</div>
        <div class="product__info__title"><span class="hide">제품명</span>${
          productInfo.title
        }</div>
        <div class="product__info__model"><span class="hide">모델명</span>${
          productInfo.model
        }</div>
        <div class="product__info__price">
          <span class="hide">할인율</span>
          <span class="product__info__price__discount">${price.discount}%</span>
          <span class="hide">가격</span>
          <span class="product__info__price__value">${addComma(
            price.price
          )}원</span>
        </div>
        ${
          review.count
            ? `<div class="product__info__review">
        <span class="hide">별점</span>
        <span class="product__info__review__rate">${review.rate}</span>
        <span class="hide">리뷰</span>
        <span class="product__info__review__count">리뷰 ${addComma(
          review.count
        )}</span>
      </div>`
            : ""
        }
        <ul class="product__info__keywords">
        ${Object.values(keywords)
          .map((keyword) => {
            const isOutOfStock = typeof keyword === "number";
            const liClass = isOutOfStock ? "stock" : "";
            return isOutOfStock
              ? `<li class="stock">품절임박 잔여 ${keyword}개</li>`
              : `<li class="${liClass}">${keyword}</li>`;
          })
          .join("")}
      </ul>
      ${
        launchEvent
          ? `<div class="product__info__event">런칭기념 만원 쿠폰 자동적용</div>`
          : ""
      }
      </figcaption>
    </figure>
  </a>
</div>`;
};
const risingProductCard = (data) => {
  const { productImg, brandImg, brand, title, price, description } = data;

  return `<div class="swiper-slide sample">
  <a href="javascript:void(0)">
    <figure class="product rising-product">
      <div class="product__img">
        <img
          src="${productImg}"
          alt=""
          class="product__img__tire"
        />
        <img
          src="${brandImg}"
          alt="브랜드"
          class="product__img__mark"
        />
      </div>
      <figcaption class="product__info rising-product">
        <div class="product__info__brand">
          <span class="hide">브랜드</span>${brand}
        </div>
        <div class="product__info__title">
          <span class="hide">제품명</span>${title}
        </div>
        <div class="product__info__price">
          <span class="hide">할인율</span>
          <span class="product__info__price__discount"
            >최저가</span
          >
          <span class="hide">가격</span>
          <span class="product__info__price__value"
            >${addComma(price)}원 ~</span
          >
        </div>
        <div class="product__info__description rising-product">
          ${description}
        </div>
      </figcaption>
    </figure>
  </a>
</div>`;
};

export { basicProductCard, risingProductCard };
