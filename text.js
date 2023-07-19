var display = 0;
var x = document.getElementById("about");
function show() {
  if (display === 1) {
    x.style.visibility = "hidden";
    display = 0;
  } else {
    x.style.visibility = "visible";
    reservation.style.visibility = "hidden";
    display = 1;
  }
}
var reservation = document.getElementById("reservation");
function showR() {
  if (display === 1 || display === 0) {
    reservation.style.visibility = "visible";
    display = 2;
    x.style.visibility = "hidden";
  } else if (display === 2) {
    reservation.style.visibility = "hidden";
    display = 1;
  }
}

var menu = document.getElementById("menu");
var displayM = 0;
function showM() {
  if (displayM === 0) {
    menu.style.visibility = "visible";
    displayM = 1;
  } else {
    menu.style.visibility = "hidden";
    displayM = 0;
  }
}

var slides = document.querySelectorAll("carousel slide");
var currentSlide = 0;

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.style.display = "none";
  });
  slides[index].style.display = "block";
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 2000);
