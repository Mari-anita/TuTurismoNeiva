document.addEventListener("DOMContentLoaded", function () {
  // Seleccionar todos los elementos con la clase "votar"
  var votarDivs = document.querySelectorAll(".votar");

  // Iterar sobre cada elemento con la clase "votar"
  votarDivs.forEach(function (votarDiv) {
      var starsContainer = document.createElement("div");
      starsContainer.className = "stars-container";

      for (var i = 0; i < 5; i++) {
          var starIcon = document.createElement("i");
          starIcon.className = "fa-regular fa-star star";
          starIcon.setAttribute("data-index", i); // Añadir un atributo de datos para el índice de la estrella
          starsContainer.appendChild(starIcon);

          // Agregar evento de clic a cada estrella
          starIcon.addEventListener("click", function () {
              var index = parseInt(this.getAttribute("data-index"));
              fillStars(index, this); // Llamar a la función fillStars() al hacer clic en la estrella
          });
      }

      // Agregar el contenedor de estrellas al elemento actual
      votarDiv.appendChild(starsContainer);
  });
});

function fillStars(index, clickedStar) {
  var stars = clickedStar.parentNode.childNodes; // Obtener todas las estrellas del contenedor
  
  // Iterar sobre todas las estrellas y rellenarlas según el índice
  for (var i = 0; i < stars.length; i++) {
      if (i <= index) {
          stars[i].classList.add("filled");
      } else {
          stars[i].classList.remove("filled");
      }
  }
}

document.getElementById('heartIcon').addEventListener('click', function() {
  this.classList.toggle('fa-regular');
  this.classList.toggle('fa-solid');
});

//ANIMACION DE LA LUPA


document.getElementById('searchIcon').addEventListener('click', function() {
  document.getElementById('searchInput').focus(); // Pone el foco en el input
  document.getElementById('searchInput').dispatchEvent(new KeyboardEvent('keydown', {'key': 'Enter'})); // Dispara un evento de tecla Enter
});

document.getElementById('searchInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
      event.preventDefault(); // Evita el comportamiento predeterminado
      alert('Buscar: ' + this.value); // Aquí puedes agregar la lógica para la búsqueda
  }
});

JS