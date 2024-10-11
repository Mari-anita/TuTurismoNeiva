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

document.addEventListener('DOMContentLoaded', function () {
    // Función para cambiar la contraseña
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
            const response = await fetch(urlCambioContrasena, { 
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer" + token
                },
                body: JSON.stringify(body)
            });
            const responseData = await response.json();
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

    // Manejo del evento de envío del formulario
    const form = document.getElementById('modifyForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita el envío predeterminado del formulario
        const nuevaContrasena = document.getElementById('nuevaContrasena').value;
        const confirmarContrasena = document.getElementById('confirmarContrasena').value;
        recuperarContrasena(nuevaContrasena, confirmarContrasena);
    });
});

