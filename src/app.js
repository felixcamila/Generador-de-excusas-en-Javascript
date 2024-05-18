/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let quien = ["Michael Jackson", "Mi gata", "El hacker", "Mi paraguas"];
  let accion = ["se comió", "borró", "hackeó", "destrozó", "voló", "corrio"];
  let que = ["mi código", "mi laptop", "el teclado"];
  let cuando = [
    "antes de la reunión",
    "mientras me duchaba",
    "despues de tejer",
    "mientras cocinaba",
    "mientras escalaba "
  ];

  //aleatorios
  let aleatorioQuien = Math.floor(Math.random() * quien.length);
  let aleatorioAccion = Math.floor(Math.random() * accion.length);
  let aleatorioQue = Math.floor(Math.random() * que.length);
  let aleatorioCuando = Math.floor(Math.random() * cuando.length);

  let excusa =
    quien[aleatorioQuien] +
    "  " +
    accion[aleatorioAccion] +
    "  " +
    que[aleatorioQue] +
    "  " +
    cuando[aleatorioCuando];

  document.getElementById("excusa").innerHTML = excusa;

  console.log("Hello Rigo from the console!");
};
