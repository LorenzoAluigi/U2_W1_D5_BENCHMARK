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

const allM = document.querySelectorAll("g");

console.log(allM);
const StopAnimatedM = function () {
  clearInterval(animatedM);
};

const animatedM = setInterval(function () {
  let n = 0;
  while (n < 50) {
    let i = Math.floor(Math.random() * 1957);
    allM[i].classList.add("animated");
    n += 1;
    console.log(n);
  }
  unanimatedM();
}, 10000);

const unanimatedM = function () {
  const mNone = document.querySelectorAll("animated");

  mNone.forEach((e) => {
    e.classList.remove("animated");
  });
};
