// localStorage.getItem('token'); para saber si tiene token


// function verificacionLogin() {

//     if (localStorage.getItem('userToken') == "" || localStorage.getItem('userToken') == null) {
//         //no se ha autenticado
//         document.getElementById("menuAuthenticate").classList.add("menuOculto");
//         document.getElementById("menuNotAuthenticate").classList.remove("menuOculto");
//     } else {
//         //si se ha autenticado
//         document.getElementById("menuNotAuthenticate").classList.add("menuOculto");
//         document.getElementById("menuAuthenticate").classList.remove("menuOculto");
//     }

// }

// function login() {
//     const loginData = {
//         correoElectronico: document.getElementById("correoElectronico").value,
//         password: document.getElementById("contra").value
//     };

//     fetch(urlUsuarioPublico + 'login', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(loginData)
//     })
//         .then(response => response.json())
//         .then(data => {
//             if (data.token) {
//                 // Guardar el token y el nombre del usuario en localStorage
//                 localStorage.setItem('token', data.token);
                
//                 localStorage.setItem('nombreCompleto', data.nombreCompleto);  // Suponemos que el API devuelve el nombre del usuario
//                 window.location.href = '/Front-end/index.html';  // Redirigir a la página del usuario
//             } else {
//                 alert('Error de autenticación');
//             }
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

// // Obtener el nombre del usuario desde localStorage y actualizar el botón
// document.addEventListener('DOMContentLoaded', function () {
//     const nombreCompleto = localStorage.getItem('nombreCompleto');
//     if (nombreCompleto) {
//         document.getElementById('nombreUsuarioDisplay').textContent = nombreCompleto;
//     }
// });

// function cerrarSesion() {
//     localStorage.removeItem('token');
//     localStorage.removeItem('nombreCompleto');
//     window.location.href = '../Front-end/html/RegistroUsuario.html'; // Redirigir al login
// }