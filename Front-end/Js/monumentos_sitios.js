// Funcionalidad de calificación
const estrellas = document.querySelectorAll('.estrellas i');
const calificacionGuardada = localStorage.getItem('calificacion');

if (calificacionGuardada) {
    marcarEstrellas(calificacionGuardada);
}

estrellas.forEach((estrella, index) => {
    estrella.addEventListener('click', () => {
        limpiarEstrellas();
        marcarEstrellas(index);
        localStorage.setItem('calificacion', index);
    });
});

function limpiarEstrellas() {
    estrellas.forEach(estrella => {
        estrella.classList.remove('marcada');
    });
}

function marcarEstrellas(index) {
    for (let i = 0; i <= index; i++) {
        estrellas[i].classList.add('marcada');
    }
}

// Funcionalidad de añadir a favoritos
const favoritos = document.querySelector('.favoritos');

favoritos.addEventListener('click', () => {
    favoritos.classList.toggle('activo');
});
