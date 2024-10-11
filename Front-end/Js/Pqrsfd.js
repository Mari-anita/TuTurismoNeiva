//validaciones de campos
document.getElementById("numDoc").addEventListener("keypress", soloNumeros);
document.getElementById("nombreApellido").addEventListener("keypress", soloLetras);

//este metodo solo permite numeros
const numerosPermitidos = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ''
];

const letrasPermitidas = [
    'A', 'Á', 'B', 'C', 'D', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ú', 'Ü', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'ó', 'p', 'q', 'r', 's', 't', 'u', 'ú', 'ü', 'v', 'w', 'x', 'y', 'z', ' '
];

const signosPermitidos = [
    '.', ',', '@', '_', '-', ''
];


// FORMA CORTA
function soloNumeros(event) {
    console.log("Llave presionada: " + event.key);
    console.log("Codigo tecla: " + event.keyCode);

    if (!(numerosPermitidos.includes(event.key))) {
        event.preventDefault();
        return;
    }
}

function soloLetras(event) {
    console.log("Llave presionada: " + event.key);
    console.log("Codigo tecla: " + event.keyCode);

    if (!(letrasPermitidas.includes(event.key))) {
        event.preventDefault();
        return;
    }
}

// Validación de correo
function validarCorreo(correo) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.(com|es|org|net)$/i;
    if (emailRegex.test(correo)) {
        var domainPart = correo.split('@')[1];
        if (domainPart && domainPart.split('.').length > 1) {
            return true;
        }
    }
    return false;
}
// Controlar la entrada de arrobas
document.getElementById("correo").addEventListener("keydown", function (event) {
    // Verificar si la tecla presionada es arroba
    if (event.key === '@') {
        var correoInput = event.target.value;
        var arrobaCount = (correoInput.match(/@/g) || []).length;

        // Si ya hay una arroba, prevenir la entrada
        if (arrobaCount >= 1) {
            event.preventDefault();
        }
    }
});

// Fecha actual
var date = new Date();
var day = date.getDate(); 
var month = date.getMonth() + 1; 
var year = date.getFullYear(); 

// Formateamos el día y el mes para que siempre tengan dos dígitos
if (day < 10) {
  day = '0' + day;
}
if (month < 10) {
  month = '0' + month;
}

// Asignamos la fecha al campo
document.getElementById("custom-date").value = day + "/" + month + "/" + year;

//Contador de caracteres
document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('descripcionPeticion');
    const charCount = document.getElementById('char-count');

    textarea.addEventListener('input', () => {
        const maxLength = 5000;
        const remaining = maxLength - textarea.value.length;
        charCount.textContent = `Máximo ${remaining} caracteres restantes`;
        charCount.style.color = remaining < 0 ? 'red' : '#ffffff';
    });

    const form = document.getElementById('uploadForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            const fileInput = document.getElementById('pdfFile');
            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                const maxSize = 5 * 1024 * 1024; // 5 MB
                if (file.size > maxSize) {
                    event.preventDefault();
                    alert('El archivo debe ser menor de 5 MB.');
                }
            }
        });
    }
});


