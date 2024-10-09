/* ARTÍCULOS */
const articulos = [
  {
    id: 1,
    titulo: 'Ideas para organizar tu hogar en espacios pequeños',
    fecha: '10/02/2024',
    autor: 'Tanoni Matias',
    contenido: 'Descubre cómo aprovechar cada rincón de tu casa con ingeniosas soluciones de almacenamiento y diseño. Desde estanterías flotantes hasta muebles multifuncionales, aprende a maximizar el espacio sin sacrificar estilo.',
    imagen: '../img/blog1.jpg',
  },
  {
    id: 2,
    titulo: 'Colores que serán tendencia en 2024 para tu hogar',
    fecha: '25/03/2024',
    autor: 'Palopolo Lujan',
    contenido: 'Te mostramos los colores que estarán en auge este año y cómo puedes incorporarlos en la decoración de tu hogar. Desde tonos cálidos y acogedores hasta colores fríos que aportan serenidad, descubre cómo elegir la paleta adecuada para cada espacio.',
    imagen: '../img/blog2.jpg',
  },
  {
    id: 3,
    titulo: 'Cómo crear un jardín interior en casa',
    fecha: '12/07/2024',
    autor: 'Smania Matias',
    contenido: 'Aprende a diseñar y mantener un pequeño jardín en el interior de tu hogar. Te enseñaremos sobre las plantas más adecuadas para espacios reducidos, el cuidado que requieren y consejos para la disposición ideal.',
    imagen: '../img/blog3.jpg',
  },
  {
    id: 4,
    titulo: 'Consejos para elegir los mejores muebles para tu sala',
    fecha: '03/10/2024',
    autor: 'Peña Enzo',
    contenido: 'Encuentra los muebles ideales para tu sala de estar con nuestros consejos prácticos. Descubre qué estilos se adaptan mejor a tu espacio y cómo seleccionar muebles que sean funcionales y estéticamente agradables.',
    imagen: '../img/blog4.jpg',
  },
  {
    id: 5,
    titulo: 'Guía para decorar tu hogar con plantas',
    fecha: '15/11/2024',
    autor: 'Fernandez Carla',
    contenido: 'Descubre cómo las plantas pueden transformar tu hogar. Desde elegir las adecuadas hasta consejos de cuidado, te mostramos cómo integrarlas en tu decoración para crear espacios frescos y acogedores.',
    imagen: '../img/blog5.jpg',
  },
];

/* PROPIEDADES */
const propiedades = {
  1: {
    titulo: "Casa de lujo",
    imagen: "../img/anuncio1.jpg",
    descripcion: "Descubre esta impresionante casa de lujo con vistas espectaculares al lago...",
    precio: "$3,000,000",
    sanitarios: 3,
    estacionamientos: 5,
    dormitorios: 4,
    ubicacion: { lat: -34.6083, lng: -58.3732 }, // Buenos Aires, Argentina
  },
  2: {
    titulo: "Casa con balcón",
    imagen: "../img/anuncio2.jpg",
    descripcion: "Vive en esta moderna casa que combina estilo y funcionalidad...",
    precio: "$2,000,000",
    sanitarios: 3,
    estacionamientos: 3,
    dormitorios: 4,
    ubicacion: { lat: -34.5943, lng: -58.3879 }, // Buenos Aires, Argentina
  },
  3: {
    titulo: "Casa de verano",
    imagen: "../img/anuncio3.jpg",
    descripcion: "Esta moderna casa, con acceso privado a la playa...",
    precio: "$4,500,000",
    sanitarios: 2,
    estacionamientos: 1,
    dormitorios: 3,
    ubicacion: { lat: -37.1002, lng: -56.3704 }, // Punta del Este, Uruguay
  },
  4: {
    titulo: "Casa moderna",
    imagen: "../img/anuncio4.jpg",
    descripcion: "Sumérgete en la vida urbana con esta moderna casa...",
    precio: "$4,200,000",
    sanitarios: 4,
    estacionamientos: 2,
    dormitorios: 5,
    ubicacion: { lat: -34.9040, lng: -56.2058 }, // Montevideo, Uruguay
  },
  5: {
    titulo: "Casa minimalista",
    imagen: "../img/anuncio5.jpg",
    descripcion: "Disfruta de la tranquilidad en esta propiedad minimalista...",
    precio: "$3,800,000",
    sanitarios: 3,
    estacionamientos: 2,
    dormitorios: 3,
    ubicacion: { lat: -34.9032, lng: -57.8560 }, // Córdoba, Argentina
  },
  6: {
    titulo: "Casa con alberca",
    imagen: "../img/anuncio6.jpg",
    descripcion: "Aprovecha esta excelente oportunidad de adquirir una casa con alberca...",
    precio: "$3,000,000",
    sanitarios: 3,
    estacionamientos: 3,
    dormitorios: 4,
    ubicacion: { lat: -34.8350, lng: -58.5732 }, // La Plata, Argentina
  },
};


/* CALCULO DE AÑO DINAMICO */
var yearElement = document.getElementById("year");
var currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

/* MODO OSCURITO */
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

/* MENU MOVIL */
function eventListeners() {
  document
    .querySelector(".mobile-menu")
    .addEventListener("click", toggleNavigation);
}

/* MOSTRAR NAVEGACION */
function toggleNavigation() {
  document.querySelector(".navegacion").classList.toggle("mostrar");
}



