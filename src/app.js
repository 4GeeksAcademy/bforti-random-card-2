/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const simbolo = [
  `<h1 class="text-danger">♦</h1>`,
  "<h1>♠</h1>",
  "<h1>♣</h1>",
  `<h1 class="text-danger">♥</h1>`
];
const numero = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const x = Math.floor(Math.random() * 4);
window.onload = function() {
  for (let n = 0; n < 2; n++) {
    let aux = document.getElementsByClassName("simbolos");
    aux[n].innerHTML = simbolo[x];
  }
  let ele = document.getElementById("number");
  let clase = [` class=text-danger`, ""];
  let s = 1;
  if (x == 0 || x == 3) {
    s = 0;
  }

  ele.innerHTML =
    "<h1" +
    clase[s] +
    ">" +
    numero[Math.floor(Math.random() * numero.length)] +
    "</h1>";
};
