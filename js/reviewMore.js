const moreBtn = document.querySelector(".review-more");
const customerReview = document.querySelector(".customer-review");

moreBtn.addEventListener("click", () => {
  customerReview.classList.toggle("--active");
  if (customerReview.classList.contains("--active")) {
    moreBtn.textContent = "닫기";
  } else {
    moreBtn.textContent = "더보기";
  }
});