/* RESUMIR TEXTO */
function resumirTexto(texto, longitudMaxima) {
  return texto.length > longitudMaxima
    ? texto.substring(0, longitudMaxima) + '...'
    : texto;
}

/* CARGAR PROPIEDADES */
function cargarPropiedades(limite = Object.keys(propiedades).length) {
  let contenedor;
  const enInicio = window.location.pathname.includes("inicio.html");

  if (window.location.pathname.includes("anuncios.html")) {
    contenedor = document.querySelector(".contenedor-anuncios");
  } else if (enInicio) {
    contenedor = document.querySelector(".contenedor-anuncios");
  }

  const longitudMaximaDescripcion = 50; // Longitud máxima de la descripción

  Object.keys(propiedades).slice(0, limite).forEach(key => {
    const propiedad = propiedades[key];
    const anuncio = document.createElement('div');
    anuncio.classList.add('anuncio');

    anuncio.innerHTML = `
      <picture>
        <source srcset="${propiedad.imagen.replace('.jpg', '.webp')}" type="image/webp" />
        <source srcset="${propiedad.imagen}" type="image/jpeg" />
        <img src="${propiedad.imagen}" alt="Imagen ${propiedad.titulo}" />
      </picture>
      <div class="contenido-anuncios">
        <h3>${propiedad.titulo}</h3>
        <p>${resumirTexto(propiedad.descripcion, longitudMaximaDescripcion)}</p>
        <p class="precio">${propiedad.precio}</p>
        <ul class="iconos-caracteristicas">
          <li>
            <img class="icono" loading="lazy" src="../img/icono_wc.svg" alt="icono_wc" />
            <p>${propiedad.sanitarios}</p>
          </li>
          <li>
            <img class="icono" loading="lazy" src="../img/icono_estacionamiento.svg" alt="icono_estacionamiento" />
            <p>${propiedad.estacionamientos}</p>
          </li>
          <li>
            <img class="icono" loading="lazy" src="../img/icono_dormitorio.svg" alt="icono_dormitorio" />
            <p>${propiedad.dormitorios}</p>
          </li>
        </ul>
        <a href="propiedad.html?id=${key}" class="boton-amarillo-block">Ver Propiedad</a>
      </div>
    `;

    contenedor.appendChild(anuncio);
  });
}

/* CARGAR PROPIEDAD SELECCIONADA */
function cargarPropiedad() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (propiedades[id]) {
    const propiedad = propiedades[id];
    document.getElementById("titulo-propiedad").textContent = propiedad.titulo;
    document.getElementById("imagen-propiedad").src = propiedad.imagen;
    document.getElementById("descripcion-propiedad").textContent = propiedad.descripcion;
    document.getElementById("precio-propiedad").textContent = propiedad.precio;
    document.getElementById("sanitarios").textContent = propiedad.sanitarios;
    document.getElementById("estacionamientos").textContent = propiedad.estacionamientos;
    document.getElementById("dormitorios").textContent = propiedad.dormitorios;

    // Inicializar el mapa después de verificar que la API de Google Maps está cargada
    if (typeof google !== 'undefined' && google.maps) {
      initMap(propiedad.ubicacion);
    } else {
      // Esperar hasta que la API se cargue
      const checkGoogleMaps = setInterval(() => {
        if (typeof google !== 'undefined' && google.maps) {
          clearInterval(checkGoogleMaps);
          initMap(propiedad.ubicacion);
        }
      }, 100); // Comprobar cada 100 ms
    }
  } else {
    document.body.innerHTML = "<h1 class='text-center'>Propiedad no encontrada</h1>";
  }
}



/* INICIALIZAR MAPA */
function initMap(ubicacion) {

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: ubicacion,
  });

  new google.maps.Marker({
    position: ubicacion,
    map: map,
    title: "Propiedad",
  });
}

/* CARGAR ARTÍCULOS EN LISTA */
function cargarArticulos(limite = articulos.length) {
  const longitudMaximaDescripcion = 30; // Longitud máxima de la descripción

  let contenedor;
  const enInicio = window.location.pathname.includes("inicio.html");

  if (window.location.pathname.includes("blog.html")) {
    contenedor = document.querySelector("main.contenedor");
  } else if (enInicio) {
    contenedor = document.querySelector("section.contenedor");
  }

  articulos.slice(0, limite).forEach(articulo => {
    const article = document.createElement('article');
    article.classList.add('entrada-blog');

    const contenidoTexto = enInicio
      ? resumirTexto(articulo.contenido, longitudMaximaDescripcion)
      : articulo.contenido;

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
          <p>${contenidoTexto}</p>
        </a>
      </div>
    `;

    contenedor.appendChild(article);
  });
}

/* EVENTOS AL CARGAR LA PÁGINA */
document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
  darkMode();
  const isListaPropiedades = document.querySelector(".contenedor-anuncios") && window.location.pathname.includes("anuncios.html");

  if (window.location.pathname.includes("blog.html")) {
    cargarArticulos();
  } else if (window.location.pathname.includes("inicio.html")) {
    cargarArticulos(2);
    cargarPropiedades(3);
  }

  if (isListaPropiedades && window.location.pathname.includes("anuncios.html")) {
    cargarPropiedades();
  } else if (window.location.pathname.includes("propiedad.html")) {
    cargarPropiedad();
  }
});

