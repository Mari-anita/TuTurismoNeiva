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
        misionTitle: "Misión",
        misionText: "Promover la apropiación de la cultura Neivana mediante sus sitios turísticos y monumentos, recopilando y dando a conocer la historia que hay detrás de cada uno de ellos, su importancia, cuántos hay, cuáles son los más visitados y cuáles se han olvidado.",
        visionTitle: "Visión",
        visionText: "Llegar a ser un sitio web reconocido a nivel nacional, por la información verídica que ofrecemos a nuestros usuarios, presentando innovadoras estrategias de marketing y asegurando una actividad turística estable, promoviendo en el sector social y económico de la ciudad.",

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
        misionTitle: "Mission",
        misionText: "Promote the appropriation of Neiva's culture through its tourist sites and monuments, collecting and publicizing the history behind each of them, their importance, how many there are, which are the most visited, and which have been forgotten.",
        visionTitle: "Vision",
        visionText: "To become a nationally recognized website for the truthful information we offer to our users, presenting innovative marketing strategies, and ensuring a stable tourism activity, promoting the city's social and economic sector.",
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

    // Cambios en la sección Misión y Visión
    document.getElementById('mision-title').innerText = translations[lang].misionTitle;
    document.getElementById('mision-text').innerText = translations[lang].misionText;
    document.getElementById('vision-title').innerText = translations[lang].visionTitle;
    document.getElementById('vision-text').innerText = translations[lang].visionText;

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
