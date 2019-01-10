// will need to animate elements, have the scroll to button fly in / out on certain heights. 
// parallax the home page image with a mouse over preserve 3d effect
let slideIndex = 1;
let test = 123;

window.onload = () => {
onLoadEventHandlers();
}

window.onscroll = () => {
  toggleScrollTopButton();
};






// Event handlers that need to be read on document load
const  onLoadEventHandlers = () => {
  const previousButton = document.querySelector(".previous");
  const nextButton = document.querySelector(".next");
  const hamburgerMenuButton = document.querySelector(".hamburger-menu");
  previousButton.addEventListener("click", () => moveContent(-1));
  nextButton.addEventListener("click", () => moveContent(1));
  hamburgerMenuButton.addEventListener("click", slideMenuOut);
  showContent(slideIndex);
}




//Toggle mobile menu
function slideMenuOut() {
  const mainMenuSlideOut = document.querySelector(".main-navigation-container");
  const mainMenuUl = document.querySelector(".main-navigation");
  const dropDownMenu = document.querySelector(".work-dropdown-menu");
  const dropDownLi = document.querySelector(".main-navigation-li.our-work");

  this.classList.toggle("toggle-active");
  mainMenuSlideOut.classList.toggle("on");
  mainMenuUl.classList.toggle("mobile-active-ul");
  if(mainMenuUl.classList.contains("mobile-active-ul") ) {
    dropDownLi.addEventListener("click", () => {
      dropDownMenu.classList.toggle("drop-down-active");
    })
  }
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


// Testimonial slider functional
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
