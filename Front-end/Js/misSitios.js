// Funcionalidad para las estrellas
const stars = document.querySelectorAll('.votar i');
stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // Cambia el color de las estrellas al hacer clic
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('star-checked');
            } else {
                s.classList.remove('star-checked');
            }
        });
    });
});

// Funcionalidad para el corazón
const heartIcon = document.getElementById('heartIcon');
heartIcon.addEventListener('click', () => {
    heartIcon.classList.toggle('heart-checked');
});
