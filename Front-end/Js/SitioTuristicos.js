// Definición de elementos y creación de funciones para construir el HTML
document.addEventListener('DOMContentLoaded', function() {
    // Crear Navbar
    const navbar = document.createElement('nav');
    navbar.className = "navbar navbar-expand-lg bg-dark";
    navbar.innerHTML = `
      <div class="container-fluid">
        <a class="navbar-brand" href="../index.html">
          <img src="../Img/logo.png" alt="" width="10%">
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-3 mb-lg-0 ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="/Front-end/index.html" style="color: white; font-size: 25px"><b>Inicio</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../html/MisionVision.html" style="color: white; font-size: 25px"><b>Nosotros</b></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contacto" style="color: white; font-size: 25px"><b>Contacto</b></a>
            </li>
            <li class="nav-item dropdown">
              <button class="dropbtn btn" style="color: white; font-size: 25px"><b>Idioma</b></button>
              <div id="flags" class="dropdown-content">
                <div class="flags_item" data-language="es">
                  <img src="/Front-end/Icons/co.svg" alt="Espanol">
                </div>
                <div class="flags_item" data-language="en">
                  <img src="/Front-end/Icons/ingles.svg" alt="ingles">
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `;
    document.body.prepend(navbar);
  
    // Crear contenedor principal
    const container = document.createElement('div');
    container.className = "container-fluid";
    container.style.marginTop = "4%";
    container.innerHTML = `
      <h3 style="font-weight:bold;">Sitios Turísticos</h3>
      <div class="search-container">
        <input type="search" placeholder="Buscar.." id="searchInput">
        <box-icon name='search-alt-2' id="searchIcon"></box-icon>
      </div>
      <div class="card">
        <div class="image-container-wrapper">
          <div class="image-container">
            <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="/Front-end/Img/amantes.jpg" class="d-block imgcarru rounded-3" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/Front-end/Img/bailarinas.jpg" class="d-block imgcarru rounded-3" alt="...">
                </div>
                <div class="carousel-item">
                  <img src="/Front-end/Img/caracoli.jpg" class="d-block imgcarru rounded-3" alt="...">
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                <span aria-hidden="true"><i class="fa-solid fa-chevron-left"></i></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                <span aria-hidden="true"><i class="fa-solid fa-chevron-right"></i></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div>
            <h6>El Mohan</h6>
            <p>Av.circunvalar con calle 10</p>
          </div>
          <button type="button" class="btn" style="background-color: #FFBD59; border-radius:15px;">
            <a href="/Front-end/html/detalleSitio.html" class="BTTLT">Más detalle</a>
          </button>
          <div class="CJULM">
            <i class="fa-regular fa-heart" id="heartIcon"></i>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(container);
  
    // Crear Footer
    const footer = document.createElement('footer');
    footer.className = "py-3";
    footer.innerHTML = `
      <div class="container-fluid" style="background-color: #1c1c1c;">
        <ul class="nav border-bottom mb-3 justify-content-between">
          <li class="nav-item-fo"><a class="nav-link px-2" style="color: white;"><b>Contáctanos</b></a></li>
          <li class="nav-item-fo-I"><a class="nav-link px-1" href="tel:3143049933"><box-icon name='phone' color='#ffffff'></box-icon></a></li>
          <li class="nav-item-fo-I"><a class="nav-link px-1" href="mailto:tuturismoneiva@gmail.com"><box-icon name='envelope' color='#ffffff'></box-icon></a></li>
          <li class="nav-item-fo-I"><a class="nav-link px-1" href="https://wa.me/573143049933"><box-icon name='whatsapp' type='logo' color='#f7f7f7'></box-icon></a></li>
          <li class="nav-item-fo-I"><a class="nav-link px-1" href="https://www.instagram.com/tuturismoneiva"><box-icon class="ig" name='instagram' type='logo' color='#ffffff'></box-icon></a></li>
        </ul>
        <p class="text-center" style="color: white;">©2024 · TuTurismo Neiva</p>
      </div>
    `;
    document.body.appendChild(footer);
  });
  



document.addEventListener("DOMContentLoaded", function () {
    // Seleccionar todos los elementos con la clase "votar"
    var votarDivs = document.querySelectorAll(".votar");

    // Iterar sobre cada elemento con la clase "votar"
    votarDivs.forEach(function (votarDiv) {
        var starsContainer = document.createElement("div");
        starsContainer.className = "stars-container";

        for (var i = 0; i < 5; i++) {
            var starIcon = document.createElement("i");
            starIcon.className = "fa-regular fa-star star";
            starIcon.setAttribute("data-index", i); // Añadir un atributo de datos para el índice de la estrella
            starsContainer.appendChild(starIcon);

            // Agregar evento de clic a cada estrella
            starIcon.addEventListener("click", function () {
                var index = parseInt(this.getAttribute("data-index"));
                fillStars(index, this); // Llamar a la función fillStars() al hacer clic en la estrella
            });
        }

        // Agregar el contenedor de estrellas al elemento actual
        votarDiv.appendChild(starsContainer);
    });
});

function fillStars(index, clickedStar) {
    var stars = clickedStar.parentNode.childNodes; // Obtener todas las estrellas del contenedor

    // Iterar sobre todas las estrellas y rellenarlas según el índice
    for (var i = 0; i < stars.length; i++) {
        if (i <= index) {
            stars[i].classList.add("filled");
        } else {
            stars[i].classList.remove("filled");
        }
    }
}

document.getElementById('heartIcon').addEventListener('click', function () {
    this.classList.toggle('fa-regular');
    this.classList.toggle('fa-solid');
});

//ANIMACION DE LA LUPA


document.getElementById('searchIcon').addEventListener('click', function () {
    document.getElementById('searchInput').focus(); // Pone el foco en el input
    document.getElementById('searchInput').dispatchEvent(new KeyboardEvent('keydown', { 'key': 'Enter' })); // Dispara un evento de tecla Enter
});

document.getElementById('searchInput').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita el comportamiento predeterminado
        alert('Buscar: ' + this.value); // Aquí puedes agregar la lógica para la búsqueda
    }
});



//Funcion para las card de detalle sitio
function consultarDetalleSitio() {
    var urlparams = new URLSearchParams(window.location.search);
    var idSitioMonumento = urlparams.get("idSitioMonumento");
    $.ajax({
        url: url + idSitioMonumento,
        type: "GET",
        success: function (SitioMonumento) {
            document.getElementById("clasificacionSitioMonumento").innerText = SitioMonumento.clasificacionSitioMonumento;
            document.getElementById("nombreSitioMonumento").innerText = SitioMonumento.nombreSitioMonumento; +SitioMonumento.segundoNombre + SitioMonumento.primerApellido + SitioMonumento.segundoApellido;
            document.getElementById("ubicacionSitioMonumento").innerText = SitioMonumento.ubicacionSitioMonumento;
            document.getElementById("calificacionSitioMonumento").innerText = SitioMonumento.calificacionSitioMonumento;
            document.getElementById("direccionSitioMonumento").innerText = SitioMonumento.direccionSitioMonumento;
            document.getElementById("descripcionSitioMonumento").innerText = SitioMonumento.descripcionSitioMonumento;
            document.getElementById("detalladaSitioMonumento").innerText = SitioMonumento.detalladaSitioMonumento;
            document.getElementById("horarioSitioMonumento").innerText = SitioMonumento.horarioSitioMonumento;
            document.getElementById("fechaCreacionSitioMonumento").innerText = SitioMonumento.fechaCreacionSitioMonumento;
            document.getElementById("fechaModificacionSitioMonumento").innerText = SitioMonumento.fechaModificacionSitioMonumento;

        },
        error: function (error) {
            alert("Error al obtener los datos del SitioMonumento: " + error.statusText);
        }
    });
}