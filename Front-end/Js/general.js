// localStorage.getItem('token'); para saber si tiene token


/**
 * Función para obtener el nombre completo del usuario autenticado.
 * Esta función realiza una petición GET a la API para obtener el nombre del usuario
 * basado en el token JWT almacenado en localStorage.
 */
async function obtenerNombreUsuario() {
    // Obtener el token almacenado en localStorage
    const token = localStorage.getItem('userToken');
    console.log("ENTRO EN EL OBTENERNOMBRE"); // Depuración

    // Verificar si el token existe antes de proceder
    if (!token) {
        console.error("Token no encontrado. El usuario no está autenticado.");
        return; // Detener la función si no hay token
    }

    try {
        // Realizar la petición GET para obtener los datos del usuario
        const response = await fetch(urlUsuarioPublico + 'obtenerNombreUsuario/', {
            method: 'GET', // Método GET para obtener datos
            headers: {
                'Authorization': 'Bearer ' + token, // Incluir el token en la cabecera Authorization
                'Content-Type': 'application/json' // Tipo de contenido
            }
        });

        // Verificar si la respuesta fue exitosa
        if (response.ok) {
            const result = await response.json(); // Convertir la respuesta a JSON
            console.log("Respuesta del servidor para obtenerNombreUsuario:", result); // Depuración
            const nombreCompleto = result.nombreCompleto; // Obtener el nombre completo del authResponse

            console.log("Nombre Completo obtenido:", nombreCompleto); // Depuración

            if (!nombreCompleto) {
                console.error("El campo 'nombreCompleto' está vacío en la respuesta.");
                alert("Error al obtener el nombre del usuario. Por favor, inténtelo de nuevo.");
                return;
            }
            // Guardar el nombre completo en localStorage
            localStorage.setItem('nombreCompleto', nombreCompleto);
            // Actualizar la etiqueta <b id="nombreUsuarioDisplay"> con el nombre completo
            const nombreDisplay = document.getElementById('nombreUsuarioDisplay');
            if (nombreDisplay) {
                nombreDisplay.textContent = nombreCompleto;
            }

            // Mostrar el menú de usuarios autenticados
            const menuAuthenticate = document.getElementById('menuAuthenticate');
            if (menuAuthenticate) {
                menuAuthenticate.style.display = 'block';
            }

            // Ocultar el menú de usuarios no autenticados
            const menuNotAuthenticate = document.getElementById('menuNotAuthenticate');
            if (menuNotAuthenticate) {
                menuNotAuthenticate.style.display = 'none';
            }

        } else if (response.status === 401) {
            // Si la respuesta es 401 Unauthorized, limpiar el almacenamiento y redirigir al login
            alert("Token inválido o expirado. Por favor, inicie sesión nuevamente.");
            localStorage.removeItem('userToken');
            localStorage.removeItem('nombreCompleto');
            window.location.href = "/Front-end/html/RegistroUsuario.html";
        } else {
            // Manejar otros estados de respuesta
            console.error("DIF Error al obtener el nombre del usuario:", response.statusText);
            alert("Error al obtener el nombre del usuario. Por favor, inténtelo de nuevo.");
        }
    } catch (error) {
        console.error("Error al intentar obtener el nombre del usuario:", error);
        alert("Hubo un error al intentar obtener el nombre del usuario. Inténtelo de nuevo.");
    }
}

// Función para verificar el estado de autenticación al cargar la página
function verificacionLogin() {
    const userToken = localStorage.getItem('userToken');
    const nombreCompleto = localStorage.getItem('nombreCompleto');

    const isAuthenticated = userToken && nombreCompleto;

    if (!isAuthenticated) {
        // No se ha autenticado
        document.getElementById("menuAuthenticate").classList.add("menuOculto");
        document.getElementById("menuNotAuthenticate").classList.remove("menuOculto");
    } else {
        // Si se ha autenticado
        document.getElementById("menuNotAuthenticate").classList.add("menuOculto");
        document.getElementById("menuAuthenticate").classList.remove("menuOculto");
    }
    // Actualizar la etiqueta <b id="nombreUsuarioDisplay"> con el nombre completo
    const nombreDisplay = document.getElementById('nombreUsuarioDisplay');
    if (nombreDisplay) {
        nombreDisplay.textContent = nombreCompleto;
    }
}

// Llama a la función de verificación al cargar la página
window.onload = verificacionLogin;




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