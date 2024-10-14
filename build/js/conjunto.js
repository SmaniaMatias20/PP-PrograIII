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
    imagen: "../src/anuncios/anuncio1.jpg",
    descripcion: "Descubre esta impresionante casa de lujo con vistas espectaculares al lago. Con acabados de alta calidad y un diseño elegante, esta propiedad cuenta con amplios espacios interiores que incluyen una sala de estar luminosa, una cocina gourmet y un comedor ideal para recibir a tus invitados. Disfruta de tu propio oasis en el jardín, donde puedes relajarte junto a la piscina. Esta casa no solo ofrece confort, sino también una ubicación privilegiada cerca de restaurantes de alta gama y zonas recreativas.",
    precio: "$3,000,000",
    sanitarios: 3,
    estacionamientos: 5,
    dormitorios: 4,
    ubicacion: { lat: -34.6083, lng: -58.3732 }, // Buenos Aires, Argentina
  },
  2: {
    titulo: "Casa con balcón",
    imagen: "../src/anuncios/anuncio2.jpg",
    descripcion: "Vive en esta moderna casa que combina estilo y funcionalidad. Con un encantador balcón que ofrece vistas a la ciudad, este hogar es perfecto para disfrutar de un café por la mañana o una cena al atardecer. La cocina está equipada con electrodomésticos de última generación y la sala de estar es un espacio acogedor para relajarte. Además, la ubicación en Recoleta te coloca a pasos de parques, boutiques y la vibrante vida cultural de Buenos Aires.",
    precio: "$2,000,000",
    sanitarios: 3,
    estacionamientos: 3,
    dormitorios: 4,
    ubicacion: { lat: -34.5889, lng: -58.3962 }, // Recoleta
  },
  3: {
    titulo: "Casa de verano",
    imagen: "../src/anuncios/anuncio3.jpg",
    descripcion: "Esta moderna casa, con acceso privado a la playa, es el escape perfecto para tus vacaciones. Imagina despertar con el sonido de las olas y disfrutar de la brisa marina desde tu terraza. La casa cuenta con un diseño abierto que maximiza la luz natural, ideal para crear un ambiente cálido y acogedor. Con 3 dormitorios y un espacio exterior ideal para barbacoas, es el lugar perfecto para crear recuerdos inolvidables con amigos y familiares.",
    precio: "$4,500,000",
    sanitarios: 2,
    estacionamientos: 1,
    dormitorios: 3,
    ubicacion: { lat: -34.5880, lng: -58.4072 }, // Palermo
  },
  4: {
    titulo: "Casa moderna",
    imagen: "../src/anuncios/anuncio4.jpg",
    descripcion: "Sumérgete en la vida urbana con esta moderna casa, diseñada para quienes buscan la combinación perfecta entre confort y estilo contemporáneo. Con 5 dormitorios y amplios espacios de entretenimiento, esta propiedad es ideal para familias grandes. Disfruta de la cocina de diseño abierto que se conecta a la sala de estar y al comedor, facilitando la convivencia. Además, su ubicación en Puerto Madero te brinda acceso a restaurantes de alta calidad, parques y el río, convirtiéndola en una elección inmejorable.",
    precio: "$4,200,000",
    sanitarios: 4,
    estacionamientos: 2,
    dormitorios: 5,
    ubicacion: { lat: -34.6170, lng: -58.3643 }, // Puerto Madero
  },
  5: {
    titulo: "Casa minimalista",
    imagen: "../src/anuncios/anuncio5.jpg",
    descripcion: "Disfruta de la tranquilidad en esta propiedad minimalista, donde cada detalle ha sido cuidadosamente diseñado para ofrecer un ambiente sereno y funcional. Con amplias ventanas que permiten la entrada de luz natural, esta casa es perfecta para aquellos que valoran el diseño simple pero elegante. Los 3 dormitorios ofrecen suficiente espacio para la familia, mientras que el jardín te invita a relajarte y desconectar del bullicio urbano. Ubicada en Belgrano, disfrutarás de la cercanía a áreas verdes y servicios.",
    precio: "$3,800,000",
    sanitarios: 3,
    estacionamientos: 2,
    dormitorios: 3,
    ubicacion: { lat: -34.5733, lng: -58.4391 }, // Belgrano
  },
  6: {
    titulo: "Casa con alberca",
    imagen: "../src/anuncios/anuncio6.jpg",
    descripcion: "Aprovecha esta excelente oportunidad de adquirir una casa con alberca, perfecta para disfrutar de días soleados y momentos de relajación. La propiedad cuenta con un diseño moderno y abierto, con áreas sociales que invitan al entretenimiento. La cocina equipada se integra al comedor, creando un espacio ideal para cenas con amigos. Además, su ubicación en San Telmo te permite disfrutar de la rica cultura del barrio, con sus mercados, galerías de arte y restaurantes típicos.",
    precio: "$3,000,000",
    sanitarios: 3,
    estacionamientos: 3,
    dormitorios: 4,
    ubicacion: { lat: -34.6132, lng: -58.3733 }, // San Telmo
  },
};

//#endregion

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
    zoom: 15,
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

//#region FAVORITOS Y CONSTANTES

/*Favoritos*/
document.querySelectorAll('.eliminar-favorito').forEach(boton => {
  boton.addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    this.parentElement.remove();
    alert('Eliminado de favoritos');
  });
});

/*Promociones*/
document.querySelectorAll('.generar-cupon').forEach(boton => {
  boton.addEventListener('click', function () {
    const cupon = 'CUPON-' + Math.random().toString(36).substr(2, 8).toUpperCase();
    this.nextElementSibling.textContent = 'Tu código de cupón: ' + cupon;
    alert('Cupón generado: ' + cupon);
  });
});

//#endregion
