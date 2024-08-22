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

function resgistroFormularioEmpresa(){
    var nombreEmpresa = document.getElementById("nombreEmpresa");
    var correoElectronico = document.getElementById("correoElectronico");
    var tipoEmpresa = document.getElementById("tipoEmpresa");
    var nombreRepresentante = document.getElementById("nombreRepresentante");
    var direccion = document.getElementById("direccion");
    var servicios = document.getElementById("servicios");
    var nit = document.getElementById("nit");
    var telefono = document.getElementById("telefono");

    if (!ValidarnombreCompletompresa(nombreEmpresa) ||
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


