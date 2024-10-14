const translations = {
    es: {
        title: "Misión Visión",
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
        misionTitle: "Misión",
        misionText: "Promover la apropiación de la cultura Neivana mediante sus sitios turísticos y monumentos, recopilando y dando a conocer la historia que hay detrás de cada uno de ellos, su importancia, cuántos hay, cuáles son los más visitados y cuáles se han olvidado.",
        visionTitle: "Visión",
        visionText: "Llegar a ser un sitio web reconocido a nivel nacional, por la información verídica que ofrecemos a nuestros usuarios, presentando innovadoras estrategias de marketing y asegurando una actividad turística estable, promoviendo en el sector social y económico de la ciudad.",

    },
    en: {
        title: "Mission Vision",
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
        misionTitle: "Mission",
        misionText: "Promote the appropriation of Neiva's culture through its tourist sites and monuments, collecting and publicizing the history behind each of them, their importance, how many there are, which are the most visited, and which have been forgotten.",
        visionTitle: "Vision",
        visionText: "To become a nationally recognized website for the truthful information we offer to our users, presenting innovative marketing strategies, and ensuring a stable tourism activity, promoting the city's social and economic sector.",
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

    // Cambios en la sección Misión y Visión
    document.getElementById('mision-title').innerText = translations[lang].misionTitle;
    document.getElementById('mision-text').innerText = translations[lang].misionText;
    document.getElementById('vision-title').innerText = translations[lang].visionTitle;
    document.getElementById('vision-text').innerText = translations[lang].visionText;

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
