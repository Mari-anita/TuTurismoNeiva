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
obtenerNombreUsuario();
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
        // const response = await fetch(urlusuario + 'obtenerNombreUsuario/', {
            // let response = await fetch("http://10.192.66.45:8082/api/v1/usuario/obtenerNombreUsuario/", { 
            let response = await fetch("http://10.192.92.118:8082/api/v1/usuario/obtenerNombreUsuario/", { 
            method: 'GET', // Método GET para obtener datos
            headers: {
                'Authorization': 'Bearer ' + token, // Incluir el token en la cabecera Authorization
                'Content-Type': 'application/json' // Tipo de contenido
            }
        });
        // let headersList = {
        //     "Accept": "*/*",
        //     "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        //     "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJTYW50aWFnb05hcnZhZXpAaG90bWFpbC5jb20iLCJpYXQiOjE3MjgzMzY1NTIsImV4cCI6MTcyODM0MDE1Mn0.MAvIVP8W1wJJpnYklWD_3w6Nu_9gDpGbAMu1FDWAZXs"
        //    }
           
        //    let response = await fetch("http://10.192.66.48:8082/api/v1/usuario/obtenerNombreUsuario/", { 
        //      method: "GET",
        //      headers: headersList
        //    });
           
           let data = await response.text();
           console.log(data);

        // Verificar si la respuesta fue exitosa
        if (response.ok) {
            const result =  JSON.parse(data); // Convertir la respuesta a JSON
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

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el token desde el localStorage
    const token = localStorage.getItem('userToken');
    
    // Verificar si el usuario tiene el token y si está en la página de registro
    if (token && window.location.href === "http://127.0.0.1:5502/Front-end/html/RegistroUsuario.html") {
        // El usuario está autenticado y está intentando acceder a RegistroUsuario.html, redirigirlo al index.html
        window.location.href = "/Front-end/index.html";
    }
});