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
  const selectLabel = document.querySelector(".select-label");
  const selectedOption = document.querySelector(".label");

  const labelArr = ["사이즈로", "규격", "브랜드"];
  const labelName = ["타이어 사이즈", "델코 배터리 규격", "패키지 브랜드"];
  const selected = ["인치", "전체", "전체"];

  const activateTab = (index) => {
    tabs[currentTargetIndex].children[0].classList.remove("--active");
    tabs[index].children[0].classList.add("--active");
    currentTargetIndex = index;
    const translation = `${currentTargetIndex * 26}rem`;
    tabActive.style.transform = `translate(calc(${translation}), -50%)`;
    tabActive.innerText = tabs[index].children[0].innerText;
    radio2Label.innerText = `${labelArr[index]} 검색`;
    selectLabel.innerText = `${labelName[index]}`;
    selectedOption.innerText = `${selected[index]}`;
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      if (index !== currentTargetIndex) {
        activateTab(index);
      }
    });
  });

  const optionUl = document.querySelector(".option");

  const startNumber = 13;
  const endNumber = 22;
  const inchData = Array.from(
    { length: endNumber - startNumber + 1 },
    (_, index) => startNumber + index
  );
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

  radio1[0].addEventListener("click", () => {
    contentSelects[1].classList.remove("--active");
    contentSelects[0].classList.add("--active");
  });
  radio2[0].addEventListener("click", () => {
    contentSelects[0].classList.remove("--active");
    contentSelects[1].classList.add("--active");
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest("div")?.classList[0] == "custom-select") {
      changeSelected();

      [...optionUl.children].forEach((item) => {
        item.remove();
      });

      let inputIdx = labelName.indexOf(selectLabel.innerText);

      if (inputIdx === 0) {
        inchData.forEach((data) => {
          optionUl.insertAdjacentHTML(
            "beforeend",
            `<li class="option-item">${data}</li>`
          );
        });
      } else if (inputIdx === 1) {
        batteryData.forEach((data) => {
          optionUl.insertAdjacentHTML(
            "beforeend",
            `<li class="option-item">${data}</li>`
          );
        });
      } else {
        brandData.forEach((data) => {
          optionUl.insertAdjacentHTML(
            "beforeend",
            `<li class="option-item">${data}</li>`
          );
        });
      }
    }
    if (e.target.closest("div")?.classList[0] !== "custom-select") {
      selectedOption.parentNode.classList.remove("--active");
    }
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

const changeSelected = () => {
  const label = document.querySelector(".label");
  const options = document.querySelectorAll(".option-item");

  if (options.length > 0) {
    document.addEventListener("click", (e) => {
      if (e.target.className === "option-item")
        label.innerHTML = e.target.innerText;
    });
  }

  label.addEventListener("click", () => {
    if (label.parentNode.classList.contains("--active")) {
      label.parentNode.classList.remove("--active");
    } else {
      label.parentNode.classList.add("--active");
    }
  });
};

openSearchBox();
selectSearchTab();
searchCarBtn();
