const inp = document.getElementById("signin");
const up = document.getElementById("signup");
const PrimerForm = document.getElementById("formulario");
const SegundoForm = document.getElementById("formulario2");
const container = document.querySelector(".container");

inp.addEventListener("click",() =>{
    container.classList.remove("right-panel-active");
});


up.addEventListener("click",() =>{
    container.classList.add("right-panel-active");
});

PrimerForm.addEventListener("submit", (e) => e.preventDefault());
SegundoForm.addEventListener("submit", (e) => e.preventDefault());