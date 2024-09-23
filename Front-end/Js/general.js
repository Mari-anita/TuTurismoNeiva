// localStorage.getItem('token'); para saber si tiene token



/**
 * Funcionalidad para el botón de cerrar sesión
 */

document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
            console.log("Botón de cerrar sesión clickeado."); // Depuración

            // Limpiar el localStorage
            localStorage.removeItem('userToken');
            localStorage.removeItem('nombreCompleto');
            console.log("localStorage limpiado."); // Depuración

            // Mostrar el menú de no autenticados y ocultar el de autenticados
            document.getElementById('menuAuthenticate').classList.add("menuOculto");
            document.getElementById('menuNotAuthenticate').classList.remove("menuOculto");
            console.log("Menú de autenticados ocultado y de no autenticados mostrado."); // Depuración

            // Limpiar el contenido de la etiqueta <b id="nombreUsuarioDisplay">
            const nombreDisplay = document.getElementById('nombreUsuarioDisplay');
            if (nombreDisplay) {
                nombreDisplay.textContent = "";
                console.log("Contenido de 'nombreUsuarioDisplay' limpiado."); // Depuración
            } else {
                console.error("Elemento con ID 'nombreUsuarioDisplay' no encontrado en el DOM.");
            }

            // Redirigir al usuario a la página de login
            window.location.href = "/Front-end/html/RegistroUsuario.html";
        });
    } else {
        console.warn("Elemento con ID 'logoutBtn' no encontrado en el DOM.");
    }
});