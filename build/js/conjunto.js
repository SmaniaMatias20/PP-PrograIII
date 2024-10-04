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

// Simulando datos de propiedades
const propiedades = {
  1: {
    titulo: "Casa de lujo",
    imagen: "build/img/anuncio1.jpg",
    descripcion: "Descubre esta impresionante casa de lujo con vistas espectaculares al lago. Esta propiedad destaca por sus acabados de alta calidad, que incluyen mármol en los pisos y madera noble en las puertas. La amplia sala de estar se abre a un espacioso patio, ideal para entretenerse, donde podrás disfrutar de atardeceres inolvidables. La cocina, equipada con electrodomésticos de última generación, es un sueño para cualquier chef. Con cuatro dormitorios, cada uno con su propio baño, esta casa es perfecta para familias que buscan comodidad y elegancia en un solo lugar. Su ubicación privilegiada, rodeada de naturaleza, ofrece la tranquilidad que necesitas.",
    precio: "$3,000,000",
    sanitarios: 3,
    estacionamientos: 5,
    dormitorios: 4,
  },
  2: {
    titulo: "Casa con balcón",
    imagen: "build/img/anuncio2.jpg",
    descripcion: "Vive en esta moderna casa que combina estilo y funcionalidad. Equipado con tecnología inteligente y completamente amueblado, este hogar ofrece un ambiente acogedor desde el momento en que entras. Los grandes ventanales permiten la entrada de luz natural y ofrecen vistas panorámicas del jardín, que está diseñado con paisajismo profesional. La sala de estar, amplia y luminosa, es perfecta para reuniones familiares, mientras que la cocina gourmet, con una isla central y electrodomésticos de acero inoxidable, invita a la creatividad culinaria. Disfruta de la comodidad de tres dormitorios, cada uno con armarios empotrados y acabados de lujo. Esta casa es el espacio perfecto para disfrutar de la comodidad y el lujo en cada rincón.",
    precio: "$2,000,000",
    sanitarios: 3,
    estacionamientos: 3,
    dormitorios: 4,
  },
  3: {
    titulo: "Casa de verano",
    imagen: "build/img/anuncio3.jpg",
    descripcion: "Esta moderna casa, con acceso privado a la playa, es el refugio perfecto para disfrutar de días soleados y la brisa marina. Su diseño elegante combina líneas limpias y espacios abiertos, creando un ambiente relajante. Con tres dormitorios, cada uno decorado con un estilo costero, la casa puede alojar cómodamente a toda la familia. El área al aire libre incluye una terraza espaciosa y una piscina, ideal para refrescarse después de un día en la playa. La cocina, equipada con electrodomésticos de última generación, se conecta a la sala de estar, donde podrás disfrutar de momentos inolvidables con amigos y familiares. Cada rincón de esta casa está diseñado para brindar confort y una conexión con la belleza natural que la rodea.",
    precio: "$4,500,000",
    sanitarios: 2,
    estacionamientos: 1,
    dormitorios: 3,
  },
  4: {
    titulo: "Casa moderna ",
    imagen: "build/img/anuncio4.jpg",
    descripcion: "Sumérgete en la vida urbana con esta moderna casa que cuenta con un diseño contemporáneo y tecnología de domótica. Esta propiedad no solo ofrece un estilo de vida lujoso, sino que también proporciona comodidad con su sistema inteligente que controla la iluminación, la temperatura y la seguridad desde tu smartphone. El amplio jardín es un oasis en medio de la ciudad, ideal para disfrutar de barbacoas y momentos de relajación. Con cinco dormitorios, esta casa es perfecta para familias grandes o aquellos que buscan espacio adicional para oficinas o habitaciones de invitados. La cocina de concepto abierto se integra con la sala de estar, creando un ambiente perfecto para socializar y disfrutar de la vida moderna.",
    precio: "$4,200,000",
    sanitarios: 4,
    estacionamientos: 2,
    dormitorios: 5,
  },
  5: {
    titulo: "Casa minimalista ",
    imagen: "build/img/anuncio5.jpg",
    descripcion: "Disfruta de la tranquilidad en esta propiedad minimalista con vistas al lago. Con un diseño arquitectónico limpio y contemporáneo, esta casa está diseñada para maximizar el espacio y la luz natural. Los acabados en tonos neutros y materiales naturales crean un ambiente sereno que invita a la relajación. La casa cuenta con tres dormitorios, perfectos para descansar después de un día explorando la naturaleza. La cocina está equipada con electrodomésticos de alta gama y una barra desayunadora, ideal para comidas informales. Además, la sala de estar se abre a un patio, donde podrás disfrutar de la paz que brinda la vista al lago y la belleza del entorno natural.",
    precio: "$3,800,000",
    sanitarios: 3,
    estacionamientos: 2,
    dormitorios: 3,
  },
  6: {
    titulo: "Casa con alberca",
    imagen: "build/img/anuncio6.jpg",
    descripcion: "Aprovecha esta excelente oportunidad de adquirir una casa con alberca y acabados de lujo en la ciudad. La piscina es el lugar perfecto para disfrutar de momentos memorables con amigos y familiares en un entorno cómodo y sofisticado. Esta casa cuenta con un diseño abierto que permite que la luz natural fluya por todos los espacios. Con cuatro dormitorios, cada uno con armarios empotrados y ventanales, esta propiedad ofrece tanto comodidad como estilo. La cocina de concepto abierto está conectada a la sala de estar y al comedor, haciendo de este un espacio ideal para la vida cotidiana y el entretenimiento. Además, su ubicación te brinda fácil acceso a los principales servicios y atracciones de la ciudad.",
    precio: "$3,000,000",
    sanitarios: 3,
    estacionamientos: 3,
    dormitorios: 4,
  },
};


