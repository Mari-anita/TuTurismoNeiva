
//INICIO DE ANIMACION DE CONTRASEÑA EYES
document.querySelectorAll('.CIP > i').forEach(icon => {
    icon.addEventListener('click', function () {
        const input = this.previousElementSibling;

        if (input.type === 'password') {
            input.type = 'text';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        } else {
            input.type = 'password';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        }

        // Animación de cambio de tipo de input
        input.classList.add('input-animation');
        setTimeout(() => {
            input.classList.remove('input-animation');
        }, 300); // La duración de la animación debe coincidir con la definida en CSS
    });
});
//FIN ANIMACION

// Validación de correo electrónico
function ValidarcorreoElectronico(correoElectronico) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.(com|es|org|net)$/i;
    // La primera validación verifica el formato y el dominio
    if (emailRegex.test(correoElectronico)) {
        // Verifica que haya al menos un punto en el dominio
        var domainPart = correoElectronico.split('@')[1];
        if (domainPart && domainPart.split('.').length > 1) {
            return true;
        }
    }
    return false;
}
// Controlar la entrada de arrobas
document.getElementById("correoElectronico").addEventListener("keydown", function(event) {
    // Verificar si la tecla presionada es arroba
    if (event.key === '@') {
        var correoElectronicoInput = event.target.value;
        var arrobaCount = (correoElectronicoInput.match(/@/g) || []).length;

        // Si ya hay una arroba, prevenir la entrada
        if (arrobaCount >= 1) {
            event.preventDefault();
        }
    }
});

//VALIDACIONES 
document.getElementById("nombreCompleto").addEventListener("keypress", soloLetras);
document.getElementById("correoElectronico").addEventListener("keypress", letrasycorreo);
document.getElementById("contra").addEventListener("keypress", clave)
document.getElementById("coContra").addEventListener("keypress", clave)


// Asignar los manejadores de eventos al campo de entrada
const nombrecapo = document.getElementById("nombreCompleto");
const correovalidar = document.getElementById("correoElectronico");
const nopegueclave = document.getElementById("contra");
const Snopegueclave = document.getElementById("coContra");

nombrecapo.addEventListener("paste", evitarPegar); // Previene el pegado
nombrecapo.addEventListener("drop", evitarArrastrar); // Previene el arrastre y soltar
correovalidar.addEventListener("paste", evitarPegar); // Previene el pegado
correovalidar.addEventListener("drop", evitarArrastrar); // Previene el arrastre y soltar
nopegueclave.addEventListener("paste", evitarPegar); // Previene el pegado
nopegueclave.addEventListener("drop", evitarArrastrar); // Previene el arrastre y soltar
Snopegueclave.addEventListener("paste", evitarPegar); // Previene el pegado
Snopegueclave.addEventListener("drop", evitarArrastrar); // Previene el arrastre y soltar


function evitarPegar(event) {
    event.preventDefault(); // Previene el pegado
}

function evitarArrastrar(event) {
    event.preventDefault(); // Previene el arrastre y soltar
}

//este metodo solo permite letras
const letrasPermitidas = [
    'A', 'Á', 'B', 'C', 'D', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ú', 'Ü', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'ó', 'p', 'q', 'r', 's', 't', 'u', 'ú', 'ü', 'v', 'w', 'x', 'y', 'z', ' '
];
const numerosPermitidos = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ''
];
const signosPermitidos = [
    '.', ',', '@', '_', '-', '', '$', '%', '&'
];

// FORMA CORTA
function soloLetras(event) {
    console.log("Llave presionada: " + event.key);
    console.log("Codigo tecla: " + event.keyCode);

    if (!(letrasPermitidas.includes(event.key))) {
        event.preventDefault();
        return;
    }
}



function letrasycorreo(event) {
    // Obtener el carácter presionado
    const caracter = event.key;

    // Verificar si el carácter está permitido
    if (letrasPermitidas.includes(caracter) || numerosPermitidos.includes(caracter) || signosPermitidos.includes(caracter)) {
        return; // Permitimos la entrada
    } else {
        event.preventDefault(); // Prevenimos la entrada
    }
}

function clave(event) {
    // Obtener el carácter presionado
    const caracter = event.key;

    // Verificar si el carácter está permitido
    if (letrasPermitidas.includes(caracter) || numerosPermitidos.includes(caracter) || signosPermitidos.includes(caracter)) {
        return; // Permitimos la entrada
    } else {
        event.preventDefault(); // Prevenimos la entrada
    }
}


