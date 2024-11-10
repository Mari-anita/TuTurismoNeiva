document.addEventListener("DOMContentLoaded", () => {
    const flagsElement = document.getElementById("flags");
    const textsToChange = document.querySelectorAll("[data-section]");

    // Función para cambiar el idioma
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

    // Cargar el idioma desde localStorage si existe
    const currentLanguage = localStorage.getItem('language') || 'es'; // valor por defecto 'es'
    changeLanguage(currentLanguage);

    // Evento para cambiar el idioma al hacer clic en las banderas
    if (flagsElement) {
        flagsElement.addEventListener("click", (e) => {
            const language = e.target.closest('[data-language]')?.dataset.language;
            if (language) {
                localStorage.setItem('language', language); // Guardar el idioma en localStorage
                changeLanguage(language);
            } else {
                console.error('data-language attribute not found.');
            }
        });
    } else {
        console.error("El elemento con id 'flags' no se encontró.");
    }
});
