const translations = {
    es: {
        title: "Cambiar Contraseña",
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
        newPasswordLabel: "Nueva Contraseña",
        confirmPasswordLabel: "Confirmación contraseña nueva",
        submitButton: "Continuar",
        contactanos: "Contáctanos",
        terminos: "Términos y condiciones",
        // footerText: "©2024 · TuTurismo Neiva"
    },
    en: {
        title: "Change Password",
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
    document.getElementById('inisio').innerHTML = `<b>${translations[lang].inisio}</b>`;
    document.getElementById('lugar-turistico').innerHTML = `<b>${translations[lang].lugarTuristico}</b>`;
    document.getElementById('nosotros').innerHTML = `<b>${translations[lang].nosotros}</b>`;
    document.getElementById('contacto').innerHTML = `<b>${translations[lang].contacto}</b>`;
    document.getElementById('idioma').innerHTML = `<b>${translations[lang].idioma}</b>`;
    document.getElementById('registro').innerHTML = `<b>${translations[lang].registro}</b>`;
    document.getElementById('tema').innerHTML = `<b>${translations[lang].tema}</b>`;
    document.getElementById('ayuda').innerHTML = `<b>${translations[lang].ayuda}</b>`;
    document.getElementById('title-password').innerText = translations[lang].titlePassword;
    document.getElementById('text-parrafo').innerText = translations[lang].textParrafo;
    document.getElementById('new-password-label').innerText = translations[lang].newPasswordLabel;
    document.getElementById('confirm-password-label').innerText = translations[lang].confirmPasswordLabel;
    document.querySelector('.submit-button').innerText = translations[lang].submitButton;

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