function resumirTexto(texto, longitudMaxima) {
  if (texto.length > longitudMaxima) {
    return texto.substring(0, longitudMaxima) + '...'; // Agrega puntos suspensivos
  }
  return texto; // Retorna el texto completo si no supera la longitud máxima
}

function cargarPropiedades() {
  const contenedor = document.querySelector(".contenedor-anuncios"); // Ajusta a tu contenedor específico
  const longitudMaximaDescripcion = 50; // Define la longitud máxima de la descripción

  Object.keys(propiedades).forEach(key => {
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
        <p>${resumirTexto(propiedad.descripcion, longitudMaximaDescripcion)}</p> <!-- Resumir descripción -->
        <p class="precio">${propiedad.precio}</p>
        <ul class="iconos-caracteristicas">
          <li>
            <img class="icono" loading="lazy" src="build/img/icono_wc.svg" alt="icono_wc" />
            <p>${propiedad.sanitarios}</p>
          </li>
          <li>
            <img class="icono" loading="lazy" src="build/img/icono_estacionamiento.svg" alt="icono_estacionamiento" />
            <p>${propiedad.estacionamientos}</p>
          </li>
          <li>
            <img class="icono" loading="lazy" src="build/img/icono_dormitorio.svg" alt="icono_dormitorio" />
            <p>${propiedad.dormitorios}</p>
          </li>
        </ul>
        <a href="propiedad.html?id=${key}" class="boton-amarillo-block">Ver Propiedad</a>
      </div>
    `;
    contenedor.appendChild(anuncio);
  });
}

// Función para cargar la propiedad seleccionada
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
  } else {
    document.body.innerHTML = "<h1 class='text-center'>Propiedad no encontrada</h1>";
  }
}




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
  const isListaPropiedades = document.querySelector(".contenedor-anuncios") && window.location.pathname.includes("anuncios.html");
  const isListaArticulos = document.querySelector("main.contenedor") && !window.location.pathname.includes("articulo.html");

  if (isListaArticulos && (window.location.pathname.includes("blog.html"))) {
    // Si estamos en la página de lista de artículos
    cargarArticulos();
  }

  if (isListaPropiedades && window.location.pathname.includes("anuncios.html")) {
    // Si estamos en la página de lista de propiedades
    cargarPropiedades();
  } else if (window.location.pathname.includes("propiedad.html")) {
    cargarPropiedad();
  }

});
