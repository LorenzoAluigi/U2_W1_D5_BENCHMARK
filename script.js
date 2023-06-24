console.log("hello word!");

const navbar = document.getElementById("navbar");

document.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 300) {
    navbar.classList.add("scroll-navbar");
  } else {
    navbar.classList.remove("scroll-navbar");
  }
});
