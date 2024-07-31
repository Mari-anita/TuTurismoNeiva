
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

//REGISTRAR USUARIO

var url = "http://localhost:8080/api/v1/Usuario/";
var BRegistrarUsuario = true;

function registroUsuario() {
    var nombreCompleto = document.getElementById("nombreCompleto");
    var correoElectronico = document.getElementById("correoElectronico");
    var contra = document.getElementById("contra");
    var coContra = document.getElementById("coContra");

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

    var forData = {
        "nombreCompleto": nombreCompleto.value,
        "correoElectronico": correoElectronico.value,
        "contra": contra.value,
        "coContra": coContra.value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";

    if (BRegistrarUsuario == true) {
        metodo = "POST";
        urlLocal = url;
        textoimprimir = "Felicidades, Registrado con éxito!";
    } else {
        metodo = "PUT";
        urlLocal = url + idUsuario;
        textoimprimir = "Felicidades, Guardado con éxito!";
    }

    verificarcorreoElectronico(correoElectronico.value, function (exists) {
        if (exists && BRegistrarUsuario == true) {
            Swal.fire({
                title: "Error",
                text: "¡El correo electrónico ya está registrado!",
                icon: "error"
            });
        } else {
            if (ValidarCampos()) {
                $.ajax({
                    url: urlLocal,
                    type: metodo,
                    data: forData,
                    success: function (response) {
                        Swal.fire({
                            title: "Éxito",
                            text: textoimprimir,
                            icon: "success"
                        }).then(function () {
                            // Aquí puedes agregar más acciones después del registro exitoso
                            $('#exampleModal').modal('hide');
                            listarUsuario();
                        });
                    },
                    error: function (xhr, status, error) {
                        Swal.fire({
                            title: "Error",
                            text: "Hubo un problema al guardar el usuario",
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
    });
}


//VALIDACIONES

//VERIFICAR EN LA BASE DE DATOS SI EXISTE CORREO

function verificarcorreoElectronico(correoElectronico, callback) {
    $.ajax({
        url: 'var url = "http://localhost:8080/api/v1/Usuario/existsBycorreoElectronico/' + correoElectronico,
        type: 'GET',
        success: function (response) {
            callback(response); // Suponiendo que la respuesta es true o false
        },
        error: function (xhr, status, error) {
            console.error('VERIFICANDO QUE NO TENGAMOS DATOS REPETIDOS', error);
            callback(false); // Suponer que no existe en caso de error
        }
    });
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
        CuadroNumero.className = "input form-control is-valid";
    } else {
        CuadroNumero.className = "input form-control is-invalid";
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

function listarUsuario (){
    $.ajax({
        url: url,
        type: "GET",
        success: function (result){
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = "";

            for (var i=0; i < result.length; i++ ){
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
        error: function(error){
            alert("ERROR en la petición" + error);
        }
    });
}

//FILTOS

function FiltrarnombreCompleto(nombreCompleto){
    if (nombreCompleto == '') {
        listarUsuario();
    } else{
        $.ajax({
            url: "http://localhost:8080/api/v1/Usuario/FiltrarnombreCompleto/" + nombreCompleto,
            type: "GET",
            success: function (result){
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML="";
                for(var i = 0; i < result.length; i++){
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
            error: function (error){
                alert("ERROR en la petición" + error);
            }
        });
    }

}

function FiltrarcorreoElectronico(correoElectronico){
    if (correoElectronico == '') {
        listarUsuario();
    } else{
        $.ajax({
            url: "http://localhost:8080/api/v1/Usuario/FiltrarcorreoElectronico/" + correoElectronico,
            type: "GET",
            success: function (result){
                var cuerpoTabla = document.getElementById("cuerpoTabla");
                cuerpoTabla.innerHTML="";
                for(var i = 0; i < result.length; i++){
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
            error: function (error){
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

$(document).on("click", ".Eliminar", function() {
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
                url: url + "Eliminar/" + idUsuario,
                type:"DELETE",
                success: function(Eliminar){
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registro Eliminado",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    listarUsuario();
                }, 
                error: function(xhr,status, error ){
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


$(document).on("click", ".Editar", function(){
    // Limpiar();
    idUsuario = $(this).data("id");
    $.ajax({
        url: url + idUsuario,
        type: "GET",
        success: function (Usuario){
            document.getElementById("nombreCompleto").value=Usuario.nombreCompleto;
            document.getElementById("correoElectronico").value=Usuario.correoElectronico;
            document.getElementById("contra").value=Usuario.contra;
            document.getElementById("coContra").value=Usuario.coContras;
            $('#exampleModal').modal('show');
        },
        error: function(error){
            alert("Error al obtener los datos del usuario: " + error.statusText);
        }
    });
});

function ConsultarUsuario(id){
    $.ajax({
        url: url + id,
        type:"GET",
        success: function (result){
            document.getElementById("nombreCompleto").value = result["nombreCompleto"];
            document.getElementById("correoElectronico").value = result["correoElectronico"];
            document.getElementById("contra").value = result["contra"];
            document.getElementById("coContra").value = result["coContra"];
        }
    });
}

function ActualizarUsuario(){
    var idUsuario = document.getElementById("idUsuario").value;
    let formData = {
        "nombreCompleto": document.getElementById("nombreCompleto").value,
        "correoElectronico": document.getElementById("correoElectronico").value,
        "contra": document.getElementById("contra").value,
        "coContra": document.getElementById("coContra").value
    };

    if(ValidarCampos){
        $.ajax({
            url: url + idUsuario,
            type: "PUT",
            data: formData,
            success: function (result){
                Swal.fire({
                    title: "¡Excelente!",
                    text: "Se guardó correctamente",
                    icon: "success"
                });
                listarUsuario();
            },
            error: function (error){
                Swal.fire({
                    title: "¡Error!",
                    text: "No se guardó",
                    icon: "error"
                });
            }

        });
    } else{
        Swal.fire({
            title: "¡Error!",
            text: "Llene todos los campos correctamente",
            icon: "error"
        });
    }
}