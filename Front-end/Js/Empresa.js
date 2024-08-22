function validarCorreoElectronico(correoElectronico){
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

var BRegistrarFormularioEmpresa = true;

function registroFormularioEmpresa(){
    var nombreEmpresa = document.getElementById("nombreEmpresa");
    var correoElectronico = document.getElementById("correoElectronico");
    var tipoEmpresa = document.getElementById("tipoEmpresa");
    var nombreRepresentante = document.getElementById("nombreRepresentante");
    var direccion = document.getElementById("direccion");
    var servicios = document.getElementById("servicios");
    var nit = document.getElementById("nit");
    var telefono = document.getElementById("telefono");

    if (!ValidarnombreCompletoempresa(nombreEmpresa) ||
        !ValidarcorreoElectronico(correoElectronico) ||
        !ValidartipoEmpresa(tipoEmpresa) ||
        !ValidarnombreRepresentante(nombreRepresentante) ||
        !Validardireccion(direccion) || 
        !Validarservicios(servicios) ||
        !Validarnit(nit) ||
        !Validartelefono(telefono)){
        Swal.fire({
            title: "!Error¡",
            text: "!Llene todos los campos correctamente¡",
            icon: "!error¡"
        });
        return;
    }

    if(!validarCorreoElectronico(correoElectronico.value)){
        return;
    }
    
    var formData = {
        "nombreEmpresa": nombreEmpresa.value,
        "correoElectronico": correoElectronico.value,
        "tipoEmpresa": tipoEmpresa.value,
        "nombreRepresentante" : nombreEmpresa.value,
        "direccion" : direccion.value,
        "servicios" : servicios.value,
        "nit" : nit.value,
        "telefono" : telefono.value,
    };

    var metodo = "";
    var urlLocal = "";
    var textoimprimir = "";

    if(BRegistrarFormularioEmpresa == true){
        metodo = "POST";
        urlLocal = urlEmpresa;
        textoimprimir = "Felicidades, formulario enviado con éxito";
    }else{
        metodo ="PUT";
        urlLocal = urlEmpresa + idEmpresa;
        textoimprimir = "Felicidades, guardado con éxito";
    }

    verificarcorreoElectronico(correoElectronico.value, function (exists){
        if (exists && BRegistrarFormularioEmpresa == true){
            Swal.fire({
                title:"Error",
                text:"!El correo electronico ya está registrado¡",
                icon:"error",
            });
        }else{
            if(ValidarCampos()){
                $.ajax({
                    type: metodo,
                    url: urlEmpresa,
                    contentType: "application/json",
                    data: JSON.stringify(formData),
                    success: function (response){
                        Swal.fire({
                            title: "Éxito",
                            text: textoimprimir,
                            icon: "success"
                        }).then(function(){
                            $('#exampleModal').modal('hide');
                            listarEmpresa();
                        });
                    },
                    error: function (xhr,status,error){
                        Swal.fire({
                            title:"Error",
                            text:"No lograste registrar los datos",
                            icon:"error"
                        });
                    }
                    
                });
            }else{
                Swal.fire({
                    title:"Error",
                    text:"!Llene todos los campos correctamente¡",
                    icon: "error"
                });
            }
        }
    });
}

function validarCorreoElectronico(correoElectronico){
    var emailRegex = /^[^\s@]+@[^\s@]+\.(com|es|org|net)$/;
    if (!emailRegex.test(correoElectronico)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Tú correo electrónico parece falso",
        });
        return false;
    }
    return true;
}

function verificarcorreoElectronico(correoElectronico, callback){
    $.ajax({
        url: urlEmpresa + "existsBycorreoElectronico/" + correoElectronico,
        type: 'GET',
        success: function(response){
            callback(response);
        },
        error: function(xhr,status,error){
            console.error('verificar datos repetidos',error);
            callback(false);
        }
    });
}

//Validaciones campos

function ValidarCampos(){
    var nombreEmpresa = document.getElementById("nombreEmpresa");
    return ValidarnombreCompletoempresa(nombreEmpresa);
}

