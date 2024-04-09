import { setBodyOverflow } from "./utils.js";

const addClassToElement = (element, className) => {
  if (!element.classList.contains(className)) {
    element.classList.add(className);
  }
};
const removeClassFromElement = (element, className) => {
  if (element.classList.contains(className)) {
    element.classList.remove(className);
  }
};
const toggleClassForElement = (element, className) => {
  element.classList.toggle(className);
};
const openSearchBox = () => {
  const searchBtn = document.querySelector(".search__btn");
  const searchContent = document.querySelector(".search__contents");

  searchBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchContent.open = !searchContent.open;
    if (searchContent.open) {
      setBodyOverflow("hidden");
    }
  });
  searchBtn.addEventListener("keydown", (e) => {
    let keyCode = e.keyCode || e.which;
    if (keyCode === 13) {
      e.stopPropagation();
      searchContent.open = !searchContent.open;
      setBodyOverflow("hidden");
    }
  });

  document.addEventListener("click", (e) => {
    if (searchContent.open && !e.target.closest("dialog")) {
      searchContent.open = false;
      setBodyOverflow("");
    }
  });
};
const setupTabs = () => {
  const tabs = document.querySelectorAll(".search__tab");
  const tabActive = document.querySelector(".search__tab-focus");
  let currentTargetIndex = 0;

  const activateTab = (index) => {
    removeClassFromElement(tabs[currentTargetIndex].children[0], "--active");
    addClassToElement(tabs[index].children[0], "--active");
    currentTargetIndex = index;
    const translation = `${currentTargetIndex * 26}rem`;
    tabActive.style.transform = `translate(calc(${translation}), -50%)`;
    tabActive.innerText = tabs[index].children[0].innerText;
    updateSearchContent(index);
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (index !== currentTargetIndex) {
        activateTab(index);
      }
    });
  });
};
const updateSearchContent = (index) => {
  const radio2LabelNames = ["사이즈로", "규격", "브랜드"];
  const customSelectLabelNames = [
    "타이어 사이즈",
    "델코 배터리 규격",
    "패키지 브랜드",
  ];
  const initSelectedNames = ["인치", "전체", "전체"];
  const radio2Label = document.querySelector(`label[for='searchChoice2']`);
  const selectLabel = document.querySelector(".search__select-label");
  const selectedOption = document.querySelector(".search__option-label");

  radio2Label.innerText = `${radio2LabelNames[index]} 검색`;
  selectLabel.innerText = `${customSelectLabelNames[index]}`;
  selectedOption.innerText = `${initSelectedNames[index]}`;
};
const updateSearchOptions = () => {
  const optionUl = document.querySelector(".search__select-option");
  const inchData = Array.from({ length: 10 }, (_, index) => index + 13);
  const batteryData = [
    "전체",
    "DF40R",
    "DF40L",
    "DF40AL",
    "DIN40L (54018)",
    "DIN50L",
    "DF50L",
    "DIN60HL (55530)",
    "DF60R",
    "DF60L",
    "DIN60L",
    "DIN74L (57412)",
    "DIN74R",
    "DF80R",
    "DF80L",
    "DIN80L",
    "DIN90L (59043)",
    "DF90R",
    "DF90L",
    "DIN90R (59095)",
    "DF100R",
    "DIN100L (60038)",
    "DF100L",
    "DIN115L (61544)",
  ];
  const brandData = [
    "전체",
    "현대모비스",
    "르노코리아자동차",
    "캐스트롤",
    "KG모빌리티",
  ];
  const selectLabel = document.querySelector(".search__select-label");
  const optionLabel = document.querySelector(".search__option-label");

  document.addEventListener("click", (e) => {
    if (
      e.target.closest("li")?.className === "search__tab" ||
      e.target.closest("span")?.children[0].className ===
        "search__radio-search-choice2"
    ) {
      const labelName = selectLabel.innerText;
      const currentSelectData =
        labelName === "타이어 사이즈"
          ? inchData
          : labelName === "델코 배터리 규격"
          ? batteryData
          : brandData;
      const currentOptionLabel =
        labelName === "타이어 사이즈"
          ? "인치"
          : labelName === "델코 배터리 규격"
          ? "전체"
          : "전체";

      optionLabel.innerHTML = currentOptionLabel;

      optionUl.innerText = "";
      currentSelectData.forEach((item) => {
        optionUl.insertAdjacentHTML(
          "beforeend",
          `<li class="search__select-option-item">${item}</li>`
        );
      });
    }
  });
};
const updateSelectedOption = () => {
  const selectedOption = document.querySelector(".search__option-label");

  document.addEventListener("click", (e) => {
    if (e.target.className === "search__select-option-item") {
      const lists = document.querySelectorAll(".search__select-option-item");
      removeClassFromElement(selectedOption.parentNode, "--active");
      lists.forEach((list) => {
        removeClassFromElement(list, "selected");
      });
      e.target.classList.add("selected");
      selectedOption.innerHTML = e.target.innerText;
    }

    if (!e.target.closest("div")?.classList.contains("search__custom-select")) {
      removeClassFromElement(selectedOption.parentNode, "--active");
    }
  });

  selectedOption.addEventListener("click", () => {
    toggleClassForElement(selectedOption.parentNode, "--active");
  });
};
const initializeSearchTabs = () => {
  const radio1 = document.querySelectorAll("#searchChoice1");
  const radio2 = document.querySelectorAll("#searchChoice2");
  const contentSelects = document.querySelectorAll(".search__contents--select");

  radio1[0].addEventListener("click", () => {
    removeClassFromElement(contentSelects[1], "--active");
    addClassToElement(contentSelects[0], "--active");
  });

  radio2[0].addEventListener("click", () => {
    removeClassFromElement(contentSelects[0], "--active");
    addClassToElement(contentSelects[1], "--active");
  });
};
const searchCarBtn = () => {
  const inputs = document.querySelectorAll(".search__form-inputs input");
  const btn = document.querySelector(".search__form-inputs button");

  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      let allFilled = true; // 추후 정규식 validation 필요

      inputs.forEach((input) => {
        if (input.value === "") {
          allFilled = false;
        }
      });

      btn.disabled = !allFilled;
    });
  });
};
const init = () => {
  openSearchBox();
  setupTabs();
  updateSearchOptions();
  updateSelectedOption();
  initializeSearchTabs();
  searchCarBtn();
};

init();
