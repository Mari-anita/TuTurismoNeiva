const translations = {
    es: {
        inisio: "<b>Inicio</b>",
        lugarTuristico: "Sitios Turísticos",
        nosotros: "<b>Nosotros</b>",
        contacto: "<b>Contacto</b>",
        idioma: "<b>Idioma</b>",
        registro: "Registrarse",
        tema: "Tema",
        ayuda: "Ayuda",
        crearCuentaTitle: "Crear cuenta",
        iniciarSesionTitle: "Inicia Sesión",
        termsText: "Al hacer clic en 'Registrar', aceptas nuestros términos y condiciones.",
        contactanos:"Contáctanos",
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
        inisio: "<b>Home</b>",
        lugarTuristico: "Tourist Sites",
        nosotros: "<b>Us</b>",
        contacto: "<b>Contact</b>",
        idioma: "<b>Language</b>",
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
    document.title = translations[lang].title;
    document.getElementById('inisio').innerHTML = translations[lang].inisio;
    document.getElementById('lugar-turistico').innerHTML = translations[lang].lugarTuristico;
    document.getElementById('nosotros').innerHTML = translations[lang].nosotros;
    document.getElementById('contacto').innerHTML = translations[lang].contacto;
    document.getElementById('idioma').innerHTML = translations[lang].idioma;
    document.getElementById('registro').innerHTML = translations[lang].registro;
    document.getElementById('tema').innerHTML = translations[lang].tema;
    document.getElementById('ayuda').innerHTML = translations[lang].ayuda;

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
