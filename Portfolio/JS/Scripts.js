function ShowSection(id) {
  // Ocultar todas las secciones
  var secciones = document.getElementsByClassName("Info_menu");
  for (var i = 0; i < secciones.length; i++) {
    secciones[i].classList.remove("Show");
  }

  // Mostrar solo la sección seleccionada
  var seleccionada = document.getElementById(id);
  seleccionada.classList.add("Show");
}