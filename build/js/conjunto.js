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

// /*TERMINA DE CARGAR LA PAGINA Y CARGA LAS FUNCIONES*/
// document.addEventListener("DOMContentLoaded", function () {
//   eventListeners(), darkMode();
//   cargarArticulo();
// });

const articulos = [
  {
    id: 1,
    titulo: 'Ideas para organizar tu hogar en espacios pequeños',
    fecha: '10/02/2024',
    autor: 'Tanoni Matias',
    contenido: 'Descubre cómo aprovechar cada rincón de tu casa...',
    imagen: 'build/img/blog1.jpg',
  },
  {
    id: 2,
    titulo: 'Colores que serán tendencia en 2024 para tu hogar',
    fecha: '25/03/2024',
    autor: 'Palopolo Lujan',
    contenido: 'Te mostramos los colores que estarán en auge este año...',
    imagen: 'build/img/blog2.jpg',
  },
  {
    id: 3,
    titulo: 'Cómo crear un jardín interior en casa',
    fecha: '12/07/2024',
    autor: 'Smania Matias',
    contenido: 'Aprende a diseñar y mantener un pequeño jardín...',
    imagen: 'build/img/blog3.jpg',
  },
  {
    id: 4,
    titulo: 'Consejos para elegir los mejores muebles para tu sala',
    fecha: '03/10/2024',
    autor: 'Peña Enzo',
    contenido: 'Encuentra los muebles ideales para tu sala de estar...',
    imagen: 'build/img/blog4.jpg',
  }
];

/* CARGAR ARTÍCULOS EN LISTA */
function cargarArticulos() {
  const contenedor = document.querySelector("main.contenedor");

  articulos.forEach(articulo => {
    const article = document.createElement('article');
    article.classList.add('entrada-blog');

    article.innerHTML = `
      <div class="imagen">
        <picture>
          <source srcset="${articulo.imagen.replace('.jpg', '.webp')}" type="image/webp" />
          <source srcset="${articulo.imagen}" type="image/jpeg" />
          <img loading="lazy" src="${articulo.imagen}" alt="Imagen Blog ${articulo.id}" />
        </picture>
      </div>
      <div class="texto-entrada">
        <a href="articulo.html?id=${articulo.id}" class="enlace-articulo" data-id="${articulo.id}">
          <h4>${articulo.titulo}</h4>
          <p>Escrito el: <span>${articulo.fecha}</span> por: <span>${articulo.autor}</span></p>
          <p>${articulo.contenido}</p>
        </a>
      </div>
    `;
    contenedor.appendChild(article);
  });
}

/* CARGAR DETALLES DEL ARTÍCULO */
function cargarArticulo() {
  const params = new URLSearchParams(window.location.search);
  const articuloId = params.get('id');

  const articulo = articulos.find(art => art.id == articuloId);

  if (articulo) {
    document.getElementById('titulo-articulo').innerText = articulo.titulo;
    document.getElementById('fecha-articulo').innerText = articulo.fecha;
    document.getElementById('autor-articulo').innerText = articulo.autor;
    document.getElementById('contenido-articulo').innerText = articulo.contenido;
    document.getElementById('imagen-articulo').src = articulo.imagen;
  }
}

/* EVENTOS AL CARGAR LA PÁGINA */
document.addEventListener("DOMContentLoaded", function () {
  eventListeners(), darkMode();
  const isListaArticulos = document.querySelector("main.contenedor") && !window.location.pathname.includes("articulo.html");

  if (isListaArticulos) {
    // Si estamos en la página de lista de artículos
    cargarArticulos();
  } else if (window.location.pathname.includes("articulo.html")) {
    // Si estamos en la página de detalle de artículo
    cargarArticulo();
  }
});

