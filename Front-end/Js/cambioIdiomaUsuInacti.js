const translations = {
    es: {
        title: "Usuario Inactivo",
        inisio: "Inicio",
        lugarTuristico: "Sitios Turísticos",
        nosotros: "Nosotros",
        contacto: "Contacto",
        idioma: "Idioma",
        registro: "Registrarse",
        tema: "Tema",
        ayuda: "Ayuda",
        titleInactiveUser: "Usuario Inactivo",
        reactivateText: "¿Deseas volver a activar tu cuenta con nosotros?",
        reactivateButton: "Activar usuario",
        instructionText: "Haz click en el botón para volver a activar tu cuenta",
        contactanos: "Contáctanos",
        terminos: "Términos y condiciones",
        // footerText: "©2024 · TuTurismo Neiva",
    },
    en: {
        title: "Inactive User",
        inisio: "Home",
        lugarTuristico: "Tourist Sites",
        nosotros: "Us",
        contacto: "Contact",
        idioma: "Language",
        registro: "User Registration",
        tema: "Theme",
        ayuda: "Help",
        titleInactiveUser: "Inactive User",
        reactivateText: "Do you want to reactivate your account with us?",
        reactivateButton: "Reactivate User",
        instructionText: "Click the button to reactivate your account",
        contactanos: "Contact Us",
        terminos: "Terms and conditions",
        // footerText: "©2024 · YourTourism Neiva",
    }
};

function changeLanguage(lang) {
    // Cambiar los textos del menú
    document.title = translations[lang].title;
    document.getElementById('inisio').innerText = translations[lang].inisio;
    document.getElementById('lugar-turistico').innerText = translations[lang].lugarTuristico;
    document.getElementById('nosotros').innerText = translations[lang].nosotros;
    document.getElementById('contacto').innerText = translations[lang].contacto;
    document.getElementById('idioma').innerText = translations[lang].idioma;
    document.getElementById('registro').innerText = translations[lang].registro;
    document.getElementById('tema').innerText = translations[lang].tema;
    document.getElementById('ayuda').innerText = translations[lang].ayuda;

    // Cambiar los textos de la sección de usuario inactivo
    document.getElementById('title-inactive-user').innerText = translations[lang].titleInactiveUser;
    document.getElementById('reactivate-text').innerText = translations[lang].reactivateText;
    document.getElementById('reactivate-button').innerText = translations[lang].reactivateButton;
    document.getElementById('instruction-text').innerText = translations[lang].instructionText;

    // Cambios en el footer
    document.getElementById('contact-title').innerText = translations[lang].contactanos;
    // document.getElementById('pqrsfd-link').innerText = translations[lang].pqrsfd;
    document.getElementById('terms-link').innerText = translations[lang].terminos;
    // document.getElementById('footer-text').innerText = translations[lang].footerText;
}


// Añadir eventos a las banderas
document.querySelectorAll('.flags_item').forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.getAttribute('data-language');
        changeLanguage(lang);
    });
});

// Cargar español por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('es'); // Cambia 'es' por 'en' si prefieres inglés por defecto
});
