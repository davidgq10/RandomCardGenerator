/* eslint-disable */

import "./style.css";

let Numeros = [
  "A",
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
let Cartas = [
  { Simbolo: "Pica", color: "black", simbol: "♠" },
  { Simbolo: "Corazon", color: "Red", simbol: "♥" },
  { Simbolo: "Trebol", color: "black", simbol: "♣" },
  { Simbolo: "Diamante", color: "Red", simbol: "♦" }
];

let DOCticon = document.getElementById("t-icon");
let DOCnumber = document.getElementById("number");
let DOCbicon = document.getElementById("b-icon");

document.getElementById("t-icon").innerText("Hola");

//aux.style.background = "blue";

const Carta = () => {
  return Math.floor(Math.random() * 4);
};
const Numero = () => {
  return Math.floor(Math.random() * 13);
};

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
