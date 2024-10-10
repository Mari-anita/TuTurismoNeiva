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
        tituloFormulario: "Ingresa los datos de tu empresa",
        nombreEmpresa: "Nombre de la empresa",
        direccion: "Dirección",
        nit: "NIT",
        nombreRepresentante: "Nombre representante",
        telefono: "Teléfono",
        servicios: "Servicios",
        correoElectronico: "Correo electrónico",
        tipoEmpresa: "Tipo empresa",
        mensajeFormulario: "Llena los campos con la información de tu empresa y envía una solicitud para que puedas subir contenido con nosotros."
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
        tituloFormulario: "Enter your company details",
        nombreEmpresa: "Company Name",
        direccion: "Address",
        nit: "Tax ID",
        nombreRepresentante: "Representative Name",
        telefono: "Phone",
        servicios: "Services",
        correoElectronico: "Email",
        tipoEmpresa: "Company Type",
        mensajeFormulario: "Fill in the fields with your company information and send a request to upload content with us."
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
    document.getElementById('titulo-formulario').innerText = translations[lang].tituloFormulario;
    document.getElementById('label-nombre-empresa').innerText = translations[lang].nombreEmpresa;
    document.getElementById('label-direccion').innerText = translations[lang].direccion;
    document.getElementById('label-nit').innerText = translations[lang].nit;
    document.getElementById('label-nombre-representante').innerText = translations[lang].nombreRepresentante;
    document.getElementById('label-telefono').innerText = translations[lang].telefono;
    document.getElementById('label-servicios').innerText = translations[lang].servicios;
    document.getElementById('label-correo-electronico').innerText = translations[lang].correoElectronico;
    document.getElementById('label-tipo-empresa').innerText = translations[lang].tipoEmpresa;
    document.getElementById('mensaje-formulario').innerText = translations[lang].mensajeFormulario;
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