function Iniciar() {
    let correoElectronico = document.getElementById("correoElectronico").value;
    let contra = document.getElementById("contra").value;
 
    let formData = {
        "correoElectronico": correoElectronico,
        "contra": contra
    };
 
    $.ajax({
        url: urlLogin,
        type: "POST",
        data: JSON.stringify(formData),
        contentType: "application/json",
        success: function (result) {
            const token = result.token;
            localStorage.setItem('authTokens', token); // Almacenar el token
            localStorage.setItem('userRol', result.role);
 
            const role = result.role;
 
                            if (role === "Administrador") {
                                window.location.href = "/Front-end/html/CrudListaUsuario.html";
                            } else if (role === "Usuario") {
                                window.location.href = "/Front-end/index.html";
                            } else {
                                Swal.fire({
                                    title: "Error",
                                    text: "Rol desconocido. Contacta con el administrador.",
                                    icon: "error",
                                    confirmButtonText: "Aceptar"
                                });
                            }
        },
        error: function (error) {
            const errorMsg = error.responseJSON ? error.responseJSON.message : "Los datos ingresados son incorrectos.";
            Swal.fire({
                title: "Error de Validación",
                text: "Acceso denegado",
                icon: "error",
                confirmButtonText: "Aceptar"
            });
        }
    });
 }


//REGISTRAR USUARIO

var BRegistrarUsuario = true;

function registroUsuario() {
    var nombreCompleto = document.getElementById("nombreCompleto");
    var correoElectronico = document.getElementById("correoElectronico");
    var contra = document.getElementById("contra");
    var coContra = document.getElementById("coContra");

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

    var metodo = BRegistrarUsuario ? "POST" : "PUT";
    var urlLocal = BRegistrarUsuario ? urlUsuario : urlUsuario + idUsuario;
    var textoimprimir = BRegistrarUsuario ? "Felicidades, Registrado con éxito!" : "Felicidades, Guardado con éxito!";

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
}




//VALIDACIONES
function validarCorreoElectronico(correoElectronico) {
    // Expresión regular para validar el correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.(com|es|org|net)$/;
    if (!emailRegex.test(correoElectronico)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Error, tu correo electronico esta incompleto",
        });
        return false;
    }
    return true;
}

function validarContrasena(contra) {
    let estado = "success";
    let mensaje = "";

    if (contra.length < 8 || contra.length > 25) {
        estado = "error";
        mensaje = "La contraseña debe tener entre 8 y 25 caracteres";
        Swal.fire({
            icon: "error",
            title: "Error",
            text: mensaje,
        });
        return { estado, mensaje };
    }

    if (!/\d/.test(contra)) {
        estado = "error";
        mensaje = "La contraseña debe contener al menos un número";
        Swal.fire({
            icon: "error",
            title: "Error",
            text: mensaje,
        });
        return { estado, mensaje };
    }

    if (!/[A-Z]/.test(contra)) {
        estado = "error";
        mensaje = "La contraseña debe contener al menos una letra mayúscula";
        Swal.fire({
            icon: "error",
            title: "Error",
            text: mensaje,
        });
        return { estado, mensaje };
    }

    if (!/[a-z]/.test(contra)) {
        estado = "error";
        mensaje = "La contraseña debe contener al menos una letra minúscula";
        Swal.fire({
            icon: "error",
            title: "Error",
            text: mensaje,
        });
        return { estado, mensaje };
    }

    const simbolosPermitidos = /[@.$%&]/;
    if (!simbolosPermitidos.test(contra)) {
        estado = "error";
        mensaje = "La contraseña debe contener al menos uno de los siguientes símbolos: @, ., $, %, &";
        Swal.fire({
            icon: "error",
            title: "Error",
            text: mensaje,
        });
        return { estado, mensaje };
    }

    mensaje = "La contraseña es válida";
    return { estado, mensaje };
}


//CAMPOS VALIDACIONES

function ValidarCampos() {
    var nombreCompleto = document.getElementById("nombreCompleto");
    return ValidarnombreCompleto(nombreCompleto);
}

function ValidarnombreCompleto(CuadroNumero) {
    var Valor = CuadroNumero.value;
    var Valido = true;

    if (Valor.length < 3 || Valor.length > 60) {
        Valido = false;
    }
    if (Valido) {
        CuadroNumero.className = " input form-control is-valid";
    } else {
        CuadroNumero.className = "input form-control is-invalid";
    }
    return Valido;
}

