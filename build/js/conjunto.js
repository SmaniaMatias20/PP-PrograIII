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

/*ACTUALIZAR DETALLES DEL ARTICULO*/
const params = new URLSearchParams(window.location.search);
const articuloId = params.get('id');

const articulos = {
  1: {
    titulo: 'Ideas para organizar tu hogar en espacios pequeños',
    fecha: '10/02/2024',
    autor: 'Admin',
    contenido:
      'Descubre cómo aprovechar cada rincón de tu casa, optimizando el espacio en áreas reducidas sin sacrificar la comodidad ni el estilo. En este artículo, exploraremos soluciones inteligentes y prácticas para organizar tu hogar en espacios pequeños. Desde el uso de muebles multifuncionales hasta la implementación de estanterías flotantes, aprenderás a maximizar el espacio vertical y a utilizar los rincones olvidados de tu casa. Además, te damos consejos sobre cómo elegir los colores adecuados para ampliar visualmente las habitaciones y mantener una sensación de amplitud y confort en todo momento.',
    imagen: 'build/img/blog1.jpg'
  },
  2: {
    titulo: 'Colores que serán tendencia en 2024 para tu hogar',
    fecha: '25/03/2024',
    autor: 'Admin',
    contenido:
      'Te mostramos los colores que estarán en auge este año y cómo incorporarlos de manera efectiva en cada estancia de tu hogar. El 2024 trae consigo una paleta de colores vibrante y sofisticada, perfecta para darle un toque moderno a cualquier hogar. Desde tonos tierra cálidos hasta matices audaces como el azul marino y el verde esmeralda, descubrirás cómo estas tonalidades pueden transformar completamente la atmósfera de tu hogar. Además, compartimos ideas de combinación y sugerencias de materiales y texturas que puedes utilizar para realzar la decoración de cada espacio, logrando un estilo equilibrado y acogedor.',
    imagen: 'build/img/blog2.jpg'
  },
  3: {
    titulo: 'Cómo crear un jardín interior en casa',
    fecha: '12/07/2024',
    autor: 'Admin',
    contenido:
      'Aprende a diseñar y mantener un pequeño jardín en el interior de tu hogar, aprovechando la luz natural y las plantas adecuadas. Crear un jardín interior no solo mejora la estética de tu hogar, sino que también tiene beneficios para la salud, como la purificación del aire y la reducción del estrés. En este artículo, te explicamos cómo elegir las plantas correctas según la luz y la temperatura de tu espacio, y te damos recomendaciones sobre macetas, riego y cuidados específicos para mantener tu jardín en óptimas condiciones durante todo el año. ¡Dale vida a tu hogar con un toque natural!',
    imagen: 'build/img/blog3.jpg'
  },
  4: {
    titulo: 'Consejos para elegir los mejores muebles para tu sala',
    fecha: '03/10/2024',
    autor: 'Admin',
    contenido:
      'Encuentra los muebles ideales para tu sala de estar, teniendo en cuenta el tamaño, la funcionalidad y el estilo que mejor se adapta a tu espacio. Elegir los muebles adecuados para tu sala puede ser un desafío, pero con los consejos correctos, podrás crear un ambiente acogedor y funcional. Aquí te ayudamos a seleccionar piezas clave como sofás, mesas de centro y estanterías que no solo se adapten a tus necesidades, sino que también realcen la estética de tu hogar. Descubre cómo combinar diferentes estilos de muebles, desde lo moderno hasta lo clásico, y cómo aprovechar el espacio disponible para mantener un equilibrio entre funcionalidad y diseño.',
    imagen: 'build/img/blog4.jpg'
  }
};

const articulo = articulos[articuloId];

if (articulo) {
  document.getElementById('titulo-articulo').innerText = articulo.titulo;
  document.getElementById('fecha-articulo').innerText = articulo.fecha;
  document.getElementById('autor-articulo').innerText = articulo.autor;
  document.getElementById('contenido-articulo').innerText = articulo.contenido;
  document.querySelector('.imagen img').src = articulo.imagen;
}
