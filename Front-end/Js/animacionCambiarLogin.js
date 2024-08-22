

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


//ANIMACION PARA MOSTRAR EL TEXTO EN CONTRASEÑA
document.addEventListener('DOMContentLoaded', function () {
    var popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
    popovers.forEach(function (popover) {
        new bootstrap.Popover(popover, {
            trigger: 'hover'  // Change trigger to 'hover'
        });
    });
});