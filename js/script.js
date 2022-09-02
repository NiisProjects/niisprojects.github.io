// NAVBAR FOR SCREENS LESS THAN 600PX
const menu = document.querySelector(".navbar-container");
const menuBtn = document.querySelector(".hamburger");
const exitBtn = document.querySelector(".exit");

// show/hide nav menu
menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    exitBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu
const closeNav = () => {
    menu.style.display = "none";
    exitBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

exitBtn.addEventListener('click', closeNav);

// loading animation
var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
  loader.style.display = "none";
})
