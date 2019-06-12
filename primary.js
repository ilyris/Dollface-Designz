/* Initalize Slick Slider */
$(document).ready(function(){
  $('.single-item').slick({
  });
});
///////////////////////////
const mobileMenuCloseButton = document.getElementById('closeMobileMenuButton');
mobileMenuCloseButton.addEventListener('click', closeMobileMenu, false);
document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu, false);


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
  const hamburgerMenu = document.querySelector('.hamburger-menu').classList;
  const wrapper = document.getElementById('mobileMenuWrapper').classList;
  const overlay = document.getElementById('mobileMenuOverlay').classList;
  const mobileMenuCloseButton = document.getElementById('closeMobileMenuButton').classList;


  if(hamburgerMenu.contains("toggle-active")) {
    mobileMenuCloseButton.add('on');
    wrapper.add("mobileOn");
    wrapper.toggle("fadeInLeft");
    overlay.add('fadeIn');
    overlay.remove('fadeOut');
      if(wrapper.contains('fadeOutLeft')) {
        wrapper.remove("fadeOutLeft");
      }

  } else if(!hamburgerMenu.contains('toggle-active')) {
    wrapper.remove("fadeInLeft");
    wrapper.toggle("fadeOutLeft");
    overlay.remove('fadeIn');
    overlay.add('fadeOut');
    mobileMenuCloseButton.remove('on');
  }

}

function closeMobileMenu() {
  const hamburgerMenu = document.querySelector('.hamburger-menu').classList;
  const wrapper = document.getElementById('mobileMenuWrapper').classList;
  const overlay = document.getElementById('mobileMenuOverlay').classList;
  const mobileMenuCloseButton = document.getElementById('closeMobileMenuButton').classList;

  if(wrapper.contains('fadeInLeft')) {
    hamburgerMenu.remove('toggle-active');
    wrapper.remove('fadeInLeft');
    wrapper.add('fadeOutLeft');
    overlay.remove('fadeIn');
    overlay.add('fadeOut');
  }
  mobileMenuCloseButton.remove('on');
}


// class MobileMenu {
//   constructor() {
//     this.hamburgerMenu = document.querySelector('.hamburger-menu');
//     this.wrapper = document.getElementById('mobileMenuWrapper').classList;
//     this.overlay = document.getElementById('mobileMenuOverlay').classList;
//     this.events()
//   }
//   events() {
//     this.hamburgerMenu.classList.addEventListener('click', this.toggle.bind(this));
//   }
//     toggleMenu() {
//     this.toggle("toggle-active");
//     if(hamburgerMenu.classList.contains("toggle-active")) {
//       this.mobileMenuCloseButton.add('on');
//       this.wrapper.add("mobileOn");
//       this.wrapper.toggle("fadeInLeft");
//       this.overlay.add('fadeIn');
//       this.overlay.remove('fadeOut');
//         if(this.wrapper.contains('fadeOutLeft')) {
//           this.wrapper.remove("fadeOutLeft");
//         }
//     } else {
//       this.wrapper.remove("fadeInLeft");
//       this.wrapper.toggle("fadeOutLeft");
//       this.overlay.remove('fadeIn');
//       this.overlay.add('fadeOut');
//       this.mobileMenuCloseButton.remove('on');
//     }
//   }
// }
// let mobileMenuToggle = new MobileMenu();
