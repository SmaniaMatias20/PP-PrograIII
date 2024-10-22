//#region CONSTANTES

/* ARTÍCULOS */
const articulos = [
  {
    id: 1,
    titulo: 'Ideas para organizar tu hogar en espacios pequeños',
    fecha: '10/02/2024',
    autor: 'Tanoni Matias',
    contenido: 'Descubre cómo aprovechar cada rincón de tu casa con ingeniosas soluciones de almacenamiento y diseño. Desde estanterías flotantes hasta muebles multifuncionales, aprende a maximizar el espacio sin sacrificar estilo.',
    imagen: '../src/articulos/blog1.jpg',
  },
  {
    id: 2,
    titulo: 'Colores que serán tendencia en 2024 para tu hogar',
    fecha: '25/03/2024',
    autor: 'Palopolo Lujan',
    contenido: 'Te mostramos los colores que estarán en auge este año y cómo puedes incorporarlos en la decoración de tu hogar. Desde tonos cálidos y acogedores hasta colores fríos que aportan serenidad, descubre cómo elegir la paleta adecuada para cada espacio.',
    imagen: '../src/articulos/blog2.jpg',
  },
  {
    id: 3,
    titulo: 'Cómo crear un jardín interior en casa',
    fecha: '12/07/2024',
    autor: 'Smania Matias',
    contenido: 'Aprende a diseñar y mantener un pequeño jardín en el interior de tu hogar. Te enseñaremos sobre las plantas más adecuadas para espacios reducidos, el cuidado que requieren y consejos para la disposición ideal.',
    imagen: '../src/articulos/blog3.jpg',
  },
  {
    id: 4,
    titulo: 'Consejos para elegir los mejores muebles para tu sala',
    fecha: '03/10/2024',
    autor: 'Peña Enzo',
    contenido: 'Encuentra los muebles ideales para tu sala de estar con nuestros consejos prácticos. Descubre qué estilos se adaptan mejor a tu espacio y cómo seleccionar muebles que sean funcionales y estéticamente agradables.',
    imagen: '../src/articulos/blog4.jpg',
  },
];

/* PROPIEDADES */
const propiedades = {
  1: {
    titulo: "Casa de lujo",
    imagen: "../src/anuncios/anuncio1/propiedad.jpg",
    imagenesInterior: [
      "../src/anuncios/anuncio1/cocina.jpg",
      "../src/anuncios/anuncio1/baño.jpg",
      "../src/anuncios/anuncio1/dormitorio.jpg"
    ],
    descripcion: "Descubre esta impresionante casa de lujo con vistas espectaculares al lago...",
    precio: "$3,000,000",
    sanitarios: 3,
    estacionamientos: 5,
    dormitorios: 4,
    ubicacion: { lat: -34.6083, lng: -58.3732 },
    reservada: false, // Cambia a true si está reservada
  },
  2: {
    titulo: "Casa con balcón",
    imagen: "../src/anuncios/anuncio2/propiedad.jpg",
    imagenesInterior: [
      "../src/anuncios/anuncio2/cocina.jpg",
      "../src/anuncios/anuncio2/baño.jpg",
      "../src/anuncios/anuncio2/dormitorio.jpg"
    ],
    descripcion: "Vive en esta moderna casa que combina estilo y funcionalidad...",
    precio: "$2,000,000",
    sanitarios: 3,
    estacionamientos: 3,
    dormitorios: 4,
    ubicacion: { lat: -34.5889, lng: -58.3962 },
    reservada: false,
  },
  3: {
    titulo: "Casa de verano",
    imagen: "../src/anuncios/anuncio3/propiedad.jpg",
    imagenesInterior: [
      "../src/anuncios/anuncio3/cocina.jpg",
      "../src/anuncios/anuncio3/baño.jpg",
      "../src/anuncios/anuncio3/dormitorio.jpg"
    ],
    descripcion: "Esta moderna casa, con acceso privado a la playa...",
    precio: "$4,500,000",
    sanitarios: 2,
    estacionamientos: 1,
    dormitorios: 3,
    ubicacion: { lat: -34.5880, lng: -58.4072 },
    reservada: true, // Ejemplo de propiedad reservada
  },
  4: {
    titulo: "Casa moderna",
    imagen: "../src/anuncios/anuncio4/propiedad.jpg",
    imagenesInterior: [
      "../src/anuncios/anuncio4/cocina.jpg",
      "../src/anuncios/anuncio4/baño.jpg",
      "../src/anuncios/anuncio4/dormitorio.jpg"
    ],
    descripcion: "Sumérgete en la vida urbana con esta moderna casa...",
    precio: "$4,200,000",
    sanitarios: 4,
    estacionamientos: 2,
    dormitorios: 5,
    ubicacion: { lat: -34.6170, lng: -58.3643 },
    reservada: false,
  },
  5: {
    titulo: "Casa minimalista",
    imagen: "../src/anuncios/anuncio5/propiedad.jpg",
    imagenesInterior: [
      "../src/anuncios/anuncio5/cocina.jpg",
      "../src/anuncios/anuncio5/baño.jpg",
      "../src/anuncios/anuncio5/dormitorio.jpg"
    ],
    descripcion: "Disfruta de la tranquilidad en esta propiedad minimalista...",
    precio: "$3,800,000",
    sanitarios: 3,
    estacionamientos: 2,
    dormitorios: 3,
    ubicacion: { lat: -34.5733, lng: -58.4391 },
    reservada: true, // Otra propiedad reservada
  },
  6: {
    titulo: "Casa con alberca",
    imagen: "../src/anuncios/anuncio6/propiedad.jpg",
    imagenesInterior: [
      "../src/anuncios/anuncio6/cocina.jpg",
      "../src/anuncios/anuncio6/baño.jpg",
      "../src/anuncios/anuncio6/dormitorio.jpg"
    ],
    descripcion: "Aprovecha esta excelente oportunidad de adquirir una casa con alberca...",
    precio: "$3,000,000",
    sanitarios: 3,
    estacionamientos: 3,
    dormitorios: 4,
    ubicacion: { lat: -34.6132, lng: -58.3733 },
    reservada: false,
  },
};



