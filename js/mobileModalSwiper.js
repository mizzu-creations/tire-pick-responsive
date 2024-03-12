const mobileModalBackdrop = document.querySelector(".mobile-modal");
const mobileModalBox = document.querySelector(".mobile-modal dialog");

const blockBodyScroll = () => {
  const body = document.querySelector("body");
  body.style.overflow = mobileModalBox.open ? "hidden" : "auto";
};
const closeModal = () => {
  const modalBtns = document.querySelectorAll(".mobile-modal__btns");

  const handleCloseModal = () => {
    mobileModalBackdrop.style.display = "none";
    mobileModalBox.open = false;
    blockBodyScroll();
  };

  modalBtns.forEach((btn) => {
    btn.addEventListener("click", handleCloseModal);
  });
};
const handleBackdropClick = (e) => {
  if (e.target.classList.contains("mobile-modal")) {
    mobileModalBackdrop.style.display = "none";
    mobileModalBox.open = false;
    blockBodyScroll();
  }
};

blockBodyScroll();
closeModal();
window.addEventListener("click", handleBackdropClick);
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    mobileModalBox.classList.add("show");
  }, 1000);
});

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});
