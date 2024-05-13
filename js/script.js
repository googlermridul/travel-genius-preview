// pre loader
const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
   setTimeout(() => {
      preloader.style.cssText = `opacity: 0; visibility: hidden;`;
   }, 1000);
});

// add bg to nav
window.addEventListener("scroll", function () {
   let scrollpos = window.scrollY;
   const header = document.querySelector("nav");
   const headerHeight = header.offsetHeight;

   if (scrollpos >= headerHeight) {
      header.classList.add("active");
   } else {
      header.classList.remove("active");
   }
});

// active nav item
const navItem = document.getElementsByClassName("nav-link");
for (const element of navItem) {
   element.addEventListener("click", () => {
      for (const ele of navItem) {
         ele.classList.remove("active");
      }
      element.classList.add("active");
   });
}

$(document).ready(function () {
   $(".gateways").owlCarousel({
      loop: true,
      margin: 15,
      rtl: false,
      nav: false,
      dots: false,
      autoplay: true,
      autoplayTimeout: 5000,
      responsive: {
         0: {
            items: 2,
         },
         576: {
            items: 4,
         },
         768: {
            items: 6,
         },
         992: {
            items: 8,
         },
      },
   });
});
