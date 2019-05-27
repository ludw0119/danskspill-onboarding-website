"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector(".btn-email").addEventListener("click", signupCliked);
}

function signupCliked(e) {
  const form = document.querySelector("#acount-form");
  console.log(form);
  form.classList.add("animateform");
  const acountChoice = document.querySelector("#acount-choose");
  acountChoice.classList.add("hide");
}
