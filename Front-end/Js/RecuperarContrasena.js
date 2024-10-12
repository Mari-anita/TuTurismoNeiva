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
                correoElectronico: emailInput.value  
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

    // Evento para cambiar la contraseña
    // document.addEventListener('DOMContentLoaded', function () {
        // Agrega el evento al botón de cambio de contraseña
        function recuperarContrasena(){
        // document.querySelector('.btn change-password.submit-button').addEventListener('click', function (event) {
            event.preventDefault();  // Evitar que el formulario se envíe de forma predeterminada

            const nuevaContrasena = document.getElementById('nuevaContrasena').value; // Captura el nuevo valor de la contraseña
            const confirmarContrasena = document.getElementById('confirmarContrasena').value; // Captura la confirmación de la contraseña

            // Llama al método para cambiar la contraseña
            recuperarContrasena(nuevaContrasena, confirmarContrasena);
        }

        async function recuperarContrasena(nuevaContrasena, confirmarContrasena) {
            if (nuevaContrasena !== confirmarContrasena) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Las contraseñas no coinciden.'
                });
                return;
            }
            const token = localStorage.getItem('userToken');
            if (!token) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'No se encontró un token de sesión.'
                });
                return;
            }
            const body = { nuevaContrasena, confirmarContrasena };
            try {
                const response = await fetch(urlCambiarContraseña, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': "Bearer " + token
                    },
                    body: JSON.stringify(body)
                });
            
                // Verifica si el tipo de contenido es JSON
                const contentType = response.headers.get("content-type");
                let responseData;
                if (contentType && contentType.includes("application/json")) {
                    responseData = await response.json();
                } else {
                    responseData = { message: await response.text() }; // Asigna el texto de respuesta si no es JSON
                }
            
                if (!response.ok) {
                    throw new Error('Error al cambiar la contraseña: ' + (responseData.message || response.statusText));
                }
            
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: responseData.message
                });
                await redirectAfterPasswordChange(token);
                document.getElementById("modifyForm").reset();
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message
                });
            }
        }            
    
// });


