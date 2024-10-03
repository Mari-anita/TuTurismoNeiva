// document.addEventListener('DOMContentLoaded', function () {
//     const editarFotoBtn = document.getElementById('editarFotoPerfil');
//     const eliminarFotoBtn = document.getElementById('eliminarFotoPerfil');
//     const inputFile = document.createElement('input');
//     inputFile.type = 'file';
//     inputFile.accept = 'image/*';

//     // Función para editar la foto de perfil
//     editarFotoBtn.addEventListener('click', function () {
//         inputFile.click();  // Simula el clic para seleccionar una imagen
//     });

//     // Evento que se activa al seleccionar un archivo
//     inputFile.addEventListener('change', function (event) {
//         const file = event.target.files[0];
//         if (file) {
//             const reader = new FileReader();
//             reader.onload = function (e) {
//                 // Aquí puedes hacer algo con la nueva imagen seleccionada
//                 // Por ejemplo, cambiar la foto de perfil visualmente
//                 const imageUrl = e.target.result;
//                 document.querySelector('.foto box-icon').style.backgroundImage = `url(${imageUrl})`;
//                 alert('Foto de perfil cambiada con éxito');
//             };
//             reader.readAsDataURL(file);
//         }
//     });

//     // Función para eliminar la foto de perfil
//     eliminarFotoBtn.addEventListener('click', function () {
//         const confirmacion = confirm('¿Estás seguro de que deseas eliminar la foto de perfil?');
//         if (confirmacion) {
//             // Aquí puedes eliminar la foto de perfil
//             document.querySelector('.foto box-icon').style.backgroundImage = '';
//             alert('Foto de perfil eliminada');
//         }
//     });
// });