//#endregion

/// <summary>
/// Calcula el año actual y lo muestra en el elemento con id "year".
/// </summary>
var yearElement = document.getElementById("year");
var currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

/// <summary>
/// Configura el modo oscuro de la aplicación basado en la preferencia del usuario.
/// </summary>
function darkMode() {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  //Guardo en el almacenamiento local del navegador la preferencia de tema de usuario
  const userPreference = localStorage.getItem("theme");
  if (userPreference) {
    if (userPreference === "dark") {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  } else {
    prefersDarkScheme.matches
      ? document.body.classList.add("darkMode")
      : document.body.classList.remove("darkMode");

  }

  // Listener para el boton de cambiar de modo
  document.querySelector(".dark-mode-boton").addEventListener("click", () => {
    document.body.classList.toggle("darkMode");
    // Guardar la preferencia del usuario en localStorage
    if (document.body.classList.contains("darkMode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
  // se fija en si se cambia de tema
  prefersDarkScheme.addEventListener("change", () => {
    prefersDarkScheme.matches
      ? document.body.classList.add("darkMode")
      : document.body.classList.remove("darkMode");
    // Actualizar el localStorage
    if (prefersDarkScheme.matches) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
}

/// <summary>
/// Configura los eventos para el menú móvil.
/// </summary>
function eventListeners() {
  document
    .querySelector(".mobile-menu")
    .addEventListener("click", toggleNavigation);
}

/// <summary>
/// Alterna la visibilidad del menú de navegación en dispositivos móviles.
/// </summary>
function toggleNavigation() {
  document.querySelector(".navegacion").classList.toggle("mostrar");
}



/// <summary>
/// Resume un texto a una longitud máxima especificada.
/// </summary>
/// <param name="texto">El texto que se va a resumir.</param>
/// <param name="longitudMaxima">La longitud máxima del texto resumido.</param>
/// <returns>El texto resumido, añadiendo "..." si es necesario.</returns>
function resumirTexto(texto, longitudMaxima) {
  return texto.length > longitudMaxima
    ? texto.substring(0, longitudMaxima) + '...'
    : texto;
}

/// <summary>
/// Carga las propiedades en el contenedor especificado.
/// </summary>
/// <param name="limite">Número máximo de propiedades a cargar.</param>
function cargarPropiedades(limite = Object.keys(propiedades).length) {

  const contenedor = document.querySelector(".contenedor-anuncios");


  const longitudMaximaDescripcion = 50; // Longitud máxima de la descripción

  Object.keys(propiedades).slice(0, limite).forEach(key => {
    const propiedad = propiedades[key];
    const anuncio = document.createElement('div');
    anuncio.classList.add('anuncio');

    anuncio.innerHTML = `
      <picture>
        <source srcset="${propiedad.imagen}" type="image/jpeg" />
        <img src="${propiedad.imagen}" alt="Imagen ${propiedad.titulo}" />
      </picture>
      <div class="contenido-anuncios">
        <h3>${propiedad.titulo}</h3>
        <p>${resumirTexto(propiedad.descripcion, longitudMaximaDescripcion)}</p>
        <p class="precio">${propiedad.precio}</p>
        <ul class="iconos-caracteristicas">
          <li>
            <img class="icono" loading="lazy" src="../src/iconos/icono_wc.svg" alt="icono_wc" />
            <p>${propiedad.sanitarios}</p>
          </li>
          <li>
            <img class="icono" loading="lazy" src="../src/iconos/icono_estacionamiento.svg" alt="icono_estacionamiento" />
            <p>${propiedad.estacionamientos}</p>
          </li>
          <li>
            <img class="icono" loading="lazy" src="../src/iconos/icono_dormitorio.svg" alt="icono_dormitorio" />
            <p>${propiedad.dormitorios}</p>
          </li>
        </ul>
        <a href="propiedad.html?id=${key}" class="boton-amarillo-block">Ver Propiedad</a>
      </div>
    `;

    contenedor.appendChild(anuncio);
  });
}

/// <summary>
/// Carga la propiedad seleccionada en la página.
/// </summary>
function cargarPropiedad() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (propiedades[id]) {
    const propiedad = propiedades[id];

    // Verificar el estado guardado en localStorage
    const estadoGuardado = localStorage.getItem(`estado-${id}`);
    propiedad.reservada = estadoGuardado === 'true'; // Actualizar el estado basado en localStorage

    console.log(propiedad);
    document.getElementById("titulo-propiedad").textContent = propiedad.titulo;
    document.getElementById("descripcion-propiedad").textContent = propiedad.descripcion;
    document.getElementById("precio-propiedad").textContent = propiedad.precio;
    document.getElementById("sanitarios").textContent = propiedad.sanitarios;
    document.getElementById("estacionamientos").textContent = propiedad.estacionamientos;
    document.getElementById("dormitorios").textContent = propiedad.dormitorios;

    // Renderizar estado en forma de botón
    const estadoPropiedadDiv = document.getElementById("estado-propiedad");
    const estadoButton = document.createElement("button");
    estadoButton.textContent = propiedad.reservada ? "Reservada" : "Disponible";
    estadoButton.className = propiedad.reservada ? "btn btn-danger" : "btn btn-success";

    estadoButton.onclick = function () {
      propiedad.reservada = !propiedad.reservada; // Cambia el estado
      estadoButton.textContent = propiedad.reservada ? "Reservada" : "Disponible"; // Actualiza el texto del botón
      estadoButton.className = propiedad.reservada ? "btn btn-danger" : "btn btn-success"; // Cambia el estilo del botón

      // Guardar el nuevo estado en localStorage
      localStorage.setItem(`estado-${id}`, propiedad.reservada);
    };

    estadoPropiedadDiv.innerHTML = ''; // Limpiar contenido previo
    estadoPropiedadDiv.appendChild(estadoButton);

    // Establecer imágenes interiores en el carrusel
    const imagenesInterior = propiedad.imagenesInterior;
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = ''; // Limpiar contenido previo

    imagenesInterior.forEach((imagen, index) => {
      const item = document.createElement('div');
      item.className = `carousel-item ${index === 0 ? 'active' : ''}`;
      const img = document.createElement('img');
      img.src = imagen;
      img.alt = `Imagen Interior ${index + 1}`;
      img.className = 'img-fluid mb-4';
      item.appendChild(img);
      carouselInner.appendChild(item);
    });

    // Inicializar el mapa
    if (typeof google !== 'undefined' && google.maps) {
      initMap(propiedad.ubicacion);
    } else {
      const checkGoogleMaps = setInterval(() => {
        if (typeof google !== 'undefined' && google.maps) {
          clearInterval(checkGoogleMaps);
          initMap(propiedad.ubicacion);
        }
      }, 100);
    }
  } else {
    document.body.innerHTML = "<h1 class='text-center'>Propiedad no encontrada</h1>";
  }
}






/// <summary>
/// Inicializa el mapa de Google Maps en la ubicación de la propiedad.
/// </summary>
/// <param name="ubicacion">La ubicación de la propiedad que se mostrará en el mapa.</param>
function initMap(ubicacion) {

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: ubicacion,
  });

  new google.maps.Marker({
    position: ubicacion,
    map: map,
    title: "Propiedad",
  });
}

/// <summary>
/// Carga los artículos en la lista según la página actual.
/// </summary>
/// <param name="limite">Número máximo de artículos a cargar.</param>
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

/// <summary>
/// Configura los eventos al cargar la página, cargando artículos y propiedades según corresponda.
/// </summary>
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

//#region FAVORITOS 

/// <summary>
/// Configura los eventos para eliminar favoritos.
/// </summary>
document.querySelectorAll('.eliminar-favorito').forEach(boton => {
  boton.addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    this.parentElement.remove();
    alert('Eliminado de favoritos');
  });
});

/// <summary>
/// Configura los eventos para generar cupones de descuento.
/// </summary>
document.querySelectorAll('.generar-cupon').forEach(boton => {
  boton.addEventListener('click', function () {
    const cupon = 'CUPON-' + Math.random().toString(36).substr(2, 8).toUpperCase();
    this.nextElementSibling.textContent = 'Tu código de cupón: ' + cupon;
    alert('Cupón generado: ' + cupon);
  });
});

//#endregion
