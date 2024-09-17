/*CALCULO DE AÑO DINAMICO*/
var yearElement = document.getElementById("year");
var currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;
/*MODO OSCURITO*/
function darkMode() {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  prefersDarkScheme.matches
    ? document.body.classList.add("darkMode")
    : document.body.classList.remove("darkMode");

  prefersDarkScheme.addEventListener("change", () => {
    prefersDarkScheme.matches
      ? document.body.classList.add("darkMode")
      : document.body.classList.remove("darkMode");
  });

  document.querySelector(".dark-mode-boton").addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
  });
}
/*MENU MOBILLLLE*/
function eventListeners() {
  document
    .querySelector(".mobile-menu")
    .addEventListener("click", toggleNavigation);
}
/*MOSTRAR NAVEGACION*/
function toggleNavigation() {
  document.querySelector(".navegacion").classList.toggle("mostrar");
}
/*TERMINA DE CARGAR LA PAGINA Y CARGA LAS FUNCIONES*/
document.addEventListener("DOMContentLoaded", function () {
  eventListeners(), darkMode();
});

//CHEQUEA SI ES WEB PAGE PARA AJUSTAR LA CALIDAD DE LA IMAGEN DE FONDO
function checkWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height === 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRiIAAABXRUJQVlA4TAYAAAAvAAAAHEAAEAAAAA0A0A3QAA==";
}

checkWebP(function (supportsWebP) {
  if (supportsWebP) {
    document.documentElement.classList.add("webp");
  } else {
    document.documentElement.classList.add("no-webp");
  }
});
