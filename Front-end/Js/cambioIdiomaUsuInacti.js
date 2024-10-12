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
    document.getElementById('inisio').innerHTML = `<b>${translations[lang].inisio}</b>`;
    document.getElementById('lugar-turistico').innerHTML = `<b>${translations[lang].lugarTuristico}</b>`;
    document.getElementById('nosotros').innerHTML = `<b>${translations[lang].nosotros}</b>`;
    document.getElementById('contacto').innerHTML = `<b>${translations[lang].contacto}</b>`;
    document.getElementById('idioma').innerHTML = `<b>${translations[lang].idioma}</b>`;
    document.getElementById('registro').innerHTML = `<b>${translations[lang].registro}</b>`;
    document.getElementById('tema').innerHTML = `<b>${translations[lang].tema}</b>`;
    document.getElementById('ayuda').innerHTML = `<b>${translations[lang].ayuda}</b>`;

    // Cambiar los textos de la sección de usuario inactivo
    document.getElementById('title-inactive-user').innerText = translations[lang].titleInactiveUser;
    document.getElementById('reactivate-text').innerText = translations[lang].reactivateText;
    document.getElementById('reactivate-button').innerText = translations[lang].reactivateButton;
    document.getElementById('instruction-text').innerText = translations[lang].instructionText;

    // Cambios en el footer
    document.getElementById('contact-title').innerHTML = `<b>${translations[lang].contactanos}</b>`;
    document.getElementById('pqrsfd-link').innerHTML = `<b>Pqrsfd</b>`;
    document.getElementById('terms-link').innerHTML = `<b>${translations[lang].terminos}</b>`;

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



