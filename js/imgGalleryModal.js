import { setBodyOverflow } from "./utils.js";

const dialog = document.querySelector(".img-modal");
const gallery = document.querySelector(".img-modal__gallery");
const imgPrevBtn = document.querySelector(".img-modal__btn.prev");
const imgNextBtn = document.querySelector(".img-modal__btn.next");

let imageIndex = 0;
let imageUrls = [];

function openGallery(images, selectedImageSrc) {
  dialog.open = true;
  setBodyOverflow("hidden");
  imageUrls = images.map((img) => img.src);
  imageIndex = imageUrls.indexOf(selectedImageSrc);
  renderGallery();
}
function closeGallery() {
  dialog.open = false;
  setBodyOverflow("");
  imgPrevBtn.removeEventListener("click", prevButtonClickHandler);
  imgNextBtn.removeEventListener("click", nextButtonClickHandler);
}
function renderPrevNextBtn() {
  if (imageUrls.length === 1) {
    imgPrevBtn.style.display = "none";
    imgNextBtn.style.display = "none";
  } else {
    imgPrevBtn.style.display = "block";
    imgNextBtn.style.display = "block";
  }
}
function renderGallery() {
  gallery.innerHTML = imageUrls
    .map(
      (src) => `
    <li class="img-modal__gallery__list">
      <img src="${src}" alt="" />
    </li>
  `
    )
    .join("");

  renderPrevNextBtn();
  showImage(imageIndex);

  imgPrevBtn.addEventListener("click", prevButtonClickHandler);
  imgNextBtn.addEventListener("click", nextButtonClickHandler);
}
function showImage(index) {
  const imageElements = document.querySelectorAll(
    ".img-modal__gallery__list img"
  );
  imageElements.forEach((img) => (img.style.display = "none"));
  imageElements[index].style.display = "block";
}
function prevButtonClickHandler() {
  imageIndex = (imageIndex - 1 + imageUrls.length) % imageUrls.length;
  showImage(imageIndex);
}
function nextButtonClickHandler() {
  imageIndex = (imageIndex + 1) % imageUrls.length;
  showImage(imageIndex);
}

const imgList = document.querySelectorAll(".review-imgs");
imgList.forEach((imgs) => {
  imgs.addEventListener("click", (e) => {
    if (e.target.tagName === "IMG" && !dialog.open) {
      openGallery([...imgs.querySelectorAll("img")], e.target.src);
    }
  });
});

document.addEventListener("click", (e) => {
  if (e.target === dialog) {
    closeGallery();
  }
});
