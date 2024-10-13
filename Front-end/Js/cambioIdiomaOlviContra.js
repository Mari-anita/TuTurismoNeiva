const translations = {
    es: {
        title: "Olvidar Contraseña",
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
        forgotPasswordTitle: "¿Olvidaste tu contraseña?",
        resetPasswordInstructions: "Por favor ingrese su dirección de correo. Le enviaremos las instrucciones para que pueda restablecer su contraseña.",
        emailLabel: "Ingresa tu correo electrónico",
        recoverPassword: "Recuperar contraseña",
    },
    en: {
        title: "Forgot Password",
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
        forgotPasswordTitle: "Forgot your password?",
        resetPasswordInstructions: "Please enter your email address. We will send you instructions to reset your password.",
        emailLabel: "Enter your email address",
        recoverPassword: "Recover Password",
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

    // Cambios en el formulario de recuperación de contraseña
    document.getElementById('forgot-password-title').innerText = translations[lang].forgotPasswordTitle;
    document.getElementById('reset-password-instructions').innerText = translations[lang].resetPasswordInstructions;
    document.getElementById('email-label').innerText = translations[lang].emailLabel;
    document.getElementById('btn-recover-password').innerText = translations[lang].recoverPassword;


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
