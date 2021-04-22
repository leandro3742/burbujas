/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { Button } from "bootstrap";

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
let div = document.querySelector("#divCard");

let carta_html = `
 <div class="card rounded mt-4 mx-2">
          <div class=""><i class="icon ml-2"></i></div>

          <div class="d-flex justify-content-center align-items-center">
            <h1 class="number"></h1>
          </div>
          <div class="down d-flex justify-content-start">
            <i class="iconDown ml-2"></i>
          </div>
</div>
 `;

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

let numero_elegido = document.querySelector(".numero");
let btnChange = document.querySelector(".btnChange");
let contador = 0;
btnChange.addEventListener("click", e => {
  e.preventDefault();
  randomIcon = getRandomInt(0, 3); //Creo el numero al azar para las pintas
  div.innerHTML = div.innerHTML + carta_html; //Le agrego al html la nueva carta vacia

  let number = document.querySelectorAll(".number");
  let icon = document.querySelectorAll(".icon");
  let iconDown = document.querySelectorAll(".iconDown");

  number[contador].innerHTML = numero_elegido.value;
  icon[contador].innerHTML = iconos[randomIcon];
  iconDown[contador].innerHTML = iconos[randomIcon];

  //   Aca cambio los colores de las pintas y del numero
  if (randomIcon == 2 || randomIcon == 3) {
    icon[contador].style.color = "red";
    iconDown[contador].style.color = "red";
    number[contador].style.color = "red";
  } else {
    icon[contador].style.color = "black";
    iconDown[contador].style.color = "black";
    number[contador].style.color = "black";
  }
  contador++;
});
