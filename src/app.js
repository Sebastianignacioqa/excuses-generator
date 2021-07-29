/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  //write your code here

  var generarExcusa = () => {
    var pronombre = ["El", "Mi", "Un", "Ese"];
    var sujeto = [
      "mimo",
      "perro",
      "gato",
      "zorro",
      "conejo",
      "cantinero",
      "chef"
    ];
    var verbo = ["tiro", "sacudio", "mojo", "mordio", "arreglo", "quemo"];
    var cosa = [
      "mi tarea",
      "mi comida",
      "la cama",
      "mi laptop",
      "la casa",
      "la puerta",
      "la cocina"
    ];
    var cuando = [
      "hoy",
      "ayer",
      "antes de ayer",
      "esta semana",
      "el mes pasado",
      "la semana pasada"
    ];
    var ipronombre = Math.floor(Math.random() * 4);
    var isujeto = Math.floor(Math.random() * sujeto.length);
    var iverbo = Math.floor(Math.random() * verbo.length);
    var icosa = Math.floor(Math.random() * cosa.length);
    var icuando = Math.floor(Math.random() * cuando.length);
    return (
      pronombre[ipronombre] +
      " " +
      sujeto[isujeto] +
      " " +
      verbo[iverbo] +
      " " +
      cosa[icosa] +
      " " +
      cuando[icuando]
    );
  };
  document.querySelector("#excuse").innerHTML = generarExcusa();
};
