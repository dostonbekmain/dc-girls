// Burger

const nav = document.querySelector(".nav");

const burger = document.querySelector(".burger");

burger.addEventListener("click", function () {
  nav.classList.toggle("active");
});


// To Top

const toTop = document.querySelector(".to__top");

window.addEventListener("scroll", function() {
  if(window.pageYOffset > 100) {
    toTop.classList.add("active")
  } else {
    toTop.classList.remove("active")
  }
})