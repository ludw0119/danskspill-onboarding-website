"use strict";

window.addEventListener("DOMContentLoaded", init);

function init() {
  document.querySelector(".btn-email").addEventListener("click", signupCliked);
  const inputs = document.querySelectorAll(".inputLabel");
  console.log(inputs);
  inputs.forEach(oneInput => oneInput.addEventListener("click", animatelable));
}

function signupCliked() {
  const form = document.querySelector("#acount-form");
  console.log(form);
  form.classList.add("animateform");
  const acountChoice = document.querySelector("#acount-choose");
  acountChoice.classList.add("hideChosse");
}

function animatelable(e) {
  console.log(e.target.id);
  console.log(e.toElement.nextElementSibling.htmlFor);

  if (e.target.id === e.toElement.nextElementSibling.htmlFor) {
    e.toElement.nextElementSibling.classList.add("move-lable");
  }
}
