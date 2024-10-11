function regitroComent() {
    var coment = document.getElementById("coment");

    if (coment.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "DEJASTE EL CAMPO DE COMENTARIO VACIO"
        });
    } else {
        console.log("HAY TEXTO EN EL COMENTARIO");
    }

    var formData = {
        "coment": coment.value

    };

    // if(ValidarCampos()){
    //     $.ajax({
    //         type: metodo,
    //         url: 
    //     });
    // }

}

function ValidarCampos() {
    var coment = document.getElementById("coment");
    return Validarcoment(coment);
}

function Validarcoment(CuadroNumero) {
    var Valor = CuadroNumero.value;
    var Valido = true;

    if (Valor.length < 3 || Valor.length > 500) {
        Valido = false;
    }
    if (Valido) {
        CuadroNumero.className = " input form-control is-valid";
    } else {
        CuadroNumero.className = "input form-control is-invalid";
    }
    return Valido;
}

function cargarSitio() {
    // Se hace una solicitud AJAX para obtener los datos de los sitios turísticos o monumentos
    $.ajax({
        url: urlSitioMonumento,  // La URL desde donde se obtendrán los datos. Esta variable debe estar configurada con la URL adecuada
        type: "GET",  // Tipo de solicitud HTTP (en este caso, GET, para obtener datos)
        success: function(result) {  // Función que se ejecuta si la solicitud es exitosa
            console.log(result);
            var contenedorSitios = document.getElementById("contenedorSitios");
            contenedorSitios.innerHTML = ""; // Limpiar el contenido previo del contenedor para evitar duplicados

            // Recorre los resultados recibidos, que son un arreglo de sitios
            result.forEach(function(sitio) {
                // Plantilla HTML para generar las tarjetas (cards) que contienen información de cada sitio
                var cardSitio = `
                    <div class="card" style="width: 18rem; margin: 15px;">
                        <!-- Carrusel de imágenes del sitio -->
                        <div id="carouselSitio-${sitio.id}" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <!-- Primera imagen del carrusel, marcada como "active" para que sea la que se muestre por defecto -->
                                <div class="carousel-item active">
                                    <img src="${sitio.imagen1}" class="d-block w-100" alt="Imagen del sitio">
                                </div>
                                <!-- Segunda imagen del carrusel -->
                                <div class="carousel-item">
                                    <img src="${sitio.imagen2}" class="d-block w-100" alt="Imagen del sitio">
                                </div>
                                <!-- Tercera imagen del carrusel -->
                                <div class="carousel-item">
                                    <img src="${sitio.imagen3}" class="d-block w-100" alt="Imagen del sitio">
                                </div>
                            </div>
                            <!-- Botón para retroceder a la imagen anterior del carrusel -->
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselSitio-${sitio.id}" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <!-- Botón para avanzar a la siguiente imagen del carrusel -->
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselSitio-${sitio.id}" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>

                        <!-- Contenido de la tarjeta que incluye el título del sitio, su descripción y un botón -->
                        <div class="card-body">
                            <h5 class="card-title">${sitio.nombre}</h5>  <!-- Nombre del sitio turístico -->
                            <p class="card-text">${sitio.descripcion}</p> <!-- Descripción del sitio -->
                            <a href="#" class="btn btn-primary">Ver más detalles</a>  <!-- Botón que podría llevar a más detalles -->
                        </div>
                    </div>
                `;

                // Añade la tarjeta del sitio al contenedor principal
                contenedorSitios.innerHTML += cardSitio;
            });
        },
        error: function(error) {  // Función que se ejecuta si ocurre un error en la solicitud AJAX
            alert("Error en la petición: " + error);  // Muestra una alerta con el mensaje de error
        }
    });
}
