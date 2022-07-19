"use strict";

// Mobile navigation

const btnNav = document.querySelector(".btn-mobile");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
