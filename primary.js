/* Initalize Slick Slider */
$(document).ready(function(){
  $('.single-item').slick({
  });
});
///////////////////////////
document.querySelector('.hamburger-menu').addEventListener('click', toggleMenu, false);
const dropDownParent = document.querySelector('.dropDownParent');
dropDownParent.addEventListener('click', rotateDropDownIcon, false);


// Event Listeners
window.onscroll = () => {
  toggleStickyNavbar();
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


function rotateDropDownIcon() {
  const dropDownParent = document.querySelector('.dropDownParent').classList;
  const icon = document.querySelector('.dropDownIcon i');
  const dropDownList = document.getElementById('subNavMobileMenu').classList;

  dropDownParent.toggle('dropDownActive');
  if(dropDownParent.contains('dropDownActive')){
    icon.style.transform="rotate(90deg)";
    dropDownList.add('show');
  } else {
    icon.style.transform="rotate(0deg)";
    dropDownList.remove('show');
  }



}

function toggleMenu() {
  this.classList.toggle("toggle-active");
  const hamburgerMenu = document.querySelector('.hamburger-menu').classList;
  const wrapper = document.getElementById('mobileMenuWrapper').classList;

  if(hamburgerMenu.contains("toggle-active")) {
    wrapper.add("mobileOn");
    wrapper.toggle("translateUp");
  } else if(!hamburgerMenu.contains('toggle-active')) {
    wrapper.remove("translateUp");
  }

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
//       this.wrapper.toggle("translateUp");
//       this.overlay.add('fadeIn');
//       this.overlay.remove('fadeOut');
//         if(this.wrapper.contains('translateDown')) {
//           this.wrapper.remove("translateDown");
//         }
//     } else {
//       this.wrapper.remove("translateUp");
//       this.wrapper.toggle("translateDown");
//       this.overlay.remove('fadeIn');
//       this.overlay.add('fadeOut');
//       this.mobileMenuCloseButton.remove('on');
//     }
//   }
// }
// let mobileMenuToggle = new MobileMenu();
