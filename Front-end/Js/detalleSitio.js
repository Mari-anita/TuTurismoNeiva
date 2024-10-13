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

// function cargarSitio() {
//     // Se hace una solicitud AJAX para obtener los datos de los sitios turísticos o monumentos
//     $.ajax({
//         url: urlSitioMonumentoConsultar,  // La URL desde donde se obtendrán los datos
//         type: "GET",  // Tipo de solicitud HTTP (en este caso, GET, para obtener datos)
//         success: function(result) {  // Función que se ejecuta si la solicitud es exitosa
//             console.log(result);
//             var contenedorSitios = document.getElementById("contenedorSitios");
//             contenedorSitios.innerHTML = ""; // Limpiar el contenido previo del contenedor para evitar duplicados

//             // Recorre los resultados recibidos
//             result.forEach(function(sitio) {
//                 // Establecer valores predeterminados en caso de que alguna propiedad esté ausente
//                 var imagen1 = sitio.imagen1 ? sitio.imagen1 : "ruta/default.jpg";  // Imagen por defecto si no hay imagen1
//                 var imagen2 = sitio.imagen2 ? `<div class="carousel-item"><img src="${sitio.imagen2}" class="d-block w-100" alt="Imagen del sitio"></div>` : '';
//                 var imagen3 = sitio.imagen3 ? `<div class="carousel-item"><img src="${sitio.imagen3}" class="d-block w-100" alt="Imagen del sitio"></div>` : '';
//                 var nombreSitio = sitio.nombreSitioMonumento ? sitio.nombreSitioMonumento : "Nombre no disponible";  // Nombre por defecto
//                 var descripcion = sitio.descripcion ? sitio.descripcion : "Descripción no disponible";  // Descripción por defecto

//                 // Plantilla HTML para las tarjetas
//                 var cardSitio = `
//                     <div class="card" style="width: 18rem; margin: 15px;">
//                         <div id="carouselSitio-${sitio.id}" class="carousel slide" data-bs-ride="carousel">
//                             <div class="carousel-inner">
//                                 <div class="carousel-item active">
//                                     <img src="${imagen1}" class="d-block w-100" alt="Imagen del sitio">
//                                 </div>
//                                 ${imagen2}
//                                 ${imagen3}
//                             </div>
//                             <button class="carousel-control-prev" type="button" data-bs-target="#carouselSitio-${sitio.id}" data-bs-slide="prev">
//                                 <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                                 <span class="visually-hidden">Previous</span>
//                             </button>
//                             <button class="carousel-control-next" type="button" data-bs-target="#carouselSitio-${sitio.id}" data-bs-slide="next">
//                                 <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                                 <span class="visually-hidden">Next</span>
//                             </button>
//                         </div>

//                         <div class="card-body">
//                             <h5 class="card-title">${nombreSitio}</h5>
//                             <p class="card-text">${descripcion}</p>
//                             <a href="#" class="btn btn-primary">Ver más detalles</a>
//                         </div>
//                     </div>
//                 `;

//                 // Añade la tarjeta al contenedor
//                 contenedorSitios.innerHTML += cardSitio;
//             });
//         },
//         error: function(error) {  // Función en caso de error
//             alert("Error en la petición: " + error);
//         }
//     });
// }

var urlSitioMonumento = "http://192.168.20.79:8082/api/v1/SitioMonumento/";

function cargarSitio() {
    $.ajax({
        url: urlSitioMonumento,
        type: "GET",
        success: function(result) {
            console.log(result);
            var contenedorSitios = document.getElementById("contenedorSitios");
            contenedorSitios.innerHTML = ""; // Limpiar contenido previo

            result.forEach(function(sitio) {
                var imagen = sitio.imagen_base ? `data:image/jpeg;base64,${sitio.imagen_base}` : "ruta/default.jpg"; // Imagen por defecto si no hay imagen

                // Plantilla HTML para las tarjetas
                var cardSitio = `
                    <div class="card" style="width: 15rem; margin: 1% 0% 0% 3%;">
                        <img src="${imagen}" class="card-img-top" alt="Imagen del sitio">
                        <div class="card-body">
                            <h5 class="card-title"><b>${sitio.nombreSitioMonumento}</b></h5>
                            <p class="card-text">${sitio.descripcionSitioMonumento}</p>
                            <a href="#" class="btn btn-color">Ver más detalles</a>
                        </div>
                    </div>
                `;

                contenedorSitios.innerHTML += cardSitio;
            });
        },
        error: function(error) {
            alert("Error en la petición: " + error);
        }
    });
}