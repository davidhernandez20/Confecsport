function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  if (nombre === "") {
      mostrarModal();
  } else {
      
  }
}

function mostrarModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "block";
}

function cerrarModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}

