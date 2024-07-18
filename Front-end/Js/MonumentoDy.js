// document.addEventListener("DOMContentLoaded", function () {
//     // Seleccionar todos los elementos con la clase "votar"
//     var votarDivs = document.querySelectorAll(".votar");

//     // Iterar sobre cada elemento con la clase "votar"
//     votarDivs.forEach(function (votarDiv) {
//         var starsContainer = document.createElement("div");
//         starsContainer.className = "stars-container";

//         for (var i = 0; i < 5; i++) {
//             var starIcon = document.createElement("i");
//             starIcon.className = "fa-regular fa-star star";
//             starIcon.setAttribute("data-index", i); // Añadir un atributo de datos para el índice de la estrella
//             starsContainer.appendChild(starIcon);

//             // Agregar evento de clic a cada estrella
//             starIcon.addEventListener("click", function () {
//                 var index = parseInt(this.getAttribute("data-index"));
//                 fillStars(index, this); // Llamar a la función fillStars() al hacer clic en la estrella
//             });
//         }

//         // Agregar el contenedor de estrellas al elemento actual
//         votarDiv.appendChild(starsContainer);
//     });
// });

// function fillStars(index, clickedStar) {
//     var stars = clickedStar.parentNode.childNodes; // Obtener todas las estrellas del contenedor
    
//     // Iterar sobre todas las estrellas y rellenarlas según el índice
//     for (var i = 0; i < stars.length; i++) {
//         if (i <= index) {
//             stars[i].classList.add("filled");
//         } else {
//             stars[i].classList.remove("filled");
//         }
//     }
// }

//ANIMACION DEL BOTON QUE HACE LA ACCIÓN DE CAMBIAR
const InicioSesion = document.getElementById("signin");
const Registro = document.getElementById("signup");
const PrimerForm = document.getElementById("formulario");
const SegundoForm = document.getElementById("formulario2");
const container = document.querySelector(".container");

InicioSesion.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});


Registro.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

PrimerForm.addEventListener("submit", (e) => e.preventDefault());
SegundoForm.addEventListener("submit", (e) => e.preventDefault());

//FIN 