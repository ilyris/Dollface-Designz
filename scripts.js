// will need to animate elements, have the scroll to button fly in / out on certain heights. parallax the home page image with a mouse over preserve 3d effect
//
let slideIndex = 1;
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");


previousButton.addEventListener("click", () => moveContent(-1));
nextButton.addEventListener("click", () => moveContent(1));
document.querySelector(".hamburger-menu").addEventListener("click", slideMenuOut);
showContent(slideIndex);

window.onscroll = () => {
  toggleScrollTopButton();
};

// function toggleMoreMenu() {
//   const mainMenu = document.querySelector(".main-navigation");
//   this.classList.toggle("toggle-active");
//   mainMenu.classList.toggle("on");
// }

//Maybe break this big function into smaller functions
function slideMenuOut() {
  const mainMenuSlideOut = document.querySelector(".main-navigation-container");
  const mainMenuUl = document.querySelector(".main-navigation");
  const mainMenuLi = document.getElementsByClassName("main-navigation-li");
  const mainMenuA = document.getElementsByClassName("main-navigation-a");
  

  this.classList.toggle("toggle-active");
  mainMenuSlideOut.classList.toggle("on");
  mainMenuUl.classList.toggle("mobile-active-ul");
  for(value of mainMenuLi) {
  value.classList.toggle("mobile-active-li");
  }
  for(value of mainMenuA) {
    value.classList.toggle("mobile-active-a");
    }
  // if(mainMenuSlideOut.classList.contains('on') == true) {
  //   for ( let i = 0; i < menuLinksLi.length; i++) {
  //       menuLinksLi[i].classList.add("fadeInRightBig");
  //       menuLinksLi[i].classList.remove('fadeOutRightBig');

  //     }
  // }
  // if (mainMenuSlideOut.classList.contains("on") == false) {
  //   for (let i = 0; i < menuLinksLi.length; i++) {
  //       menuLinksLi[i].classList.add("fadeOutRightBig");
  //       menuLinksLi[i].classList.remove('fadeInRightBig');
  //     }
  // }
}

// Toggle the class active on the scroll to top button, so after a certain scroll height it appears and disappears
const toggleScrollTopButton = () => {
  const topScrollButton = document.querySelector(".top-scroll-container");
  let scrollPosition = window.scrollY;
  if (scrollPosition <= 999) {
    topScrollButton.classList.remove("active");
  } else if (scrollPosition >= 1000) {
    topScrollButton.classList.add("active", "fadeInUp");
  }
};

// Testimonial slider functionality
function moveContent(slideIndexValue) {
  showContent((slideIndex += slideIndexValue));
}
function showContent(slideIndexValue) {
  const slideContainer = document.getElementsByClassName("slide-container");
  if (slideIndexValue > slideContainer.length) {
    slideIndex = 1;
  }
  if (slideIndexValue < 1) {
    slideIndex = slideContainer.length;
  }
  for (let i = 0; i < slideContainer.length; i++) {
    slideContainer[i].style.display = "none";
  }
  slideContainer[slideIndex - 1].style.display = "flex";
}
