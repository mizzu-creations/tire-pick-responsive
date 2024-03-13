const mobileModalBackdrop = document.querySelector(".mobile-modal");
const mobileModalBox = document.querySelector(".mobile-modal dialog");

const blockBodyScroll = () => {
  const body = document.querySelector("body");
  if (window.innerWidth < 769) {
    body.style.overflow = mobileModalBox.open ? "hidden" : "auto";
  }
  if (window.innerWidth >= 769) {
    body.style.overflow = "auto";
  }
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
window.addEventListener("resize", blockBodyScroll);
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    mobileModalBox.classList.add("show");
  }, 1000);
});

const mobileModalSwiper = new Swiper(".swiper.mobile-modal", {
  pagination: {
    el: ".swiper.mobile-modal .swiper-pagination",
    type: "fraction",
  },
});
