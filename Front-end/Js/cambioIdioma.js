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


