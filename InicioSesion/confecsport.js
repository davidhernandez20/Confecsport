
function mostrarDiv(id) {
  var divs = document.getElementsByClassName("divs");
  for (var i = 0; i < divs.length; i++) {
    divs[i].classList.remove("active");
  }

  var div = document.getElementById(id);
  div.classList.add("active");
}

document.addEventListener("DOMContentLoaded", function () {
  var enlaces = document.querySelectorAll(".listo a");

  enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function (event) {
      event.preventDefault(); // Previene la acción predeterminada del enlace

      var id = this.getAttribute("onclick").split("'")[1];
      mostrarDiv(id);
    });
  });
});

const colorPicker = document.getElementById("colorPicker");
const colorDisplay = document.getElementById("colorDisplay");

colorPicker.addEventListener("input", function () {
  const selectedColor = colorPicker.value;
  colorDisplay.style.Color = selectedColor;
});


const imagen = document.getElementById("imagen");
const listas = document.getElementById("listas");

imagen.addEventListener("click", function() {
  listas.classList.toggle("comentario");
});

const flecha = document.getElementById("flecha");
const lista_ordenar_lista = document.getElementById("lista_ordenar_lista");

flecha.addEventListener("click", function() {
  lista_ordenar_lista.classList.toggle("losto");
});

const flecha2 = document.getElementById("flecha2");
const lista_ordenar_lista2 = document.getElementById("lista_ordenar_lista2");

flecha2.addEventListener("click", function() {
  lista_ordenar_lista2.classList.toggle("losto2");
});