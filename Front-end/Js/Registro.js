document.addEventListener("DOMContentLoaded", function() {
    const toggleFormLink = document.getElementById("toggleForm");
    const registroForm = document.getElementById("registroForm");
    const inicioSesionForm = document.getElementById("inicioSesionForm");

    toggleFormLink.addEventListener("click", function(event) {
        event.preventDefault();
        if (registroForm.style.display === "block") {
            registroForm.style.display = "none";
            inicioSesionForm.style.display = "block";
            toggleFormLink.textContent = "¿No tienes cuenta? Regístrate";
        } else {
            inicioSesionForm.style.display = "none";
            registroForm.style.display = "block";
            toggleFormLink.textContent = "Ya tengo cuenta";
        }
    });
});
