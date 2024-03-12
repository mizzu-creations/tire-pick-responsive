const topBanner = document.querySelector(".top-banner");
const closeBtn = topBanner.querySelector(".top-banner > button");

closeBtn.addEventListener("click", () => {
  topBanner.style.visibility = "hidden";
  topBanner.style.height = "0";
  topBanner.style.padding = "0";
});
