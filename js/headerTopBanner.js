const closeTopBanner = () => {
  const topBanner = document.querySelector(".top-banner");
  const closeBtn = document.querySelector(".top-banner > button");

  closeBtn.addEventListener("click", () => {
    topBanner.style.visibility = "hidden";
    topBanner.style.height = "0";
    topBanner.style.padding = "0";
  });
};
const changeInnerText = () => {
  const topBannerTxt = document.querySelector(".top-banner > div > span");

  if (window.innerWidth <= 769) {
    topBannerTxt.innerText = "보쉬, 미쉐린 와이퍼 무료배송!";
  }
  if (window.innerWidth > 769) {
    topBannerTxt.innerText = "타이어픽 앱 설치하면 세차 100원";
  }
};

closeTopBanner();
changeInnerText();

window.addEventListener("resize", changeInnerText);
