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
        pqrsfdTitle: "Ingresa los datos de tu PQRSFD",
        tipoDoc: "Tipo de documento",
        numDoc: "Número de documento",
        nombreApellido: "Nombre y apellido",
        correo: "Correo electrónico",
        telefono: "Teléfono",
        fechaRadicado: "Fecha de radicado",
        tipoPeticion: "Seleccione el motivo de su mensaje",
        mensaje: "Mensaje",
        submitButton: "Registrar PQRSFD"
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
        pqrsfdTitle: "Enter your PQRSFD details",
        tipoDoc: "Document Type",
        numDoc: "Document Number",
        nombreApellido: "Full Name",
        correo: "Email",
        telefono: "Phone",
        fechaRadicado: "Submission Date",
        tipoPeticion: "Select the reason for your message",
        mensaje: "Message",
        submitButton: "Submit PQRSFD"
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

    // Cambios en el formulario
    document.getElementById('pqrsfd-title').innerText = translations[lang].pqrsfdTitle;
    document.getElementById('label-tipoDoc').innerText = translations[lang].tipoDoc;
    document.getElementById('label-numDoc').innerText = translations[lang].numDoc;
    document.getElementById('label-nombreApellido').innerText = translations[lang].nombreApellido;
    document.getElementById('label-correo').innerText = translations[lang].correo;
    document.getElementById('label-telefono').innerText = translations[lang].telefono;
    document.getElementById('label-fechaRadicado').innerText = translations[lang].fechaRadicado;
    document.getElementById('label-tipoPeticion').innerText = translations[lang].tipoPeticion;
    document.getElementById('label-mensaje').innerText = translations[lang].mensaje;
    document.getElementById('submit-button').innerText = translations[lang].submitButton;
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