function ValidarCamposcorreoElectronico() {
    var correoElectronico = document.getElementById("correoElectronico");
    return ValidarcorreoElectronico(correoElectronico);
}

function ValidarcorreoElectronico(CuadroNumero) {
    var Valor = CuadroNumero.value;
    var Valido = true;

    if (Valor.length < 3 || Valor.length > 100) {
        Valido = false;
    }
    if (Valido) {
        CuadroNumero.className = "input form-control is-valid";
    } else {
        CuadroNumero.className = "input form-control is-invalid";
    }
    return Valido;
}


function ValidarCamposcontra() {
    var contra = document.getElementById("contra");
    return Validarcontra(contra);
}

function Validarcontra(CuadroNumero) {
    var Valor = CuadroNumero.value;
    var Valido = true;

    if (Valor.length < 5 || Valor.length > 36) {
        Valido = false;
    }
    if (Valido) {
        CuadroNumero.className = "input form-select is-valid";
    } else {
        CuadroNumero.className = "input form-select is-invalid";
    }
    return Valido;
}

function ValidarCamposcoContra() {
    var coContra = document.getElementById("coContra");
    return ValidarcoContra(coContra);
}

function ValidarcoContra(CuadroNumero) {
    var Valor = CuadroNumero.value;
    var Valido = true;

    if (Valor.length < 1 || Valor.length > 36) {
        Valido = false;
    }
    if (Valido) {
        CuadroNumero.className = "input form-select is-valid";
    } else {
        CuadroNumero.className = "input form-select is-invalid";
    }
    return Valido;
}



//MOSTRAR LA TABLA DE LOS USUARIOS 

