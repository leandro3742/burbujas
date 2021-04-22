/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

let number = document.querySelector(".number");
let icon = document.querySelector(".icon");
let iconDown = document.querySelector(".iconDown");
let btn = document.querySelector(".btn");

let randomIcon;
let randomNumber;

let iconos = ["♣", "♦", "♥", "♠"];
let numeros = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function changeChild(randomIcon, randomNumber) {
  if (randomIcon == 2 || randomIcon == 3) {
    icon.style.color = "red";
    iconDown.style.color = "red";
    number.style.color = "red";
  } else {
    icon.style.color = "black";
    iconDown.style.color = "black";
    number.style.color = "black";
  }

  number.innerHTML = numeros[randomNumber];
  icon.innerHTML = iconos[randomIcon];
  iconDown.innerHTML = iconos[randomIcon];
}

window.onload = function() {
  randomIcon = getRandomInt(0, 3);
  randomNumber = getRandomInt(0, 12);
  changeChild(randomIcon, randomNumber);
};

btn.addEventListener("click", function(e) {
  e.preventDefault();
  randomIcon = getRandomInt(0, 3);
  randomNumber = getRandomInt(0, 12);
  changeChild(randomIcon, randomNumber);
});
