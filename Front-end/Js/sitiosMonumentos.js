//MOSTRAR LA TABLA DE LOS USUARIOS 
function listarSitioMonumento() {
    $.ajax({
        url: urlSitioMonumento,
        type: "GET",
        success: function (result) {
            var tablaSitioMonumento = document.getElementById("tablaSitioMonumento");
            tablaSitioMonumento.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                <td>${result[i]["idSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["clasificacionSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["nombreSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["ubicacionSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["calificacionSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["direccionSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["descripcionSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["detalladaSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["horarioSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["fechaCreacionSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["fechaModificacionSitioMonumento"]}</td>
                <td class="text-center align-middle">${result[i]["idAutor"]}</td>
                <td class="text-center align-middle">${result[i]["contactoSitioMonumento"]}</td>
                <td class="text-center align-middle">
                    <i class="btn fas fa-edit Editar"  onclick="BRegistrarSitio=false;"   data-id="${result[i]["idSitioMonumento"]}"></i>
                    <i class="btn fas fa-trash-alt Eliminar" data-id="${result[i]["idSitioMonumento"]}"></i>
                </td>
            `;
            tablaSitioMonumento.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("ERROR en la petición" + error);
        }
    });
}

/*
//REGISTRAR SITIO
var BRegistrarSitio = true;

function registrarSitios() {
    var clasificacionSitioMonumento = document.getElementById("clasificacionSitioMonumento");
    var nombreSitioMonumento = document.getElementById("nombreSitioMonumento");
    var ubicacionSitioMonumento = document.getElementById("ubicacionSitioMonumento");
    var calificacionSitioMonumento = document.getElementById("calificacionSitioMonumento");
    var direccionSitioMonumento = document.getElementById("direccionSitioMonumento");
    var descripcionSitioMonumento = document.getElementById("descripcionSitioMonumento");
    var detalladaSitioMonumento = document.getElementById("detalladaSitioMonumento");
    var horarioSitioMonumento = document.getElementById("horarioSitioMonumento");
    var fechaCreacionSitioMonumento = document.getElementById("fechaCreacionSitioMonumento");
    var fechaModificacionSitioMonumento = document.getElementById("fechaModificacionSitioMonumento");
    var idAutor = document.getElementById("idAutor");
    var contactoSitioMonumento = document.getElementById("contactoSitioMonumento");

    // Validación de campos
    if (!ValidarnombreCompleto(nombreCompleto) ||
        !ValidarcorreoElectronico(correoElectronico) ||
        !Validarcontra(contra) ||
        !ValidarcoContra(coContra)) {
        Swal.fire({
            title: "¡Error!",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
        return;
    }

    // Validación del correo electrónico
    if (!validarCorreoElectronico(correoElectronico.value)) {
        return;
    }

    // Validaciones de la contraseña
    var resultadoValidacion = validarContrasena(contra.value);
    if (resultadoValidacion.estado === "error") {
        return;
    }

    if (contra.value !== coContra.value) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Las contraseñas no coinciden",
        });
        return;
    }

    var formData = {
        "nombreCompleto": nombreCompleto.value,
        "correoElectronico": correoElectronico.value,
        "contra": contra.value,
        "coContra": coContra.value,
    };

    var metodo = BRegistrarSitio ? "POST" : "PUT";
    var urlLocal = BRegistrarSitio ? urlUsuario : urlUsuario + idUsuario;
    var textoimprimir = BRegistrarSitio ? "Felicidades, Registrado con éxito!" : "Felicidades, Guardado con éxito!";

    // Enviar datos al servidor
    if (ValidarCampos()) {
        $.ajax({
            type: metodo,
            url: urlUsuarioPublico + "registro/",
            contentType: "application/json",
            data: JSON.stringify(formData),
            success: function (response) {
                // Si el servidor devuelve un token, lo almacenamos
                if (response.token) {
                    // Guardar el token en localStorage
                    localStorage.setItem('token', response.token);


                    Swal.fire({
                        title: "Éxito",
                        text: textoimprimir,
                        icon: "success"
                    }).then(function () {
                        // Aquí puedes agregar más acciones después del registro exitoso
                        $('#exampleModal').modal('hide');
                        listarUsuario();
                        // Redirigir a una página protegida
                        window.location.href = '/Front-end/html/RegistroUsuario.html';
                    });
                } else {
                    Swal.fire({
                        title: "Error",
                        text: "No se recibió un token del servidor.",
                        icon: "error"
                    });
                }
            },
            error: function (xhr, status, error) {
                Swal.fire({
                    title: "Error",
                    text: "No lograste registrar los datos",
                    icon: "error"
                });
            }
        });
    } else {
        Swal.fire({
            title: "Error",
            text: "¡Llene todos los campos correctamente!",
            icon: "error"
        });
    }
}*/