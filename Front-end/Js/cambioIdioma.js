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

// Idioma Sitio Turistico
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


