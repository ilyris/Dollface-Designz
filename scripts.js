// will need to animate elements, have the scroll to button fly in / out on certain heights. parallax the home page image with a mouse over preserve 3d effect
//

let slideIndex = 1;
const previousButton = document.querySelector(".previous");
const nextButton = document.querySelector(".next");

previousButton.addEventListener("click", () => moveContent(-1));
nextButton.addEventListener("click", () => moveContent(1));
showContent(slideIndex);

window.onscroll = () => {
  toggleScrollTopButton();
};

// Toggle the class active on the scroll to top button, so after a certain scroll height it appears and disappears
const toggleScrollTopButton = () => {
  const topScrollButton = document.querySelector(".top-scroll-container");
  let scrollPosition = window.scrollY;
  if (scrollPosition <= 999) {
    topScrollButton.classList.remove("active");
  } else if (scrollPosition >= 1000) {
    topScrollButton.classList.add("active");
  }
};
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