function listarPqrsfd() {
    //METODO PARA LISTAR LOS CLIENTES
    //SE CREA LA PETICION AJAX

    var urlLocal = url;
    var filtro = document.getElementById("texto").value
    if (filtro != "")
        urlLocal += "busqueda/" + filtro;

    $.ajax({
        url: urlLocal,
        type: "GET",
        success: function (result) {
            //success: funcion que se ejecuta
            //cuando la peticion tiene exito
            console.log(result);

            var cuerpoTablaPqrsfd = document.getElementById("cuerpoTablaPqrsfd");
            //Se limpia el cuepro de la tabla
            cuerpoTablaPqrsfd.innerHTML = "";
            //se hace un ciclo que recorra l arreglo con los datos
            for (var i = 0; i < result.length; i++) {
                //UNA ETIQUETA tr por cada registro
                var trResgistro = document.createElement("tr");

                var celdaIdPqrsfd = document.createElement("td");
                let celdaTipoDoc = document.createElement("td")
                let celdaNumeroDoc = document.createElement("td")
                let celdaNombreApe = document.createElement("td")
                let celdaCorreo = document.createElement("td")
                let celdaFecha = document.createElement("td")
                let celdaMotivoMens = document.createElement("td")
                let celdaMensaje = document.createElement("td")

                celdaIdPqrsfd.innerText = result[i]["idPeticion"];
                celdaTipoDoc.innerText = result[i]["tipoDoc"];
                celdaNumeroDoc.innerText = result[i]["numDoc"];
                celdaNombreApe.innerText = result[i]["nombreApellido"];
                celdaCorreo.innerText = result[i]["correo"];
                celdaFecha.innerText = result[i]["fechaRadicado"];
                celdaMotivoMens.innerText = result[i]["tipoPeticion"];
                celdaMensaje.innerText = result[i]["descripcionPeticion"];

                trResgistro.appendChild(celdaIdPqrsfd);
                trResgistro.appendChild(celdaTipoDoc);
                trResgistro.appendChild(celdaNumeroDoc);
                trResgistro.appendChild(celdaNombreApe);
                trResgistro.appendChild(celdaCorreo);
                trResgistro.appendChild(celdaFecha);
                trResgistro.appendChild(celdaMotivoMens);
                trResgistro.appendChild(celdaMensaje);

                trResgistro.appendChild(celdaOpcion)
                cuerpoTablaPqrsfd.appendChild(trResgistro);


                //creamos un td por cada campo de resgistro

            }
        },
        error: function (error) {
            /*
            ERROR: funcion que se ejecuta cuando la peticion tiene un error
            */
            alert("Error en la petición " + error);
        }
    });
}

// Asegúrate de definir registrarPqrsfd antes
var registrarPqrsfd = true;

function registrarPqr() {

    let formData = {

        "tipoDoc": document.getElementById("tipoDoc").value,
        "numDoc": document.getElementById("numDoc").value,
        "nombreApellido": document.getElementById("nombreApellido").value,
        "correo": document.getElementById("correo").value,
        "tipoPeticion": document.getElementById("tipoPeticion").value,
        "descripcionPeticion": document.getElementById("descripcionPeticion").value

    };

    // Define el método que vas a usar para la petición
    var metodo = "POST";

    if (validarCampos()) {
        $.ajax({
            type: metodo,
            url: urlPqrsfd,
            // header:{   //cuando requiere autenticación se debe envíar token
            //     "Authorization": "Bearer "+token
            // },
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (result) {

                // // Si el servidor devuelve un token, lo almacenamos
                // if (response.token) {
                //     // Guardar el token en localStorage
                //     // localStorage.setItem('token', response.token);


                //     Swal.fire({
                //         title: "Éxito",
                //         text: textoimprimir,
                //         icon: "success"
                //     }).then(function () {
                //         // Aquí puedes agregar más acciones después del registro exitoso
                //         $('#exampleModal').modal('hide');
                //         listarPqrsfd();
                //          // Limpiar el formulario después de un registro exitoso
                //         limpiarFormulario();
                //         // Redirigir a una página protegida
                //         window.location.href = '/Front-end/html/HistorialPQRSD.html';
                //     });
                // } else {
                //     Swal.fire({
                //         title: "Error",
                //         text: "No se recibió un token del servidor.",
                //         icon: "error"
                //     });
                // }
                Swal.fire({
                    title: "¡Excelente!",
                    text: "Se guardó correctamente, a su correo le llegará el número de radicado",
                    icon: "success"
                });limpiarFormulario()
            },
        })
    } else {
        Swal.fire({
            title: "¡Error!",
            text: "Llene todos los campos correctamente",
            icon: "error"
        });
    }
}

