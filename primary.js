/* Initalize Slick Slider */
$(document).ready(function(){
  $('.single-item').slick({
  });
});
///////////////////////////
const mobileMenuCloseButton = document.getElementById('closeMobileMenuButton');

document.querySelector(".hamburger-menu").addEventListener("click", toggleMenu);
mobileMenuCloseButton.addEventListener('click', closeMobileMenu, false);


// Event Listeners
window.onscroll = () => {
  toggleStickyNavbar();
  toggleScrollTopButton();
}


function toggleScrollTopButton() {
  const topScrollButton = document.querySelector(".top-scroll-container");
  let scrollPosition = window.scrollY;
  if (scrollPosition >= 1000) {
    topScrollButton.classList.add("active", "fadeInUp");
  } else if (scrollPosition <= 999) {
      topScrollButton.classList.remove("active");
    }
}


function toggleStickyNavbar() {
  const mainNavigationContainer = document.getElementById('mainNavigation');
  const hamburgerMenuContainer = document.getElementById('hamburgerMenuContainer');
  if(window.pageYOffset >= 100) {
      mainNavigationContainer.classList.add("sticky");
      hamburgerMenuContainer.classList.add("sticky");
  } else if(window.pageYOffset <= 99) {
      mainNavigationContainer.classList.remove("sticky");
      hamburgerMenuContainer.classList.remove("sticky");
  }
}


function toggleMenu() {
  this.classList.toggle("toggle-active");
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenuWrapper = document.getElementById('mobieMenuWrapper');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');




  if(hamburgerMenu.classList.contains("toggle-active")) {
    mobileMenuCloseButton.classList.add('on');
    mobileMenuWrapper.classList.add("mobileOn");
    mobileMenuWrapper.classList.toggle("fadeInLeft");
    mobileMenuOverlay.classList.add('fadeIn');
    mobileMenuOverlay.classList.remove('fadeOut');
      if(mobileMenuWrapper.classList.contains('fadeOutLeft')) {
        mobileMenuWrapper.classList.remove("fadeOutLeft");
      }
  } else if(!hamburgerMenu.classList.contains('toggle-active')) {
    mobileMenuWrapper.classList.remove("fadeInLeft");
    mobileMenuWrapper.classList.toggle("fadeOutLeft");
    mobileMenuOverlay.classList.remove('fadeIn');
    mobileMenuOverlay.classList.add('fadeOut');
    mobileMenuCloseButton.classList.remove('on');
  }

}

function closeMobileMenu() {
  const mobileMenuWrapper = document.getElementById('mobieMenuWrapper');
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

  if(mobileMenuWrapper.classList.contains('fadeInLeft')) {
    hamburgerMenu.classList.remove('toggle-active');
    mobileMenuWrapper.classList.remove('fadeInLeft');
    mobileMenuWrapper.classList.add('fadeOutLeft');
    mobileMenuOverlay.classList.remove('fadeIn');
    mobileMenuOverlay.classList.add('fadeOut');
  }
  mobileMenuCloseButton.classList.remove('on');
}


