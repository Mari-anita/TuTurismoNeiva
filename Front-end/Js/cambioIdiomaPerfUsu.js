const translations = {
    es: {
        inisio: "Inicio",
        lugarTuristico: "Sitios Turísticos",
        nosotros: "Nosotros",
        contacto: "Contacto",
        idioma: "Idioma",
        registro: "Registrarse",
        tema: "Tema",
        ayuda: "Ayuda",
        contactanos: "Contáctanos",
        terminos: "Términos y condiciones",
        // footerText: "©2024 · TuTurismo Neiva"
        nombreCompleto: "Nombre completo",
        correoElectronico: "Correo electrónico",
        cambiarContrasena: "Cambiar contraseña",
        editarFoto: "Editar foto de perfil",
        eliminarFoto: "Eliminar foto de perfil",
        guardarCambios: "Guardar cambios"
    },
    en: {
        inisio: "Home",
        lugarTuristico: "Tourist Sites",
        nosotros: "Us",
        contacto: "Contact",
        idioma: "Language",
        registro: "User Registration",
        tema: "Theme",
        ayuda: "Help",
        contactanos: "Contact Us",
        terminos: "Terms and conditions",
        // footerText: "©2024 · YourTourism Neiva"
        nombreCompleto: "Full Name",
        correoElectronico: "Email Address",
        cambiarContrasena: "Change Password",
        editarFoto: "Edit Profile Picture",
        eliminarFoto: "Delete Profile Picture",
        guardarCambios: "Save Changes"
    }
};

function changeLanguage(lang) {
    document.title = translations[lang].title;
    document.getElementById('inisio').innerText = translations[lang].inisio;
    document.getElementById('lugar-turistico').innerText = translations[lang].lugarTuristico;
    document.getElementById('nosotros').innerText = translations[lang].nosotros;
    document.getElementById('contacto').innerText = translations[lang].contacto;
    document.getElementById('idioma').innerText = translations[lang].idioma;
    document.getElementById('registro').innerText = translations[lang].registro;
    document.getElementById('tema').innerText = translations[lang].tema;
    document.getElementById('ayuda').innerText = translations[lang].ayuda;

    // Cambios en el footer
    document.getElementById('contact-title').innerText = translations[lang].contactanos;
    // document.getElementById('pqrsfd-link').innerText = translations[lang].pqrsfd;
    document.getElementById('terms-link').innerText = translations[lang].terminos;
    // document.getElementById('footer-text').innerText = translations[lang].footerText;

    //Cambios en el perfil usuario
    document.getElementById('nombre-label').innerText = translations[lang].nombreCompleto;
    document.getElementById('correo-label').innerText = translations[lang].correoElectronico;
    document.getElementById('cambiar-contrasena-link').innerText = translations[lang].cambiarContrasena;
    document.getElementById('editar-foto').innerText = translations[lang].editarFoto;
    document.getElementById('eliminar-foto').innerText = translations[lang].eliminarFoto;
    document.getElementById('guardar-cambios-btn').innerText = translations[lang].guardarCambios;
}

document.querySelectorAll('.flags_item').forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.getAttribute('data-language');
        changeLanguage(lang);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('es'); // Cambia 'es' por 'en' si prefieres inglés por defecto
});
