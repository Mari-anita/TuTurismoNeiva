const translations = {
    es: {
        title: "Registro Pqrsfd",
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
        title: "Register Pqrsfd",
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
    document.querySelector('.LoginPqrsf[type="button"]').innerText = translations[lang].submitButton;


    // Cambios en el footer
    document.getElementById('contact-title').innerHTML = `<b>${translations[lang].contactanos}</b>`;
    document.getElementById('pqrsfd-link').innerHTML = `<b>Pqrsfd</b>`;
    document.getElementById('terms-link').innerHTML = `<b>${translations[lang].terminos}</b>`;
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
