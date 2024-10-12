const translations = {
    es: {
        title: "Registro Usuario",
        inisio: "Inicio",
        lugarTuristico: "Sitios Turísticos",
        nosotros: "Nosotros",
        contacto: "Contacto",
        idioma: "Idioma",
        registro: "Registrarse",
        tema: "Tema",
        ayuda: "Ayuda",
        crearCuentaTitle: "Crear cuenta",
        iniciarSesionTitle: "Inicia Sesión",
        termsText: "Al hacer clic en 'Registrar', aceptas nuestros términos y condiciones.",
        contactanos: "Contáctanos",
        terminos: "Términos y condiciones",
        // footerText: "©2024 · TuTurismo Neiva"
        nombreCompleto: "Nombre completo",
        correoElectronico: "Correo electrónico",
        contrasena: "Contraseña",
        confirmarContrasena: "Confirmar contraseña",
        registrar: "Registrar",
        iniciarSesion: "Iniciar sesión",
        correoElectronico: "Correo electrónico",
        contrasena: "Contraseña",
        confirmarContrasena: "Confirmar contraseña",
        olvidasteContrasena: "¿Olvidaste tu contraseña?",
        cuentaInactiva: "¿Tu cuenta está inactiva? Actívala",
        registrar: "Registrar",
        iniciarSesion: "Iniciar sesión",
    },
    en: {
        title: "User Registration",
        inisio: "Home",
        lugarTuristico: "Tourist Sites",
        nosotros: "Us",
        contacto: "Contact",
        idioma: "Language",
        registro: "User Registration",
        tema: "Theme",
        ayuda: "Help",
        crearCuentaTitle: "Create Account",
        iniciarSesionTitle: "Log In",
        termsText: "By clicking 'Register', you agree to our terms and conditions.",
        contactanos: "Contact Us",
        terminos: "Terms and conditions",
        // footerText: "©2024 · YourTourism Neiva"
        nombreCompleto: "Full name",
        correoElectronico: "Email",
        contrasena: "Password",
        confirmarContrasena: "Confirm password",
        registrar: "Register",
        iniciarSesion: "Log In",
        correoElectronico: "Email",
        contrasena: "Password",
        confirmarContrasena: "Confirm password",
        olvidasteContrasena: "Forgot your password?",
        cuentaInactiva: "Is your account inactive? Activate it",
        registrar: "Register",
        iniciarSesion: "Log In",
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

    // Crear cuenta 
    document.getElementById('crear-cuenta-title').innerHTML = translations[lang].crearCuentaTitle;
    document.getElementById('iniciar-sesion-title').innerHTML = translations[lang].iniciarSesionTitle;
    document.getElementById('terms-text').innerHTML = translations[lang].termsText;

    // Nuevos elementos a traducir
    document.getElementById('nombreCompleto').setAttribute('placeholder', translations[lang].nombreCompleto);
    document.getElementById('correoElectronico').setAttribute('placeholder', translations[lang].correoElectronico);
    document.getElementById('contra').setAttribute('placeholder', translations[lang].contrasena);
    document.getElementById('coContra').setAttribute('placeholder', translations[lang].confirmarContrasena);
    document.querySelector('.btnn').innerHTML = translations[lang].registrar; // Para el botón "Registrar"
    document.getElementById('loginBtn').innerHTML = translations[lang].iniciarSesion; // Para el botón "Iniciar sesión"

    function changeLanguage(lang) {
        // Otros cambios previos
        document.getElementById('correoElectronico').placeholder = translations[lang].correoElectronico;
        document.getElementById('contra').placeholder = translations[lang].contrasena;
        document.getElementById('coContra').placeholder = translations[lang].confirmarContrasena;
        document.getElementById('correoElectronicologin').placeholder = translations[lang].correoElectronico;
        document.getElementById('contralogin').placeholder = translations[lang].contrasena;

        // Textos adicionales para los enlaces
        document.getElementById('forgot-password-link').innerText = translations[lang].olvidasteContrasena;
        document.getElementById('inactive-account-text').innerText = translations[lang].cuentaInactiva;

        // Botones
        document.getElementById('loginBtn').innerText = translations[lang].iniciarSesion;
        document.querySelector('.container-signup .btnn').innerText = translations[lang].registrar;
    }


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
