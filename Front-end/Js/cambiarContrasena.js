

async function cambiarContrasena() {
    const antiguaContrasena = document.getElementById('antiguaContrasena').value;
    const nuevaContrasena = document.getElementById('nuevaContrasena').value;
    const confirmarContrasena = document.getElementById('confirmarContrasena').value;

    if (!antiguaContrasena || !nuevaContrasena || !confirmarContrasena) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor, completa todos los campos.',
        });
        return;
    }

    if (nuevaContrasena !== confirmarContrasena) {
        Swal.fire({
            icon: 'warning',
            title: 'Contraseña no coincide',
            text: 'La nueva contraseña y su confirmación no coinciden.',
        });
        return;
    }

    const requestData = {
        antiguaContrasena: antiguaContrasena,
        nuevaContrasena: nuevaContrasena,
        confirmarContrasena: confirmarContrasena
    };

    const token = localStorage.getItem('userToken');

    if (!token) {
        Swal.fire({
            icon: 'warning',
            title: 'Sesión no iniciada',
            text: 'Debe iniciar sesión para cambiar su contraseña.',
        });
        return; 
    }

    try {
        const response = await fetch(urlCambiarContrasena, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer "+token
            },
            body: JSON.stringify(requestData)
        });

        const message = await response.text();

        if (!response.ok) {
            throw new Error(message);
        }

        Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: message,
        });
        cerrarSesion();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: error.message,
        });
    }
}

// Cambia el selector para el botón
document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault();
    cambiarContrasena();
});

function cerrarSesion() {
    localStorage.removeItem('userToken');
    window.location.href = urlRedireccionInicioSesion;
}

function togglePasswordVisibility(inputId, icon) {
    const passwordField = document.getElementById(inputId);
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);

    // Cambiar el icono
    icon.classList.toggle('fa-eye-slash'); // Cambia el icono a "mostrar"
    icon.classList.toggle('fa-eye'); // Cambia el icono a "ocultar"
}

// Asegúrate de que la referencia en el HTML sea 'data-target'
document.querySelectorAll('.toggle-password').forEach(icon => {
    icon.addEventListener('click', function () {
        const inputId = this.getAttribute('data-target');
        togglePasswordVisibility(inputId, this);
    });
});



    
