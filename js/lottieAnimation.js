const setWinterAni = {
  container: document.getElementById("lottie1"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/lotties/lottie_winter.json",
};

const setLicenseAni = {
  container: document.getElementById("lottie2"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "../assets/lotties/lottie_license.json",
};

const winterAni = lottie.loadAnimation(setWinterAni);
const licenseAni = lottie.loadAnimation(setLicenseAni);
