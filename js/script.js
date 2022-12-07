let contactFormBtn = document.querySelectorAll(".contact")[0];
let bookFormBtn = document.querySelectorAll(".contact")[1];

let contactIcon = document.querySelectorAll(".down")[0];
let bookingIcon = document.querySelectorAll(".down")[1];

let contactForm = document.querySelectorAll(".form-container")[0];
let bookForm = document.querySelectorAll(".form-container")[1];

let burgerMenuBtn = document.getElementById("burger-menu");
let burgerMenu = document.querySelector(".burger-menu-dropdown");

let preload = document.querySelector(".preload");

let serviceCards = Array.from(document.getElementsByClassName("service"));

let servicePopupWrapper = document.getElementById("servicePopupWrapper");
let servicePopup = document.getElementById("servicePopup");
let closePopup = document.getElementById("closePopup");
let serviceImg = document.getElementById("serviceImg");
let serviceName = document.getElementById("serviceName");
let serviceContent = document.getElementById("serviceContent");

// preloader
window.addEventListener("load", function () {
  setTimeout(() => {
    preload.classList.add("preload-hide");
  }, 2000);
});

// toggle contact and booking tabs
contactFormBtn.addEventListener("click", function () {
  contactForm.classList.toggle("hidden");
  contactIcon.classList.toggle("up");
});
bookFormBtn.addEventListener("click", function () {
  bookForm.classList.toggle("hidden");
  bookingIcon.classList.toggle("up");
});

burgerMenuBtn.addEventListener("click", function () {
  burgerMenu.classList.toggle("hidden");
});

// Services
serviceCards.forEach((service) => {
  service.addEventListener("click", () => {
    servicePopup.style.display = "flex";
    servicePopupWrapper.style.display = "block";

    serviceImg.src = service.children[0].src;
    serviceName.textContent = service.children[1].textContent;
    serviceContent.textContent = service.children[2].textContent;
  });
});

closePopup.addEventListener('click', ()=>{
  servicePopup.style.display = "none";
  servicePopupWrapper.style.display = "none";
})