function limpiarFormulario() {
    // Reiniciar el campo de la fecha
    const fechaCampo = document.getElementById("custom-date");
    const fechaValor = fechaCampo.value; // Guardar el valor actual de la fecha

    // Limpiar todos los campos del formulario excepto la fecha
    document.getElementById("pqrsfdForm").reset();

    // Establecer nuevamente el valor de la fecha
    fechaCampo.value = fechaValor;

    // Reiniciar clases de validación
    const inputs = document.querySelectorAll("#pqrsfdForm .form-control");
    inputs.forEach(input => {
        if (input.id !== "custom-date") { // Excluir el campo de la fecha
            input.className = "form-control"; // Reiniciar clase a la predeterminada
        }
    });
}

/*
function consultarPqr() {
    var filtro = document.getElementById("texto").value.trim(); // Eliminar espacios en blanco
    if (!filtro) {
        alert("Por favor, ingresa un número de radicado.");
        return; // Salir si el campo está vacío
    }

    var urlLocal = urlPqrsfd + "busqueda/" + filtro;

    $.ajax({
        url: urlLocal,
        type: "GET",
        success: function(result) {
            var cuerpoTablaPqrsfd = document.getElementById("cuerpoTablaPqrsfd");
            cuerpoTablaPqrsfd.innerHTML = ""; // Limpiar la tabla antes de llenar

            // Verificar si hay resultados
            if (result.length === 0) {
                alert("No se encontraron resultados.");
                return;
            }

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");

                var celdaIdPqrsfd = document.createElement("td");
                celdaIdPqrsfd.innerText = result[i]["idPeticion"];

                var celdaIdUsuario = document.createElement("td");
                celdaIdUsuario.innerText = result[i]["idUsuario"];

                var celdaIdContesta = document.createElement("td");
                celdaIdContesta.innerText = result[i]["idContesta"];

                var celdaFechaRadicado = document.createElement("td");
                celdaFechaRadicado.innerText = result[i]["fechaRadicado"];

                var celdaCode = document.createElement("td");
                celdaCode.innerText = result[i]["code"];

                var celdaEstado = document.createElement("td");
                celdaEstado.innerText = result[i]["estado"];

                var celdaAcciones = document.createElement("td");
                // Aquí puedes añadir botones o enlaces para acciones adicionales

                trRegistro.appendChild(celdaIdPqrsfd);
                trRegistro.appendChild(celdaIdUsuario);
                trRegistro.appendChild(celdaIdContesta);
                trRegistro.appendChild(celdaFechaRadicado);
                trRegistro.appendChild(celdaCode);
                trRegistro.appendChild(celdaEstado);
                trRegistro.appendChild(celdaAcciones);

                cuerpoTablaPqrsfd.appendChild(trRegistro);
            }
        },
        error: function(error) {
            alert("Error en la petición: " + error.responseText);
        }
    });
}*/



//validación número de documento
function validarCampos() {
    var numDoc = document.getElementById("numDoc");
    var nombreApellido = document.getElementById("nombreApellido");
    var descripcionPeticion = document.getElementById("descripcionPeticion");

    return validarNumDoc(numDoc) && validarNombreApe(nombreApellido) &&
        validarDescripMens(descripcionPeticion);
}
function validarNumDoc(cuadroNumDocu) {
    var valor = cuadroNumDocu.value;
    var valido = true;
    if (valor.length < 5 || valor.length > 11) {
        valido = false
    }

    if (valido) {
        cuadroNumDocu.className = "form-control is-valid";
    } else {
        cuadroNumDocu.className = "form-control is-invalid";
    }
    return valido;
}

//validación segundo nombre
function validarNombreApe(cuadroNombreApe) {
    var valor = cuadroNombreApe.value;
    var valido = true;
    if (valor.length < 3 || valor.length > 21) {
        valido = false
    }

    if (valido) {
        cuadroNombreApe.className = "form-control is-valid";
    } else {
        cuadroNombreApe.className = "form-control is-invalid";
    }
    return valido;
}

//validación descripcion mensaje
function validarDescripMens(cuadroDescripMens) {
    var valor = cuadroDescripMens.value;
    var valido = true;
    if (valor.length < 7 || valor.length > 256) {
        valido = false
    }

    if (valido) {
        cuadroDescripMens.className = "form-control is-valid";
    } else {
        cuadroDescripMens.className = "form-control is-invalid";
    }
    return valido;
}


