const imgEl = document.querySelector(".house-img");
const imgSrcs = ["./img/house1.png", "./img/house2.png", "./img/house3.png"];
const leftBtn = document.querySelector(".left-arrow");
const rightBtn = document.querySelector(".right-arrow");
const navList = document.querySelector(".nav-list");
const navActiveClass = "nav-item--active";
//reset
imgEl.attributes[0].value = imgSrcs[0];
let displayedImg = 0;

//add functionality to left and right arrows
leftBtn.addEventListener("click", (el) => {
  navList.children[displayedImg].classList.remove(navActiveClass);
  if (displayedImg == 0) {
    displayedImg = 2;
  } else {
    displayedImg -= 1;
  }
  navList.children[displayedImg].classList.add(navActiveClass);
  console.log(displayedImg);
  imgEl.attributes[0].value = imgSrcs[displayedImg];
});

rightBtn.addEventListener("click", (el) => {
  navList.children[displayedImg].classList.remove(navActiveClass);
  if (displayedImg == 2) {
    displayedImg = 0;
  } else {
    displayedImg += 1;
  }
  navList.children[displayedImg].classList.add(navActiveClass);
  console.log(displayedImg);
  imgEl.attributes[0].value = imgSrcs[displayedImg];
});

// adding functionality to nav bar

Array.from(navList.children).forEach((element) => {
  element.addEventListener("click", (event) => {
    Array.from(navList.children).forEach((el) => {
      el.classList.remove(navActiveClass);
    });
    const elIndex = Array.from(navList.children).indexOf(element);
    imgEl.attributes[0].value = imgSrcs[elIndex];
    navList.children[elIndex].classList.add(navActiveClass);
  });
});