function ValidarnombreCompletoempresa(CuadroNumero){
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

function ValidarCamposcorreoElectronico(){
    var correoElectronico = document.getElementById("correoElectronico");
    return ValidarcorreoElectronico(correoElectronico);
}

function ValidarcorreoElectronico(CuadroNumero){
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

function ValidarCamposTipoEmpresa(){
    var tipoEmpresa = document.getElementById(" tipoEmpresa");
    return ValidartipoEmpresa(tipoEmpresa);
}

function ValidartipoEmpresa(CuadroNumero){
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

function ValidarCamposNombreRepresentante(){
    var nombreRepresentante = document.getElementById("nombreRepresentante");
    return ValidarnombreRepresentante(nombreRepresentante);
}

function ValidarnombreRepresentante(CuadroNumero){
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

function ValidarCamposDireccion(){
    var direccion = document.getElementById("direccion");
    return Validardireccion (direccion);
}

function Validardireccion(CuadroNumero){
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

function ValidarCamposServicios(){
    var servicios = document.getElementById("servicios");
    return Validarservicios(servicios);
}

function Validarservicios(CuadroNumero){
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

function ValidarCamposNit(){
    var nit = document.getElementById("nit");
    return Validarnit(nit);
}

function Validarnit(CuadroNumero){
    var Valor = CuadroNumero.value;
    var Valido = true;

    if (Valor.length < 9 || Valor.length > 9) {
        Valido = false;
    }
    if (Valido) {
        CuadroNumero.className = "input form-control is-valid";
    } else {
        CuadroNumero.className = "input form-control is-invalid";
    }
    return Valido;
}

function ValidarCamposTelefono(){
    var telefono = document.getElementById("telefono");
    return Validartelefono(telefono);
}

function Validartelefono(CuadroNumero){
    var Valor = CuadroNumero.value;
    var Valido = true;

    if (Valor.length < 7 || Valor.length > 15) {
        Valido = false;
    }
    if (Valido) {
        CuadroNumero.className = "input form-control is-valid";
    } else {
        CuadroNumero.className = "input form-control is-invalid";
    }
    return Valido;
}

//tabla empresa

function listarEmpresa(){
    $.ajax({
        url:urlEmpresa,
        type: "GET",
        sucess: function (result){
            var cuerpoTabla = document.getElementById("cuerpoTabla");
            cuerpoTabla.innerHTML = " ";

            for(var i= 0; i < result.length; i++) {
                var trRegistro = document.createElement("tr");
                trRegistro.innerHTML = `
                <td>${result[i]["idEmpresa"]}</td>
                <td class="text-center align-middle">${result[i]["nombreEmpresa"]}</td>
                <td class="text-center align-middle">${result[i]["correoElectronico"]}</td>
                <td class="text-center align-middle">${result[i]["tipoEmpresa"]}</td>
                <td class="text-center align-middle">${result[i]["nombreRepresentante"]}</td>
                <td class="text-center align-middle">${result[i]["direccion"]}</td>
                <td class="text-center align-middle">${result[i]["servicios"]}</td>
                <td class="text-center align-middle">${result[i]["nit"]}</td>
                <td class="text-center align-middle">${result[i]["telefono"]}</td>
                <td class="text-center align-middle">
                    <i class="btn fas fa-edit Editar"  onclick="BRegistrarFormularioEmpresa=false;"   data-id="${result[i]["idEmpresa"]}"></i>
                    <i class="btn fas fa-trash-alt Eliminar" data-id="${result[i]["idEmpresa"]}"></i>
                </td>
            `;
                cuerpoTabla.appendChild(trRegistro);
            }
        },
        error: function (error){
            alert("ERROR en la peticion" + error);

        }
    });
}

var idEmpresa = "";

$(document).on("click", ".Eliminar", function () {
    var idEmpresa = $(this).data("id"); //PENDIENTE CAMBIARLO SINO FUNCIONA
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
                url: urlEmpresa + "Eliminar/" + idEmpresa,
                type: "DELETE",
                success: function (Eliminar) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Registro Eliminado",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    listarEmpresa();
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
    idEmpresa = $(this).data("id");
    $.ajax({
        url: urlEmpresa + idEmpresa,
        type: "GET",
        success: function (Empresa) {
            document.getElementById("nombreEmpresa").value = Empresa.nombreEmpresa;
            document.getElementById("correoElectronico").value = Empresa.correoElectronico;
            document.getElementById("tipoEmpresa").value = Empresa.tipoEmpresa;
            document.getElementById("nombreRepresentante").value = Empresa.nombreRepresentante;
            document.getElementById("direccion").value = Empresa.direccion;
            document.getElementById("servicios").value = Empresa.servicios;
            document.getElementById("nit").value = Empresa.nit;
            document.getElementById("telefono").value = Empresa.telefono;
            
            $('#editUserModal').modal('show');
        },
        error: function (error) {
            alert("Error al obtener el formulario de datos de la empresa: " + error.statusText);
        }
    });
});

function ConsultarEmpresa(id) {
    $.ajax({
        url: urlEmpresa + id,
        type: "GET",
        success: function (result) {
            document.getElementById("nombreEmpresa").value = result["nombreEmpresa"];
            document.getElementById("correoElectronico").value = result["correoElectronico"];
            document.getElementById("tipoEmpresa").value = result["tipoEmpresa"];
            document.getElementById("nombreRepresentante").value = result["nombreRepresentante"];
            document.getElementById("direccion").value = result["direccion"];
            document.getElementById("servicios").value = result["servicios"];
            document.getElementById("nit").value = result["nit"];
            document.getElementById("telefono").value = result["telefono"];
        }
    });
}

function ActualizarEmpresa() {
    var idEmpresa = document.getElementById("idEmpresa").value;
    let formData = {
        "nombreEmpresa": document.getElementById("nombreEmpresa").value,
        "correoElectronico": document.getElementById("correoElectronico").value,
        "tipoEmpresa": document.getElementById("tipoEmpresa").value,
        "nombreRepresentante": document.getElementById("nombreRepresentante").value,
        "direccion": document.getElementById("direccion").value,
        "servicios": document.getElementById("servicios").value,
        "nit": document.getElementById("nit").value,
        "telefono": document.getElementById("telefono").value,

    };

    if (ValidarCampos) {
        $.ajax({
            url: urlEmpresa + idEmpresa,
            type: "PUT",
            data: formData,
            success: function (result) {
                Swal.fire({
                    title: "¡Excelente!",
                    text: "Se guardó correctamente",
                    icon: "success"
                });
                listarEmpresa();
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


