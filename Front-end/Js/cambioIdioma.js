document.addEventListener("DOMContentLoaded", () => {
    const flagsElement = document.getElementById("flags");
    const textsToChange = document.querySelectorAll("[data-section]");

    const changeLanguage = async (language) => {
        try {
            const response = await fetch(`./language/${language}.json`);
            if (!response.ok) {
                throw new Error(`Network response was not ok: ${response.statusText}`);
            }
            const texts = await response.json();

            for (const text of textsToChange) {
                const section = text.dataset.section;
                const value = text.dataset.value;

                if (texts[section] && texts[section][value]) {
                    text.innerHTML = texts[section][value];
                }
            }
        } catch (error) {
            console.error('Error fetching language data:', error);
        }
    };

    if (flagsElement) {
        flagsElement.addEventListener("click", (e) => {
            const language = e.target.closest('[data-language]').dataset.language;
            if (language) {
                changeLanguage(language);
            } else {
                console.error('data-language attribute not found.');
            }
        });
    } else {
        console.error("El elemento con id 'flags' no se encontró.");
    }
});

//Cambio idioma Usuraio Inactivo
const translations = {
    es: {
        title: "Cambiar Contraseña",
        title: "Usuario Inactivo",
        inisio: "Inicio",
        lugarTuristico: "Sitios Turísticos",
        nosotros: "Nosotros",
        contacto: "Contacto",
        idioma: "Idioma",
        registro: "Registrarse",
        tema: "Tema",
        ayuda: "Ayuda",
        titleInactiveUser: "Usuario Inactivo",
        reactivateText: "¿Deseas volver a activar tu cuenta con nosotros?",
        reactivateButton: "Activar usuario",
        instructionText: "Haz click en el botón para volver a activar tu cuenta",
        contactanos: "Contáctanos",
        terminos: "Términos y condiciones",
        // footerText: "©2024 · TuTurismo Neiva",

    },
    en: {
        title: "Inactive User",
        inisio: "Home",
        lugarTuristico: "Tourist Sites",
        nosotros: "Us",
        contacto: "Contact",
        idioma: "Language",
        registro: "User Registration",
        tema: "Theme",
        ayuda: "Help",
        titleInactiveUser: "Inactive User",
        reactivateText: "Do you want to reactivate your account with us?",
        reactivateButton: "Reactivate User",
        instructionText: "Click the button to reactivate your account",
        contactanos: "Contact Us",
        terminos: "Terms and conditions",
        // footerText: "©2024 · YourTourism Neiva",
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

    // Cambiar los textos de la sección de usuario inactivo
    document.getElementById('title-inactive-user').innerText = translations[lang].titleInactiveUser;
    document.getElementById('reactivate-text').innerText = translations[lang].reactivateText;
    document.getElementById('reactivate-button').innerText = translations[lang].reactivateButton;
    document.getElementById('instruction-text').innerText = translations[lang].instructionText;

    // Cambios en el footer
    document.getElementById('contact-title').innerHTML = `<b>${translations[lang].contactanos}</b>`;
    document.getElementById('pqrsfd-link').innerHTML = `<b>Pqrsfd</b>`;
    document.getElementById('terms-link').innerHTML = `<b>${translations[lang].terminos}</b>`;

}


// Añadir eventos a las banderas
document.querySelectorAll('.flags_item').forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.getAttribute('data-language');
        changeLanguage(lang);
    });
});

// Cargar español por defecto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage('es'); // Cambia 'es' por 'en' si prefieres inglés por defecto
});








// // Idioma Sitio Turistico
// const translations = {
//     es: {
//         title: "TuTurismoNeiva/SitiosTuristicos",
//         sitiosTuristicosTitle: "Sitios Turísticos",
//         sitio1: "Museo Amantes de Sumpa",
//         sitioDescripcion1: "Conocido por su famosa tumba de los Amantes de Sumpa.",
//         sitio2: "Catedral de Neiva",
//         sitioDescripcion2: "El principal templo católico de Neiva, símbolo arquitectónico.",
//         inisio: "Inicio",
//         nosotros: "Nosotros",
//         contacto: "Contacto",
//         idioma: "Idioma",
//         registro: "Registrarse",
//         tema: "Tema",
//         ayuda: "Ayuda"
//     },
//     en: {
//         title: "TuTurismoNeiva/TouristSites",
//         sitiosTuristicosTitle: "Tourist Sites",
//         sitio1: "Sumpa Lovers Museum",
//         sitioDescripcion1: "Known for its famous Lovers of Sumpa tomb.",
//         sitio2: "Neiva Cathedral",
//         sitioDescripcion2: "The main Catholic temple in Neiva, an architectural symbol.",
//         inisio: "Home",
//         nosotros: "About Us",
//         contacto: "Contact",
//         idioma: "Language",
//         registro: "Register",
//         tema: "Theme",
//         ayuda: "Help"
//     }
// };

// const flags = document.querySelectorAll('.flags_item');

// flags.forEach(flag => {
//     flag.addEventListener('click', () => {
//         const language = flag.getAttribute('data-language');
//         changeLanguage(language);
//     });
// });

// function changeLanguage(language) {
//     document.querySelector('#title').textContent = translations[language].title;
//     document.querySelector('#sitiosTuristicosTitle').textContent = translations[language].sitiosTuristicosTitle;
//     document.querySelector('#sitio1').textContent = translations[language].sitio1;
//     document.querySelector('#sitioDescripcion1').textContent = translations[language].sitioDescripcion1;
//     document.querySelector('#sitio2').textContent = translations[language].sitio2;
//     document.querySelector('#sitioDescripcion2').textContent = translations[language].sitioDescripcion2;
//     document.querySelector('#inisio').textContent = translations[language].inisio;
//     document.querySelector('#nosotros').textContent = translations[language].nosotros;
//     document.querySelector('#contacto').textContent = translations[language].contacto;
//     document.querySelector('#idioma').textContent = translations[language].idioma;
//     document.querySelector('#registro').textContent = translations[language].registro;
//     document.querySelector('#tema').textContent = translations[language].tema;
//     document.querySelector('#ayuda').textContent = translations[language].ayuda;
// }


