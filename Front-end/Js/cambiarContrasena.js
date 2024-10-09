document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los iconos de toggle-password
    const togglePasswordIcons = document.querySelectorAll('.toggle-password');

    // Itera sobre cada icono y agrega un evento de clic
    togglePasswordIcons.forEach(icon => {
        icon.addEventListener('click', function() {
            // Obtiene el ID del campo de contraseña objetivo
            const targetId = icon.getAttribute('data-target');
            const passwordField = document.getElementById(targetId);

            // Alterna la visibilidad de la contraseña
            if (passwordField.type === 'password') {
                passwordField.type = 'text';
                icon.classList.remove('fa-eye-slash'); // Cambia el icono a "ojo abierto"
                icon.classList.add('fa-eye'); // Cambia el icono a "ojo"
            } else {
                passwordField.type = 'password';
                icon.classList.remove('fa-eye'); // Cambia el icono a "ojo cerrado"
                icon.classList.add('fa-eye-slash'); // Cambia el icono a "ojo cerrado"
            }
        });
    });
});




    
