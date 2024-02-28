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
// 탭 관련 기능
const setupTabs = () => {
  const tabs = document.querySelectorAll(".search__tab");
  const tabActive = document.querySelector(".search__tab-focus");
  let currentTargetIndex = 0;

  const activateTab = (index) => {
    tabs[currentTargetIndex].children[0].classList.remove("--active");
    tabs[index].children[0].classList.add("--active");
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
// 검색 콘텐츠 업데이트
const updateSearchContent = (index) => {
  const labelArr = ["사이즈로", "규격", "브랜드"];
  const labelName = ["타이어 사이즈", "델코 배터리 규격", "패키지 브랜드"];
  const selected = ["인치", "전체", "전체"];
  const radio2Label = document.querySelector(`label[for='searchChoice2']`);
  const selectLabel = document.querySelector(".select-label");
  const selectedOption = document.querySelector(".label");

  radio2Label.innerText = `${labelArr[index]} 검색`;
  selectLabel.innerText = `${labelName[index]}`;
  selectedOption.innerText = `${selected[index]}`;
};
// 검색 선택 옵션 업데이트
const updateSearchOptions = () => {
  const optionUl = document.querySelector(".option");
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
  const selectLabel = document.querySelector(".select-label");

  document.addEventListener("click", (e) => {
    // console.log(e.target.closest("li").className === "search__tab");
    // console.log(
    //   e.target.closest("span").children[0].className === "search__radio2"
    // );
    if (
      e.target.closest("li")?.className === "search__tab" ||
      e.target.closest("span")?.children[0].className === "search__radio2"
    ) {
      const labelName = selectLabel.innerText;
      const data =
        labelName === "타이어 사이즈"
          ? inchData
          : labelName === "델코 배터리 규격"
          ? batteryData
          : brandData;

      optionUl.innerHTML = "";
      data.forEach((item) => {
        optionUl.insertAdjacentHTML(
          "beforeend",
          `<li class="option-item">${item}</li>`
        );
      });
    }
  });
};
// 선택된 옵션 업데이트
const updateSelectedOption = () => {
  const label = document.querySelector(".label");

  document.addEventListener("click", (e) => {
    if (e.target.className === "option-item") {
      const selectedOption = document.querySelector(".label");
      const lists = document.querySelectorAll(".option-item");

      selectedOption.parentNode.classList.remove("--active");
      lists.forEach((list) => {
        list.classList.remove("selected");
      });
      e.target.classList.add("selected");
      label.innerHTML = e.target.innerText;
    }

    if (!e.target.closest("div")?.classList.contains("custom-select")) {
      const selectedOption = document.querySelector(".label");
      selectedOption.parentNode.classList.remove("--active");
    }
  });

  label.addEventListener("click", () => {
    label.parentNode.classList.toggle("--active");
  });
};

// 검색 선택 탭 초기화
const initializeSearchTabs = () => {
  const radio1 = document.querySelectorAll("#searchChoice1");
  const radio2 = document.querySelectorAll("#searchChoice2");
  const contentSelects = document.querySelectorAll(".search__content__select");

  radio1[0].addEventListener("click", () => {
    contentSelects[1].classList.remove("--active");
    contentSelects[0].classList.add("--active");
  });

  radio2[0].addEventListener("click", () => {
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
        }
      });

      btn.disabled = !allFilled;
    });
  });
};

// 초기화 함수 호출
const initializeSearch = () => {
  openSearchBox();
  setupTabs();
  updateSearchOptions();
  updateSelectedOption();
  initializeSearchTabs();
  searchCarBtn();
};

// 검색 초기화 함수 호출
initializeSearch();
