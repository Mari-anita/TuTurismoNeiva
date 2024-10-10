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
        titlePassword: "Cambiar Contraseña",
        textParrafo: "Asegúrate de elegir una contraseña robusta para proteger tu cuenta de accesos no autorizados",
        currentPasswordLabel: "Contraseña actual",
        newPasswordLabel: "Contraseña nueva",
        confirmPasswordLabel: "Confirmación contraseña nueva",
        submitButton: "Continuar",
        contactanos: "Contáctanos",
        terminos: "Términos y condiciones",  
        // footerText: "©2024 · TuTurismo Neiva"
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
        titlePassword: "Change Password",
        textParrafo: "Make sure you choose a strong password to protect your account from unauthorized access",
        currentPasswordLabel: "Current password",
        newPasswordLabel: "New Password",
        confirmPasswordLabel: "Confirm New Password",
        submitButton: "Continue",
        contactanos: "Contact Us",
        terminos: "Terms and conditions",
        // footerText: "©2024 · YourTourism Neiva"
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
    document.getElementById('title-password').innerText = translations[lang].titlePassword;
    document.getElementById('text-parrafo').innerText = translations[lang].textParrafo;
    document.getElementById('new-password-label').innerText = translations[lang].newPasswordLabel;
    document.getElementById('Current-password-label').innerText = translations[lang].currentPasswordLabel;
    document.getElementById('confirm-password-label').innerText = translations[lang].confirmPasswordLabel;
    document.querySelector('.submit-button').innerText = translations[lang].submitButton;

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
