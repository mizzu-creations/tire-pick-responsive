const moreBtns = document.querySelectorAll(".review-more");
const customerReview = document.querySelectorAll(".customer-review");

moreBtns.forEach((btn, idx) => {
  btn.addEventListener("click", () => {
    customerReview[idx].classList.toggle("--active");
    if (customerReview[idx].classList.contains("--active")) {
      btn.textContent = "닫기";
    } else {
      btn.textContent = "더보기";
    }
  });
});
