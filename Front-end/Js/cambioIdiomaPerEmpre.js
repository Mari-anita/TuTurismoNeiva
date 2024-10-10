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
        nombreEmpresa: "Nombre de la empresa",
        nombreRepresentante: "Nombre representante",
        nit: "NIT",
        direccion: "Dirección",
        correoElectronico: "Correo electrónico",
        telefono: "Teléfono",
        tipoEmpresa: "Tipo empresa",
        servicios: "Servicios",
        adjuntarImagen: "Adjuntar imagen",
        cambiarContrasena: "Cambiar contraseña",
        guardarCambios: "Guardar cambios",
        editarFotoPerfil: "Editar foto de perfil",
        eliminarFotoPerfil: "Eliminar foto de perfil"
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
        nombreEmpresa: "Company Name",
        nombreRepresentante: "Representative Name",
        nit: "NIT",
        direccion: "Address",
        correoElectronico: "Email",
        telefono: "Phone",
        tipoEmpresa: "Company Type",
        servicios: "Services",
        adjuntarImagen: "Attach Image",
        cambiarContrasena: "Change Password",
        guardarCambios: "Save Changes",
        editarFotoPerfil: "Edit Profile Picture",
        eliminarFotoPerfil: "Delete Profile Picture"
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

    //Cambios en el perfil empresa 
    document.getElementById('label-nombreEmpresa').innerText = translations[lang].nombreEmpresa;
    document.getElementById('label-nombreRepresentante').innerText = translations[lang].nombreRepresentante;
    document.getElementById('label-nit').innerText = translations[lang].nit;
    document.getElementById('label-direccion').innerText = translations[lang].direccion;
    document.getElementById('label-correoElectronico').innerText = translations[lang].correoElectronico;
    document.getElementById('label-telefono').innerText = translations[lang].telefono;
    document.getElementById('label-tipoEmpresa').innerText = translations[lang].tipoEmpresa;
    document.getElementById('label-servicios').innerText = translations[lang].servicios;
    document.getElementById('label-file-input').innerText = translations[lang].adjuntarImagen;
    document.getElementById('btn-cambiar-contrasena').innerText = translations[lang].cambiarContrasena;
    document.getElementById('btn-save-changes').innerText = translations[lang].guardarCambios;
    document.getElementById('profile-name').innerText = translations[lang].nombreEmpresa;
    document.getElementById('profile-email').innerText = translations[lang].correoElectronico;
    document.getElementById('edit-profile-picture').innerText = translations[lang].editarFotoPerfil;
    document.getElementById('delete-profile-picture').innerText = translations[lang].eliminarFotoPerfil;



    // Cambios en el footer
    document.getElementById('contact-title').innerText = translations[lang].contactanos;
    // document.getElementById('pqrsfd-link').innerText = translations[lang].pqrsfd;
    document.getElementById('terms-link').innerText = translations[lang].terminos;
    // document.getElementById('footer-text').innerText = translations[lang].footerText;
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
