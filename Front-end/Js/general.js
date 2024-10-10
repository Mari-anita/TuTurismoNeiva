// localStorage.getItem('token'); para saber si tiene token


/**
 * Función para obtener el nombre completo del usuario autenticado.
 * Esta función realiza una petición GET a la API para obtener el nombre del usuario
 * basado en el token JWT almacenado en localStorage.
 */

// async function prueba(){
//     let headersList = {


//         "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjanNhcmFzdHlAZ21haWwuY29tIiwiaWF0IjoxNzI4NDE1NzI5LCJleHAiOjE3Mjg0MTkzMjl9.KRdsvIgG4KoSDqbANdU9z2_bA_OrD2y_EgI9jnZgdck"
//        }

//        let response = await fetch("http://10.192.92.92:8082/api/v1/usuario/obtenerNombreUsuario/", { 
//          method: "GET",
//          headers: headersList
//        });

//        let data = await response.text();
//        console.log(data);

// }


// Definimos una función asíncrona llamada obtenerNombreUsuario
// que es responsable de obtener el nombre del usuario autenticado
// desde el servidor y actualizar la interfaz en base a esto.
async function obtenerNombreUsuario() {
    // Obtenemos el token almacenado en localStorage.
    // Este token es clave para autenticar las peticiones del usuario.
    const token = localStorage.getItem('userToken');
    
    // Si no hay token almacenado, significa que el usuario no está autenticado.
    // Mostramos un error en la consola y terminamos la ejecución de la función.
    if (!token) {
        console.error("Token no encontrado. El usuario no está autenticado.");
        return;
    }

    // Intentamos realizar la petición al servidor
    try {
        // Realizamos una petición HTTP GET a la URL del servidor
        // para obtener el nombre del usuario. Añadimos el token en
        // el encabezado 'Authorization' para autenticar la petición.
        const response = await fetch(urlObtenerusuario + "obtenerNombreUsuario/", {
            method: 'GET', // Método de la petición
            headers: {
                'Authorization': 'Bearer ' + token, // Token de autenticación
                'Content-Type': 'application/json' // Tipo de contenido
            }
        });

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            // Si la respuesta fue exitosa (status 200), procesamos los datos.
            // Convertimos la respuesta en JSON.
            const result = await response.json();
            
            // Obtenemos el campo 'nombreCompleto' de los datos recibidos.
            const nombreCompleto = result.nombreCompleto;

            // Si el campo 'nombreCompleto' está vacío o no existe, mostramos un error.
            if (!nombreCompleto) {
                alert("Error al obtener el nombre del usuario.");
                return; // Terminamos la función si no hay un nombre válido.
            }

            // Almacenamos el nombre completo del usuario en localStorage
            // para poder acceder a esta información durante toda la sesión.
            localStorage.setItem('nombreCompleto', nombreCompleto);

            // Actualizamos la interfaz de usuario con el nombre completo.
            // Esto se realiza seleccionando el elemento HTML con el ID 'nombreUsuarioDisplay'
            // y modificando su contenido de texto.
            document.getElementById('nombreUsuarioDisplay').textContent = nombreCompleto;
            
            // Si el usuario está autenticado, mostramos el menú de usuario autenticado
            // y ocultamos el menú para usuarios no autenticados.
            document.getElementById('menuAuthenticate').style.display = 'block';
            document.getElementById('menuNotAuthenticate').style.display = 'none';

        } else if (response.status === 401) {
            // Si la respuesta del servidor es 401 (Unauthorized), significa que el token
            // es inválido o ha expirado. En ese caso, mostramos un mensaje al usuario,
            // limpiamos el almacenamiento local y lo redirigimos a la página de login.
            alert("Token inválido o expirado.");
            localStorage.clear();  // Limpiamos todo el almacenamiento local.
            window.location.href = "/Front-end/html/RegistroUsuario.html"; // Redirigimos al login.
        } else {
            // Si la respuesta del servidor tiene algún otro error (no 200 ni 401),
            // mostramos un mensaje de error al usuario.
            alert("Error al obtener el nombre del usuario.");
        }
    } catch (error) {
        // Si ocurre algún error durante el proceso (problemas de conexión, etc.),
        // lo capturamos aquí y mostramos un mensaje de error en la consola y al usuario.
        console.error("Error al intentar obtener el nombre del usuario:", error.message || error);
        console.error("Detalles del error:", error.stack);  // STACK: NOS DARA UN RASTO DEL ERROR 
        alert("Hubo un error al intentar obtener el nombre del usuario. Inténtelo de nuevo.");
        console.log("Status de la respuesta:", response.status); //RESPONSE.STATUS: PARA VERIFICAR ALGUN ERROR DEL SERVIDOR
        console.log("URL utilizada para la petición:", urlUsuario + 'obtenerNombreUsuario/'); //SI TENEMOS ERROR EN LA URL

    }
}

// Llamamos a la función obtenerNombreUsuario cuando se carga la página,
// de modo que el nombre del usuario se obtenga y se muestre automáticamente
// si el usuario está autenticado.


// Función para verificar el estado de autenticación al cargar la página
function verificacionLogin() {
    const userToken = localStorage.getItem('userToken');
    var nombreCompleto = localStorage.getItem('nombreCompleto');

    // const isAuthenticated = userToken!="";

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

document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function (event) {
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


//CUANDO EL USUARIO YA ESTE AUTORIZADO, Y QUIERA IR A REGISTRO

document.addEventListener("DOMContentLoaded", function () {
    // Obtener el token desde el localStorage
    const token = localStorage.getItem('userToken');
    const nombreCompleto = localStorage.getItem("nombreCompleto");

    // Verificar si el usuario tiene el token y si está en la página de registro
    if (nombreCompleto && token && window.location.href === "http://127.0.0.1:5502/Front-end/html/RegistroUsuario.html") {
        // El usuario está autenticado y está intentando acceder a RegistroUsuario.html, redirigirlo al index.html
        window.location.href = "/Front-end/index.html";
    }
});