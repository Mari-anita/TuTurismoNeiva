var url = "http://localhost:8080/api/v1/Usuario/";
var BRegistrarUsuario = true;

function RegistroUsuario() {
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
            text: "¡Llene todos los campos correctamente!1",
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

    verificarcorreoElectronico(correoElectronico.value, function(exists) {
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
                    success: function(response) {
                        Swal.fire({
                            title: "Éxito",
                            text: textoimprimir,
                            icon: "success"
                        }).then(function() {
                            // Aquí puedes agregar más acciones después del registro exitoso
                            $('#exampleModal').modal('hide');
                            ListarUsuario();
                        });
                    },
                    error: function(xhr, status, error) {
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