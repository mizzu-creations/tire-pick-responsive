const searchBtn = document.querySelector(".search");
const searchContent = document.querySelector(".search__content");

searchBtn.addEventListener("click", () => {
  searchContent.open = !searchContent.open;
});
