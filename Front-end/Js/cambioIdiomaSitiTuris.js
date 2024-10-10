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
        footerText: "©2024 · TuTurismo Neiva",
        siteTitle: "El Mohan", // Título del sitio
        siteAddress: "Av.circunvalar con calle 10", // Dirección del sitio
        moreDetails: "Más detalle" // Texto del botón
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
        footerText: "©2024 · YourTourism Neiva",
        siteTitle: "El Mohan", // Título del sitio
        siteAddress: "Circumvalar Avenue with Street 10", // Dirección del sitio
        moreDetails: "More Details", // Texto del botón
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
    document.getElementById('pqrsfd-link').innerText = translations[lang].pqrsfd;
    document.getElementById('terms-link').innerText = translations[lang].terminos;
    // document.getElementById('footer-text').innerText = translations[lang].footerText;

    // Cambios en la sección de Sitios Turísticos
    document.getElementById('lugar-turistico-title').innerText = translations[lang].lugarTuristico;
    document.getElementById('site-title').innerText = translations[lang].siteTitle;
    document.getElementById('site-address').innerText = translations[lang].siteAddress;
    document.getElementById('more-details-button').innerText = translations[lang].moreDetails;
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
