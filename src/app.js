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
  { color: "black", simbolo: "♠" },
  { color: "Red", simbolo: "♥" },
  { color: "black", simbolo: "♣" },
  { color: "Red", simbolo: "♦" }
];

const Numero = Numeros[Math.floor(Math.random() * 13)];
const Carta = Cartas[Math.floor(Math.random() * 4)];

document.getElementById("t-icon").innerHTML = Carta.simbolo;
document.getElementById("t-icon").style.color = Carta.color;
document.getElementById("number").innerHTML = Numero;
document.getElementById("number").style.color = Carta.color;
document.getElementById("b-icon").innerHTML = Carta.simbolo;
document.getElementById("b-icon").style.color = Carta.color;
