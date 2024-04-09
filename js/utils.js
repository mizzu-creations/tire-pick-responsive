const addComma = (number) => {
  if (number !== null) {
    return number.toLocaleString();
  }
};
const setBodyOverflow = (state) => {
  return (document.querySelector("body").style.overflow = state);
};

export { addComma, setBodyOverflow };
