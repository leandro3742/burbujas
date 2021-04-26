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
<div class="card rounded mt-4 mx-2 shadow-1">
    <div class=""><i class="icon ml-2"></i></div>
    <div class="d-flex justify-content-center align-items-center">
        <h1 class="number"></h1>
    </div>
    <div class="down d-flex justify-content-start">
        <i class="iconDown ml-2"></i>
    </div>
</div>
 `;

//FUNCIONES PARA CAMBIAR DE STRING A ENTEROS
function cambio_a_entero(numero) {
  switch (numero) {
    case "10":
      numero = 10;
      break;
    case "J":
      numero = 11;
      break;
    case "Q":
      numero = 12;
      break;
    case "K":
      numero = 13;
      break;
  }
  return numero;
}

function cambio_a_string(numero) {
  switch (numero) {
    case 10:
      numero = "10";
      break;
    case 11:
      numero = "J";
      break;
    case 12:
      numero = "Q";
      break;
    case 13:
      numero = "K";
      break;
  }
  return numero;
}

// Declaro los ordenamientos //
const bubbleSort = arr => {
  let wall = arr.length - 1; //we start the wall at the end of the array
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index] > arr[index + 1]) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
      }
      index++;
    }
    wall--; //decrease the wall for optimization
  }
  return arr;
};

const selectionSort = arr => {
  for (let j = 0; j < arr.length; ++j) {
    let i = (iMin = j);
    for (++i; i < arr.length; ++i) {
      arr[i] < arr[iMin] && (iMin = i);
    }
    [arr[j], arr[iMin]] = [arr[iMin], arr[j]];
  }

  return arr;
};

function burbuja(arreglo) {
  //recorreremos todos los elementos hasta n-1
  let i;
  let j;
  let aux;
  for (i = 0; i < arreglo.length - 1; i++)
    //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
    for (j = 0; j < arreglo.length - j; j++) {
      //comparamos
      if (arreglo[j][0] > arreglo[j + 1][0]) {
        //guardamos el numero mayor en el auxiliar
        aux = arreglo[j];
        //guardamos el numero menor en el lugar correspondiente
        arreglo[j] = arreglo[j + 1];
        //asignamos el auxiliar en el lugar correspondiente
        arreglo[j + 1] = aux;
      }
    }

  return arreglo;
}
//FIN DE ORDENAMIENTOS //
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let numero_elegido = document.querySelector(".numero");
let btnChange = document.querySelector(".btnChange");
let contador = 0;
var contadorBubble = 0;
//BOTON PARA CREAR CARTAS //
btnChange.addEventListener("click", e => {
  e.preventDefault();
  console.log(contador);
  console.log(numero_elegido);
  contador = 0;
  div.innerHTML = ``;
  while (contador < numero_elegido.value) {
    randomIcon = getRandomInt(0, 3); //Creo el numero al azar para las pintas
    randomNumber = getRandomInt(0, 12);
    div.innerHTML = div.innerHTML + carta_html; //Le agrego al html la nueva carta vacia

    let number = document.querySelectorAll(".number");
    let icon = document.querySelectorAll(".icon");
    let iconDown = document.querySelectorAll(".iconDown");

    number[contador].innerHTML = numeros[randomNumber];
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
  }
});

//BOTON PARA ORDENAR BURBUJAS //
let btnSort = document.querySelector(".btnSort");
btnSort.addEventListener("click", e => {
  let titulo = document.querySelector(".tituloBubble");
  titulo.style.display = "block";

  let number = document.querySelectorAll("#divCard .number");
  let icon = document.querySelectorAll(".icon");
  let arrGeneral = []; //En arreglo general voy a guardar el numero, palo, color

  let cont = 0;
  while (cont < number.length) {
    // guardo el numero, palo y el color de la carta
    arrGeneral[cont] = [
      number[cont].innerHTML,
      icon[cont].innerHTML,
      icon[cont].style.color
    ];
    cont++;
  }
  let ite = 0;
  while (ite < arrGeneral.length) {
    let sub_arr = arrGeneral[ite];
    let palos = sub_arr[1];
    let color = sub_arr[2];
    console.log("ite: " + sub_arr[0]);
    sub_arr[0] = cambio_a_entero(sub_arr[0]);
    arrGeneral[ite] = [sub_arr[0], palos, color];
    ite++;
  }
  arrGeneral = burbuja(arrGeneral);
  //   bubbleSort(arrGeneral); //Genero un arreglo ordenado
  ite = 0;
  while (ite < arrGeneral.length) {
    let sub_arr = arrGeneral[ite];
    let palos = sub_arr[1];
    let color = sub_arr[2];
    console.log("ite: " + sub_arr[0]);
    sub_arr[0] = cambio_a_string(sub_arr[0]);
    arrGeneral[ite] = [sub_arr[0], palos, color];
    ite++;
  }

  let divBubble = document.querySelector("#divBubble"); //Aca van las cartas

  cont = 0;
  let contBubble = contador; //Creo una variable que sea igual a la cantidad de cartas que hay, para solo cambiar de ahi para adelante
  divBubble.innerHTML = ""; //Le agrego al html la nueva carta vacia
  while (cont < arrGeneral.length) {
    divBubble.innerHTML = divBubble.innerHTML + carta_html; //Le agrego al html la nueva carta vacia

    number = document.querySelectorAll(".number");
    icon = document.querySelectorAll(".icon");
    let iconDown = document.querySelectorAll(".iconDown");

    let arreglo_subdividido = arrGeneral[cont]; // Subdivido arrGeneral para poder trabajar mas comodo

    number[contBubble].innerHTML = arreglo_subdividido[0];
    icon[contBubble].innerHTML = arreglo_subdividido[1];
    iconDown[contBubble].innerHTML = arreglo_subdividido[1];

    number[contBubble].style.color = arreglo_subdividido[2];
    icon[contBubble].style.color = arreglo_subdividido[2];
    iconDown[contBubble].style.color = arreglo_subdividido[2];

    cont++;
    contBubble++;
  }
  contadorBubble = contador;
});

//BOTON PARA ORDENAR SELECTION//
let btnSelectionSort = document.querySelector(".btnSelectionSort");
btnSelectionSort.addEventListener("click", e => {
  e.preventDefault();
  let titulo = document.querySelector(".tituloSelection");
  titulo.style.display = "block";

  let number = document.querySelectorAll("#divCard .number");
  let icon = document.querySelectorAll(".icon");
  let arrGeneral = []; //En arreglo general voy a guardar el numero, palo, color

  let cont = 0;
  while (cont < number.length) {
    // guardo el numero, palo y el color de la carta
    arrGeneral[cont] = [
      number[cont].innerHTML,
      icon[cont].innerHTML,
      icon[cont].style.color
    ];
    cont++;
  }
  //   selectionSort(arrGeneral);
  console.log(arrGeneral);
  console.log(arrGeneral[0]);
  let ite = 0;
  while (ite < arrGeneral.length) {
    let sub_arr = arrGeneral[ite];
    let palos = sub_arr[1];
    let color = sub_arr[2];
    console.log("ite: " + sub_arr[0]);
    sub_arr[0] = cambio_a_entero(sub_arr[0]);
    arrGeneral[ite] = [sub_arr[0], palos, color];
    ite++;
  }
  arrGeneral = burbuja(arrGeneral);
  //   bubbleSort(arrGeneral); //Genero un arreglo ordenado
  ite = 0;
  while (ite < arrGeneral.length) {
    let sub_arr = arrGeneral[ite];
    let palos = sub_arr[1];
    let color = sub_arr[2];
    console.log("ite: " + sub_arr[0]);
    sub_arr[0] = cambio_a_string(sub_arr[0]);
    arrGeneral[ite] = [sub_arr[0], palos, color];
    ite++;
  }

  let divBubble = document.querySelector("#divSelection"); //Aca van las cartas

  cont = 0;
  let contBubble = contador + contadorBubble; //Creo una variable que sea igual a la cantidad de cartas que hay, para solo cambiar de ahi para adelante
  console.log(contBubble + " este me importa");
  divBubble.innerHTML = ""; //Le agrego al html la nueva carta vacia
  while (cont < arrGeneral.length) {
    divBubble.innerHTML = divBubble.innerHTML + carta_html; //Le agrego al html la nueva carta vacia

    number = document.querySelectorAll(".number");
    icon = document.querySelectorAll(".icon");
    let iconDown = document.querySelectorAll(".iconDown");

    let arreglo_subdividido = arrGeneral[cont]; // Subdivido arrGeneral para poder trabajar mas comodo

    number[contBubble].innerHTML = arreglo_subdividido[0];
    icon[contBubble].innerHTML = arreglo_subdividido[1];
    iconDown[contBubble].innerHTML = arreglo_subdividido[1];

    number[contBubble].style.color = arreglo_subdividido[2];
    icon[contBubble].style.color = arreglo_subdividido[2];
    iconDown[contBubble].style.color = arreglo_subdividido[2];

    cont++;
    contBubble++;
  }
});
