let scrolled = false;

window.addEventListener("scroll", function () {
  const rotatingDiv = document.querySelector(".stories");
  const scrollY = window.scrollY;
  const rotationAngle = scrollY / 10; 
  rotatingDiv.style.transform = `rotateY(${rotationAngle}deg)`;
});

function changeImage(imageName, button) {
  document.getElementById("dynamicImage").src = "./img/" + imageName;
  var buttons = document.querySelectorAll(".items_name button");
  buttons.forEach(function (btn) {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}


// functions for images scrolling in workflow section


// parallax effect on images
function setZIndex() {
  var images = document.querySelectorAll('.parallax_img img');
  images[0].classList.add("p_img1hov")
  images[0].classList.remove("p_img1")
  images[1].classList.add("p_img2hov")
  images[1].classList.remove("p_img2")
  images[2].classList.add("p_img2hov")
}

function outZIndex() {
  var images = document.querySelectorAll('.parallax_img img');
  images[0].classList.remove("p_img1hov")
  images[0].classList.add("p_img1")
  images[1].classList.remove("p_img2hov")
  images[1].classList.add("p_img2")
  images[2].classList.remove("p_img2hov")
}

