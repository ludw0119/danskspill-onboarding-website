"use strict";

let slideIndex = 1;

window.addEventListener("DOMContentLoaded", init);

function init() {
  const prev = document.querySelector(".prev");
  prev.addEventListener("click", goPrev);
  const next = document.querySelector(".next");
  next.addEventListener("click", goNext);
  showSlides(slideIndex);
  dotEvent();
}

function dotEvent() {
  const dots = document.querySelectorAll(".dot");
  console.log(dots[1]);
  dots[0].addEventListener("click", dot => {
    currenSlide(1);
  });
  dots[1].addEventListener("click", dot => {
    currenSlide(2);
  });
  dots[2].addEventListener("click", dot => {
    currenSlide(3);
  });
  dots[3].addEventListener("click", dot => {
    currenSlide(4);
  });
  dots[4].addEventListener("click", dot => {
    currenSlide(5);
  });
  dots[5].addEventListener("click", dot => {
    currenSlide(6);
  });
}

function currenSlide(index) {
  showSlides((slideIndex = index));
}

function plus(index) {
  showSlides((slideIndex += index));
}

function goNext(e) {
  console.log(e);
  plus(1);
}
function goPrev() {
  plus(-1);
}

showSlides();
function showSlides(index) {
  let counter;
  const slideArray = document.querySelectorAll(".slides");
  // console.log(slideArray);
  const dotArray = document.querySelectorAll(".dot");
  // console.log(dotArray);

  if (index < 1) {
    slideIndex = slideArray.length;
  }
  for (counter = 0; counter < slideArray.length; counter++) {
    slideArray[counter].style.display = "none";
  }
  for (counter = 0; counter < dotArray.length; counter++) {
    dotArray[counter].className = dotArray[counter].className.replace(
      " current",
      ""
    );
  }
  slideArray[slideIndex - 1].style.display = "block";

  dotArray[slideIndex - 1].className += " current";

  //change arrow function when begining or end
  if (slideIndex === 1) {
    document.querySelector(".prev").style.visibility = "hidden";
  } else {
    document.querySelector(".prev").style.visibility = "visible";
  }

  console.log(slideIndex);
  if (slideIndex === 6) {
    document.querySelector(".next").addEventListener("click", lastClick);
  }
}

function lastClick() {
  document.querySelector("#main-onboarding section").style.display = "none";
}
