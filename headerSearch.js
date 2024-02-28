const openSearchBox = () => {
  const searchBtn = document.querySelector(".search");
  const searchContent = document.querySelector(".search__contents");

  searchBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchContent.open = !searchContent.open;
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("dialog")) {
      searchContent.open = false;
    }
  });
};
const selectSearchTab = () => {
  const tabs = document.querySelectorAll(".search__tab");
  const tabActive = document.querySelector(".search__tab-focus");
  let currentTargetIndex = 0;

  const radio1 = document.querySelectorAll("#searchChoice1");
  const radio2 = document.querySelectorAll("#searchChoice2");
  const radio2Label = document.querySelector(`label[for='searchChoice2']`);
  const contentSelects = document.querySelectorAll(".search__content__select");

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

  radio1[0].addEventListener("click", () => {
    console.log("1");
    contentSelects[1].classList.remove("--active");
    contentSelects[0].classList.add("--active");
  });
  radio2[0].addEventListener("click", () => {
    console.log("2");
    contentSelects[0].classList.remove("--active");
    contentSelects[1].classList.add("--active");
  });
};
const searchCarBtn = () => {
  const inputs = document.querySelectorAll(".search__item1 input");
  const btn = document.querySelector(".search__item1 button");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      let allFilled = true; // 추후 정규식 validation 필요

      inputs.forEach((input) => {
        if (input.value === "") {
          allFilled = false;
          console.log(allFilled);
        }
      });

      btn.disabled = !allFilled;
    });
  });
};

openSearchBox();
selectSearchTab();
searchCarBtn();
