document.addEventListener('DOMContentLoaded', () => {
    let toggle = document.getElementById('toggle');
    let label_toggle = document.getElementById('label_toggle');

    // Seleccionamos el checkbox y el cuerpo de la página
    const toggleSwitch = document.getElementById('toggle');
    const body = document.body;
    const passwordResetContainer = document.querySelector('.password-reset-container');
    const header = document.querySelector('header');
    const formButton = document.querySelector('form button');
    const backButton = document.querySelector('.back-button');
    const navItems = document.querySelectorAll('.nav-item');

    // Función para cambiar entre modos claro y oscuro
    toggle.addEventListener('change', (event) => {
        let checked = event.target.checked;
        document.body.classList.toggle('dark', checked);

        if (toggleSwitch.checked) {
            label_toggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
            label_toggle.style.color = "yellow";
            body.classList.add('dark-mode');
            passwordResetContainer.classList.add('dark-mode');
            header.classList.add('dark-mode');
            formButton.classList.add('dark-mode');
            backButton.classList.add('dark-mode');
            navItems.forEach(item => item.classList.add('dark-mode'));
        } else {
            label_toggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
            label_toggle.style.color = "rebeccapurple";
            body.classList.remove('dark-mode');
            passwordResetContainer.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            formButton.classList.remove('dark-mode');
            backButton.classList.remove('dark-mode');
            navItems.forEach(item => item.classList.remove('dark-mode'));
        }
    });
});