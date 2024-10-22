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

document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function () {
        const targetId = this.getAttribute('data-target');
        const inputField = document.getElementById(targetId);

        // Cambiar el tipo de input entre 'password' y 'text'
        if (inputField.type === 'password') {
            inputField.type = 'text';
            this.classList.remove('fa-eye-slash');
            this.classList.add('fa-eye');
        } else {
            inputField.type = 'password';
            this.classList.remove('fa-eye');
            this.classList.add('fa-eye-slash');
        }
    });
});

// Evento para el botón de enviar el correo de recuperación de contraseña
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('#btn-recover-password').addEventListener('click', function (event) {
        event.preventDefault();  // Evitar que el formulario se envíe de forma predeterminada

        const emailInput = document.getElementById('email');  // Capturar el input de email

        // Validar que el campo de correo no esté vacío
        if (!emailInput.value) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, introduce tu correo electrónico.'
            });
            return;
        }

        // Realizar la solicitud POST al backend
        fetch(urlRecuperarContrasena, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                correoElectronico: emailInput.value  // Asegúrate de que el nombre del campo sea correcto
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();  // Convertir la respuesta a JSON si la solicitud fue exitosa
                } else {
                    return response.json().then(err => {
                        throw new Error(err.message);  // Lanzar el mensaje de error del servidor
                    });
                }
            })
            .then(data => {
                // Mostrar la alerta de éxito
                Swal.fire({
                    icon: 'success',
                    title: '¡Éxito!',
                    text: data.message || 'Se ha enviado un enlace para recuperar la contraseña'
                }).then(() => {
                    emailInput.value = '';  // Limpiar el campo de correo
                });
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message || 'Error al enviar la solicitud.'
                });
            });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Función para capturar los datos del formulario de recuperación de contraseña
    function capturarDatosRecuperarContrasena() {
        // Obtener el valor de los inputs de contraseña y confirmación
        const nuevaContra = document.getElementById('nuevaContrasena').value;
        const confirmarContra = document.getElementById('confirmarContrasena').value;

        // Extraer el ID de la solicitud desde la URL (parámetro t)
        const urlParams = new URLSearchParams(window.location.search);
        const idSolicitud = urlParams.get('t'); // 't' es el parámetro que contiene el ID de solicitud en la URL

        // Verificamos si el ID de la solicitud fue capturado
        if (!idSolicitud) {
            console.error('ID de solicitud no encontrado en la URL');
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se encontró el ID de solicitud. Verifique el enlace de recuperación.'
            });
            return;
        }

        console.log('nuevaContrasena:', nuevaContra);
        console.log('confirmarContrasena:', confirmarContra);
        console.log('idSolicitud:', idSolicitud);

        // Llama al método para cambiar la contraseña, pasando las contraseñas y el ID de solicitud
        enviarRecuperacionContrasena(nuevaContra, confirmarContra, idSolicitud);
    }

    // Función asincrónica para realizar la solicitud de cambio de contraseña
    async function enviarRecuperacionContrasena(nuevaContrasena, confirmarContrasena, idSolicitud) {
        // Verificar si las contraseñas coinciden
        if (nuevaContrasena !== confirmarContrasena) {
            console.log('Las contraseñas no coinciden');
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Las contraseñas no coinciden.'
            });
            return;
        }

        // Crear el cuerpo de la solicitud con la nueva contraseña y confirmación
        const body = { nuevaContrasena, confirmarContrasena };

        try {
            // Realizar la solicitud HTTP PUT al servidor, incluyendo el ID de solicitud en la URL
            const response = await fetch(`${urlCambioRecuperacionContrasena}${idSolicitud}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);

            // Verificar el tipo de contenido de la respuesta
            const contentType = response.headers.get("content-type");
            let responseData;
            if (contentType && contentType.includes("application/json")) {
                responseData = await response.json();  // Parsear la respuesta como JSON
            } else {
                responseData = { message: await response.text() };  // Si no es JSON, tomar el texto de la respuesta
            }

            console.log('Response data:', responseData);

            // Verificar si la solicitud fue exitosa
            if (!response.ok) {
                throw new Error('Error al cambiar la contraseña: ' + (responseData.message || response.statusText));
            }

            // Mostrar mensaje de éxito
            Swal.fire({
                icon: 'success',
                title: 'Éxito',
                text: responseData.message
            });

            // Limpiar el formulario después de un cambio exitoso
            const form = document.getElementById("modifyForm");
            if (form) {
                form.reset(); // Asegúrate de que el formulario existe antes de intentar resetearlo
            } else {
                console.error('El formulario no se encontró.');
            }
        } catch (error) {
            console.error('Error en el fetch:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.message
            });
        }
    }

    // // Añade el listener al botón de enviar
    const submitButton = document.querySelector(".submit-button");
    if (submitButton) {
        submitButton.addEventListener("click", capturarDatosRecuperarContrasena);
    }
});
