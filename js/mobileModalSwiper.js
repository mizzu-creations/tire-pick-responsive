const mobileModalBackdrop = document.querySelector(".mobile-modal");
const mobileModalBox = document.querySelector(".mobile-modal dialog");

const blockBodyScroll = () => {
  const body = document.querySelector("body");
  if (window.innerWidth < 769) {
    body.style.overflow = mobileModalBox.open ? "hidden" : "auto";
  } else {
    body.style.overflow = "auto";
  }
};
const handleCloseModal = () => {
  mobileModalBackdrop.style.display = "none";
  mobileModalBox.open = false;
  blockBodyScroll();
};
const closeModal = () => {
  const modalBtns = document.querySelectorAll(".mobile-modal__btns");
  modalBtns.forEach((btn) => {
    btn.addEventListener("click", handleCloseModal);
  });
};
const handleBackdropClick = (e) => {
  if (e.target.classList.contains("mobile-modal")) {
    handleCloseModal();
  }
};

blockBodyScroll();
closeModal();

window.addEventListener("click", handleBackdropClick);
window.addEventListener("resize", () => {
  if (window.innerWidth < 769) {
    mobileModalBackdrop.style.display = "block";
    mobileModalBox.open = true;
    blockBodyScroll();
  } else {
    handleCloseModal();
  }
});
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
