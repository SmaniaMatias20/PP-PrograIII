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

const articulos = [
  {
    id: 1,
    titulo: 'Ideas para organizar tu hogar en espacios pequeños',
    fecha: '10/02/2024',
    autor: 'Tanoni Matias',
    contenido: 'Descubre cómo aprovechar cada rincón de tu casa con ingeniosas soluciones de almacenamiento y diseño. Desde estanterías flotantes hasta muebles multifuncionales, aprende a maximizar el espacio sin sacrificar estilo. Con estas ideas, transformarás tu hogar en un lugar ordenado y acogedor, perfecto para vivir y recibir visitas.',
    imagen: 'build/img/blog1.jpg',
  },
  {
    id: 2,
    titulo: 'Colores que serán tendencia en 2024 para tu hogar',
    fecha: '25/03/2024',
    autor: 'Palopolo Lujan',
    contenido: 'Te mostramos los colores que estarán en auge este año y cómo puedes incorporarlos en la decoración de tu hogar. Desde tonos cálidos y acogedores hasta colores fríos que aportan serenidad, descubre cómo elegir la paleta adecuada para cada espacio. Aprende a combinar estos colores para crear ambientes armónicos y llenos de personalidad.',
    imagen: 'build/img/blog2.jpg',
  },
  {
    id: 3,
    titulo: 'Cómo crear un jardín interior en casa',
    fecha: '12/07/2024',
    autor: 'Smania Matias',
    contenido: 'Aprende a diseñar y mantener un pequeño jardín en el interior de tu hogar. Te enseñaremos sobre las plantas más adecuadas para espacios reducidos, el cuidado que requieren y consejos para la disposición ideal. Desde jardines verticales hasta rincones verdes en tus habitaciones, transforma tu hogar en un oasis natural que te conecte con la naturaleza.',
    imagen: 'build/img/blog3.jpg',
  },
  {
    id: 4,
    titulo: 'Consejos para elegir los mejores muebles para tu sala',
    fecha: '03/10/2024',
    autor: 'Peña Enzo',
    contenido: 'Encuentra los muebles ideales para tu sala de estar con nuestros consejos prácticos. Descubre qué estilos se adaptan mejor a tu espacio y cómo seleccionar muebles que sean funcionales y estéticamente agradables. Además, te daremos tips sobre la distribución del mobiliario para optimizar el espacio y crear un ambiente acogedor para ti y tus invitados.',
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
        <a class="enlace-articulo" data-id="${articulo.id}">
          <h4>${articulo.titulo}</h4>
          <p>Escrito el: <span>${articulo.fecha}</span> por: <span>${articulo.autor}</span></p>
          <p>${articulo.contenido}</p>
        </a>
      </div>
    `;
    contenedor.appendChild(article);
  });
}



/* EVENTOS AL CARGAR LA PÁGINA */
document.addEventListener("DOMContentLoaded", function () {
  eventListeners(), darkMode();
  const isListaArticulos = document.querySelector("main.contenedor") && !window.location.pathname.includes("articulo.html");

  if (isListaArticulos && window.location.pathname.includes("blog.html")) {
    // Si estamos en la página de lista de artículos
    cargarArticulos();
  }
});

