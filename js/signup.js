"use strict";
const form = document.querySelector("form");
const userMessage = document.querySelector("#username-div div");
const emailMessage = document.querySelector("#email-div div");
const passMessage = document.querySelector("#pass-div div");
const repassMessage = document.querySelector("#rep-pass-div div");
const password = document.querySelector("#password");
const repassword = document.querySelector("#pass-rep");

window.addEventListener("DOMContentLoaded", init);

//funtion init to call event listeners
function init() {
  emailMessage.style.display = "none";
  userMessage.style.display = "none";
  passMessage.style.display = "none";
  repassMessage.style.display = "none";

  document.querySelector(".btn-email").addEventListener("click", signupCliked);
  const inputs = document.querySelectorAll(".inputLabel");
  console.log(inputs);
  inputs.forEach(oneInput => oneInput.addEventListener("click", animatelable));
}

//change sign up choice to the sign up form
function signupCliked() {
  const form = document.querySelector("#acount-form");
  console.log(form);
  form.classList.add("animateform");
  const acountChoice = document.querySelector("#acount-choose");
  acountChoice.classList.add("hideChosse");
}

// Make lable comes up when input cliked
function animatelable(e) {
  console.log(e.target.id);
  console.log(e.toElement.nextElementSibling.htmlFor);

  if (e.target.id === e.toElement.nextElementSibling.htmlFor) {
    e.toElement.nextElementSibling.classList.add("move-lable");
  }
}

// Form validity messages appear

//USERNAME
form.elements.username.addEventListener("blur", e => {
  if (form.elements.username.checkValidity()) {
    userMessage.style.display = "none";
  } else {
    userMessage.style.display = "block";
    setTimeout(function() {
      userMessage.style.display = "none";
    }, 8000);
  }
});

//EMAIL
form.elements.email.addEventListener("blur", e => {
  if (form.elements.email.checkValidity()) {
    emailMessage.style.display = "none";
  } else {
    emailMessage.style.display = "block";
    setTimeout(function() {
      emailMessage.style.display = "none";
    }, 8000);
  }
});

//PASSWORD
form.elements.password.addEventListener("blur", e => {
  if (form.elements.password.checkValidity()) {
    passMessage.style.display = "none";
  } else {
    passMessage.style.display = "block";
    setTimeout(function() {
      passMessage.style.display = "none";
    }, 8000);
  }
});

//CONFIRM PASSWORD
form.elements.repassword.addEventListener("blur", e => {
  if (form.elements.repassword.checkValidity()) {
    passMessage.style.display = "none";
  } else {
    repassMessage.style.display = "block";
    setTimeout(function() {
      repassMessage.style.display = "none";
    }, 8000);
  }
});

// PASSWORD MATH
function validatePassword() {
  console.log(password.value, repassword.value);
  if (password.value != repassword.value) {
    repassword.setCustomValidity("Passwords Don't Match");
  } else {
    repassword.setCustomValidity("");
  }
}
password.onchange = validatePassword;
repassword.onkeyup = validatePassword;

// add content to database
form.addEventListener("submit", e => {
  form.elements.submit.disabled = true;
  console.log(e);
  e.preventDefault();
  const obj = {
    Username: form.elements.username.value,
    Email: form.elements.email.value
  };
  console.log(obj);
  post(obj);
});

function post(obj) {
  fetch("", {
    method: "post",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "",
      "cache-control": "no-cache"
    },
    body: JSON.stringify(obj)
  }).then(res => res.json());
  // .then(data => displayTasks(data));
}
