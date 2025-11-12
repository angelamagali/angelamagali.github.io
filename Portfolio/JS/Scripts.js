window.addEventListener("load", function () {
  const portada = document.getElementById("portada");
  const home = document.getElementById("Presentation");

  // Mostrar portada
  portada.classList.add("Show");

  // Después de 3 segundos, desaparecer portada y mostrar Home
  setTimeout(() => {
    portada.classList.add("hidden"); // se oculta completamente
    home.classList.add("Show");
    document.body.classList.add("loaded"); // activa header/footer
  }, 3000);
});