
    const passwordFields = document.querySelectorAll('#new-password, #confirm-password');

    passwordFields.forEach(function (field) {
        field.addEventListener('paste', function (e) {
            e.preventDefault(); // Evita que se pegue texto
            alert("No se puede pegar una contraseña.");
        });
        
        field.addEventListener('copy', function (e) {
            e.preventDefault(); // Evita que se copie texto
            alert("No se puede copiar la contraseña.");
        });
        
        field.addEventListener('cut', function (e) {
            e.preventDefault(); // Evita que se corte texto
            alert("No se puede cortar la contraseña.");
        });
    });

    // Mostrar/Ocultar contraseña
    document.querySelectorAll('.toggle-password').forEach(function (eyeIcon) {
        eyeIcon.addEventListener('click', function () {
            const inputId = this.getAttribute('data-input');
            const inputField = document.getElementById(inputId);
            if (inputField.type === 'password') {
                inputField.type = 'text';
                this.classList.remove('fa-eye-slash');
                this.classList.add('fa-eye');
            } else {
                inputField.type = 'password';
                this.classList.remove('fa-eye');
                this.classList.add('fa-eye-slash');
            }
        });
    });
