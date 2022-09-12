const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const close = document.querySelector(".close");
const bgFilter = document.querySelector(".background-filter");
const copyright = document.querySelector(".copyright");
const codersBox = document.querySelector("#codersBox");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("active");
  bgFilter.classList.toggle("active");
});

close.addEventListener("click", () => {
  navbar.classList.remove("active");
  bgFilter.classList.remove("active");
});

const rmFilter = () => {
  navbar.classList.remove("active");
  bgFilter.classList.remove("active");
  codersBox.classList.remove("active");
};

document.addEventListener("keyup", (e) => {
  if (e.key == "Escape") {
    rmFilter();
  }
});
bgFilter.addEventListener("click", () => {
  rmFilter();
});

copyright.addEventListener("click", () => {
  bgFilter.classList.add("active");
  codersBox.classList.add("active");
});
