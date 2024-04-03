const body = document.body.style;
const dialog = document.querySelector(".img-modal");
const gallery = document.querySelector(".img-modal__gallery");
const imgPrevBtn = document.querySelector(".img-modal__btn.prev");
const imgNextBtn = document.querySelector(".img-modal__btn.next");

let imageIndex = 0;
let imageUrls = [];

function openGallery(images, selectedImageSrc) {
  dialog.open = true;
  body.overflow = "hidden";
  imageUrls = images.map((img) => img.src);
  imageIndex = imageUrls.indexOf(selectedImageSrc);
  renderGallery();
}
function closeGallery() {
  dialog.open = false;
  body.overflow = "auto";
  imgPrevBtn.removeEventListener("click", prevButtonClickHandler);
  imgNextBtn.removeEventListener("click", nextButtonClickHandler);
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
