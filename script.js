console.log("hello word!");

const navbar = document.getElementById("navbar");
const navstart = document.getElementById("started");

console.log(innerWidth);
document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (innerWidth < 476 && window.scrollY > 220) {
    navbar.classList.add("scroll-navbar");
    navstart.classList.add("start-scroll");
  } else if (window.scrollY > 300) {
    navbar.classList.add("scroll-navbar");
    navstart.classList.add("start-scroll");
  } else {
    navbar.classList.remove("scroll-navbar");
    navstart.classList.remove("start-scroll");
  }
});