function listarUsuario() {
    $.ajax({
        url: urlUsuario,
        type: "GET",
        success: function (result) {
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i = 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                <td>${result[i]["idUsuario"]}</td>
                <td class="text-center align-middle">${result[i]["nombreCompleto"]}</td>
                <td class="text-center align-middle">${result[i]["correoElectronico"]}</td>
                <td class="text-center align-middle">${result[i]["contra"]}</td>
                <td class="text-center align-middle">${result[i]["coContra"]}</td>
                <td class="text-center align-middle">
                    <i class="btn fas fa-edit Editar"  onclick="BRegistrarUsuario=false;"   data-id="${result[i]["idUsuario"]}"></i>
                    <i class="btn fas fa-trash-alt Eliminar" data-id="${result[i]["idUsuario"]}"></i>
                </td>
            `;
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error) {
            alert("ERROR en la petición" + error);
        }
    });
}

//FILTOS

function Filtros(filtros) {
    if (filtros == '') {
        listarUsuario();
    } else {
        $.ajax({
            url: urlUsuario + "Filtros/" + filtros,
            type: "GET",
            success: function (result) {
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML = "";
                for (var i = 0; i < result.length; i++) {
                    var trRegistro = document.createElement("tr");
                    trRegistro.innerHTML = `
                        <td>${result[i]["idUsuario"]}</td>
                        <td class="text-center align-middle">${result[i]["nombreCompleto"]}</td>
                        <td class="text-center align-middle">${result[i]["correoElectronico"]}</td>
                        <td class="text-center align-middle">${result[i]["contra"]}</td>
                        <td class="text-center align-middle">${result[i]["coContra"]}</td>
                        <td class="text-center align-middle">
                            <i class="btn fas fa-edit Editar"  onclick="BRegistrarUsuario=false;"   data-id="${result[i]["idUsuario"]}"></i>
                            <i class="btn fas fa-trash-alt Eliminar" data-id="${result[i]["idUsuario"]}"></i>
                        </td>
                    
                    `;
                    cuerpoTabla.appendChild(trRegistro);
                }
            },
            error: function (error) {
                alert("ERROR en la petición" + error);
            }
        });
    }

}


//LIMPIAR INPUT

// function Limpiar(){
//     document.getElementById("nombreCompleto").value = "";
//     document.getElementById("nombreCompleto").className = "form-control";
//     document.getElementById("correoElectronico").value = "";
//     document.getElementById("correoElectronico").className = "form-control";
//     document.getElementById("contra").value = "";
//     document.getElementById("contra").className = "form-control";
//     document.getElementById("coContra").value = "";
//     document.getElementById("coContra").className = "form-control";
// }






//FUNCION DE BORRAR Y EDITAR


var idUsuario = "";

$(document).on("click", ".Eliminar", function () {
    var idUsuario = $(this).data("id"); //PENDIENTE CAMBIARLO SINO FUNCIONA
    Swal.fire({
        title: '¿Estás seguro?',
        text: "¿Deseas eliminar este cliente?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar'
    }).then((result) => {
        if (result.isConfirmed) {
            $.ajax({
                url: urlUsuario + "Eliminar/" + idUsuario,
                type: "DELETE",
                success: function (Eliminar) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registro Eliminado",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    listarUsuario();
                },
                error: function (xhr, status, error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se logro eliminar'
                    });
                }
            });
        }
    });
});


$(document).on("click", ".Editar", function () {
    // Limpiar();
    idUsuario = $(this).data("id");
    $.ajax({
        url: urlUsuario + idUsuario,
        type: "GET",
        success: function (Usuario) {
            document.getElementById("nombreCompleto").value = Usuario.nombreCompleto;
            document.getElementById("correoElectronico").value = Usuario.correoElectronico;
            document.getElementById("contra").value = Usuario.contra;
            document.getElementById("coContra").value = Usuario.coContra;
            $('#editUserModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener los datos del usuario: " + error.statusText);
        }
    });
});

function ConsultarUsuario(id) {
    $.ajax({
        url: urlUsuario + id,
        type: "GET",
        success: function (result) {
            document.getElementById("nombreCompleto").value = result["nombreCompleto"];
            document.getElementById("correoElectronico").value = result["correoElectronico"];
            document.getElementById("contra").value = result["contra"];
            document.getElementById("coContra").value = result["coContra"];
        }
    });
}

function ActualizarUsuario() {
    var idUsuario = document.getElementById("idUsuario").value;
    let formData = {
        "nombreCompleto": document.getElementById("nombreCompleto").value,
        "correoElectronico": document.getElementById("correoElectronico").value,
        "contra": document.getElementById("contra").value,
        "coContra": document.getElementById("coContra").value
    };

    if (ValidarCampos) {
        $.ajax({
            url: urlUsuario + idUsuario,
            type: "PUT",
            data: formData,
            success: function (result) {
                Swal.fire({
                    title: "¡Excelente!",
                    text: "Se guardó correctamente",
                    icon: "success"
                });
                listarUsuario();
            },
            error: function (error) {
                Swal.fire({
                    title: "¡Error!",
                    text: "No se guardó",
                    icon: "error"
                });
            }

        });
    } else {
        Swal.fire({
            title: "¡Error!",
            text: "Llene todos los campos correctamente",
            icon: "error"
        });
    }
}


// Función para iniciar sesión y verificar el token del usuario
async function loginUsuario() {
    // Obtener los valores de correo y contraseña desde los campos de entrada
    var correoElectronico = document.getElementById('correoElectronicologin').value;
    var contrasena = document.getElementById('contralogin').value;

    // Validar que los campos no estén vacíos
    if (!correoElectronico || !contrasena) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, complete todos los campos."
        });
        return;
    }

    try {
        // Realizar la petición POST para el login
        const response = await fetch(urlUsuarioPublico + 'login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                correoElectronico: correoElectronico,
                contra: contrasena,
            }),
        });

        // Verificar si la respuesta es exitosa
        if (response.ok) {
            const result = await response.json();
            if (result.token) {
                // Guardar el token en localStorage
                localStorage.setItem('userToken', result.token);
                await obtenerNombreUsuario();
                window.location.href = "/Front-end/index.html";
            } else {
                // Si no se recibe un token, mostrar mensaje de error
                alert("No se recibió un token válido.");
            }
        } else if (response.status === 401) {
            // Si la respuesta es 401 Unauthorized, mostrar mensaje de acceso denegado
            const result = await response.json();
            alert(result.mensaje);
        } else {
            // Manejar otros estados de respuesta
            alert("Error al intentar iniciar sesión. Por favor, inténtelo de nuevo.");
        }
    } catch (error) {
        console.error("Error al intentar iniciar sesión:", error);
        alert("Hubo un error al intentar iniciar sesión. Inténtelo de nuevo.");
    }
}

// Manejador del evento de clic en el botón de login
document.getElementById('loginBtn').addEventListener('click', function () {
    loginUsuario();
});


