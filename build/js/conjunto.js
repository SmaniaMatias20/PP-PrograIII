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