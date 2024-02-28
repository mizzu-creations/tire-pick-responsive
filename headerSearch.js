const openSearchBox = () => {
  const searchBtn = document.querySelector(".search");
  const searchContent = document.querySelector(".search__contents");

  searchBtn.addEventListener("click", () => {
    searchContent.open = !searchContent.open;
  });
};

const selectSearchTab = () => {
  const tabs = document.querySelectorAll(".search__tab");
  const contents = document.querySelector(".search__content");
  const tabActive = document.querySelector(".search__tab-focus");
  let currentTargetIndex = 0;

  const radio1 = document.querySelectorAll("#searchChoice1");
  const radio2 = document.querySelectorAll("#searchChoice2");
  const radio2Label = document.querySelector(`label[for='searchChoice2']`);

  const labelArr = ["사이즈로", "규격", "브랜드"];

  const activateTab = (index) => {
    tabs[currentTargetIndex].children[0].classList.remove("--active");
    tabs[index].children[0].classList.add("--active");
    currentTargetIndex = index;
    const translation = `${currentTargetIndex * 26}rem`;
    tabActive.style.transform = `translate(calc(${translation}), -50%)`;
    tabActive.innerText = tabs[index].children[0].innerText;
    radio2Label.innerText = `${labelArr[index]} 검색`;
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (index !== currentTargetIndex) {
        activateTab(index);
      }
    });
  });
};

openSearchBox();
selectSearchTab();
