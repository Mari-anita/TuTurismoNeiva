document.addEventListener('DOMContentLoaded', () => {
    let toggle = document.getElementById('toggle');
    let label_toggle = document.getElementById('label_toggle');

    // Seleccionamos el cuerpo de la página
    const body = document.body;
    const passwordResetContainer = document.querySelector('.password-reset-container');
    const header = document.querySelector('header');
    const formButton = document.querySelector('form button');
    const backButton = document.querySelector('.back-button');
    const navItems = document.querySelectorAll('.nav-item');

    // Verificar el valor de theme en localStorage
    const savedTheme = localStorage.getItem('theme');

    // Si hay un tema guardado, aplicarlo
    if (savedTheme === 'dark') {
        body.classList.add('dark');
        toggle.checked = true; // Marcar el checkbox
        label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Cambiar el ícono
        label_toggle.style.color = "yellow"; // Cambiar color del ícono
        // Añadir clase de modo oscuro a los elementos necesarios
        if (passwordResetContainer) passwordResetContainer.classList.add('dark');
        if (header) header.classList.add('dark');
        if (formButton) formButton.classList.add('dark');
        if (backButton) backButton.classList.add('dark');
        navItems.forEach(item => item.classList.add('dark'));
    } else {
        label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Cambiar el ícono
        label_toggle.style.color = "rebeccapurple"; // Cambiar color del ícono
    }

    // Función para cambiar entre modos claro y oscuro
    toggle.addEventListener('change', (event) => {
        const checked = event.target.checked;

        // Cambiar la clase 'dark' en el body
        body.classList.toggle('dark', checked);

        if (checked) {
            // Guardar en localStorage
            localStorage.setItem('theme', 'dark');
            label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>'; // Cambiar el ícono
            label_toggle.style.color = "yellow"; // Cambiar color del ícono
            // Añadir clase de modo oscuro a los elementos necesarios
            if (passwordResetContainer) passwordResetContainer.classList.add('dark');
            if (header) header.classList.add('dark');
            if (formButton) formButton.classList.add('dark');
            if (backButton) backButton.classList.add('dark');
            navItems.forEach(item => item.classList.add('dark'));
        } else {
            // Guardar en localStorage
            localStorage.setItem('theme', 'light');
            label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>'; // Cambiar el ícono
            label_toggle.style.color = "rebeccapurple"; // Cambiar color del ícono
            // Remover clase de modo oscuro de los elementos
            if (passwordResetContainer) passwordResetContainer.classList.remove('dark');
            if (header) header.classList.remove('dark');
            if (formButton) formButton.classList.remove('dark');
            if (backButton) backButton.classList.remove('dark');
            navItems.forEach(item => item.classList.remove('dark'));
        }
    });
});
