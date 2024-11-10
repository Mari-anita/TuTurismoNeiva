const translations = {
    es: {
        title: "Registro Usuario",
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
        nombreEmpresa: "Nombre de la empresa",
        nombreRepresentante: "Nombre representante",
        nit: "NIT",
        direccion: "Dirección",
        correoElectronico: "Correo electrónico",
        telefono: "Teléfono",
        tipoEmpresa: "Tipo empresa",
        servicios: "Servicios",
        adjuntarImagen: "Adjuntar imagen",
        cambiarContrasena: "Cambiar contraseña",
        guardarCambios: "Guardar cambios",
        editarFotoPerfil: "Editar foto de perfil",
        eliminarFotoPerfil: "Eliminar foto de perfil",
        titlePassword: "Cambiar Contraseña",
        textParrafo: "Asegúrate de elegir una contraseña robusta para proteger tu cuenta de accesos no autorizados",
        newPasswordLabel: "Nueva Contraseña",
        confirmPasswordLabel: "Confirmación contraseña nueva",
        submitButton: "Continuar",
        misionTitle: "Misión",
        misionText: "Promover la apropiación de la cultura Neivana mediante sus sitios turísticos y monumentos, recopilando y dando a conocer la historia que hay detrás de cada uno de ellos, su importancia, cuántos hay, cuáles son los más visitados y cuáles se han olvidado.",
        visionTitle: "Visión",
        visionText: "Llegar a ser un sitio web reconocido a nivel nacional, por la información verídica que ofrecemos a nuestros usuarios, presentando innovadoras estrategias de marketing y asegurando una actividad turística estable, promoviendo en el sector social y económico de la ciudad.",
        forgotPasswordTitle: "¿Olvidaste tu contraseña?",
        resetPasswordInstructions: "Por favor ingrese su dirección de correo. Le enviaremos las instrucciones para que pueda restablecer su contraseña.",
        emailLabel: "Ingresa tu correo electrónico",
        recoverPassword: "Recuperar contraseña",
        nombreCompleto: "Nombre completo",
        editarFoto: "Editar foto de perfil",
        eliminarFoto: "Eliminar foto de perfil",
        tituloFormulario: "Ingresa los datos de tu empresa",
        mensajeFormulario: "Llena los campos con la información de tu empresa y envía una solicitud para que puedas subir contenido con nosotros.",
        pqrsfdTitle: "Ingresa los datos de tu PQRSFD",
        tipoDoc: "Tipo de documento",
        numDoc: "Número de documento",
        nombreApellido: "Nombre y apellido",
        correo: "Correo electrónico",
        fechaRadicado: "Fecha de radicado",
        tipoPeticion: "Seleccione el motivo de su mensaje",
        mensaje: "Mensaje",
        crearCuentaTitle: "Crear cuenta",
        iniciarSesionTitle: "Inicia Sesión",
        termsText: "Al hacer clic en 'Registrar', aceptas nuestros términos y condiciones.",
        contrasena: "Contraseña",
        confirmarContrasena: "Confirmar contraseña",
        olvidasteContrasena: "¿Olvidaste tu contraseña?",
        cuentaInactiva: "¿Tu cuenta está inactiva? Actívala",
        registrar: "Registrar",
        iniciarSesion: "Iniciar sesión"
    },
    en: {
        title: "User Registration",
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
        nombreEmpresa: "Company Name",
        nombreRepresentante: "Representative Name",
        nit: "Tax ID",
        direccion: "Address",
        correoElectronico: "Email",
        telefono: "Phone",
        tipoEmpresa: "Company Type",
        servicios: "Services",
        adjuntarImagen: "Attach Image",
        cambiarContrasena: "Change Password",
        guardarCambios: "Save Changes",
        editarFotoPerfil: "Edit Profile Picture",
        eliminarFotoPerfil: "Delete Profile Picture",
        titlePassword: "Change Password",
        textParrafo: "Make sure you choose a strong password to protect your account from unauthorized access",
        newPasswordLabel: "New Password",
        confirmPasswordLabel: "Confirm New Password",
        submitButton: "Continue",
        misionTitle: "Mission",
        misionText: "Promote the appropriation of Neiva's culture through its tourist sites and monuments, collecting and publicizing the history behind each of them, their importance, how many there are, which are the most visited, and which have been forgotten.",
        visionTitle: "Vision",
        visionText: "To become a nationally recognized website for the truthful information we offer to our users, presenting innovative marketing strategies, and ensuring a stable tourism activity, promoting the city's social and economic sector.",
        forgotPasswordTitle: "Forgot your password?",
        resetPasswordInstructions: "Please enter your email address. We will send you instructions to reset your password.",
        emailLabel: "Enter your email address",
        recoverPassword: "Recover Password",
        nombreCompleto: "Full Name",
        editarFoto: "Edit Profile Picture",
        eliminarFoto: "Delete Profile Picture",
        tituloFormulario: "Enter your company details",
        mensajeFormulario: "Fill in the fields with your company information and send a request to upload content with us.",
        pqrsfdTitle: "Enter your PQRSFD details",
        tipoDoc: "Document Type",
        numDoc: "Document Number",
        nombreApellido: "Full Name",
        correo: "Email",
        fechaRadicado: "Submission Date",
        tipoPeticion: "Select the reason for your message",
        mensaje: "Message",
        crearCuentaTitle: "Create Account",
        iniciarSesionTitle: "Log In",
        termsText: "By clicking 'Register', you agree to our terms and conditions.",
        contrasena: "Password",
        confirmarContrasena: "Confirm password",
        olvidasteContrasena: "Forgot your password?",
        cuentaInactiva: "Is your account inactive? Activate it",
        registrar: "Register",
        iniciarSesion: "Log In"
    }
};

function changeLanguage(lang) {
    // Guardar el idioma en localStorage
    localStorage.setItem('language', lang);

    // Cambiar el título de la página
    document.title = translations[lang].title;

    // Cambiar los textos del menú
    document.getElementById('inisio').innerHTML = `<b>${translations[lang].inisio}</b>`;
    document.getElementById('lugar-turistico').innerHTML = `<b>${translations[lang].lugarTuristico}</b>`;
    document.getElementById('nosotros').innerHTML = `<b>${translations[lang].nosotros}</b>`;
    document.getElementById('contacto').innerHTML = `<b>${translations[lang].contacto}</b>`;
    document.getElementById('idioma').innerHTML = `<b>${translations[lang].idioma}</b>`;
    document.getElementById('registro').innerHTML = `<b>${translations[lang].registro}</b>`;
    document.getElementById('tema').innerHTML = `<b>${translations[lang].tema}</b>`;
    document.getElementById('ayuda').innerHTML = `<b>${translations[lang].ayuda}</b>`;

    // Cambios en el formulario de usuario inactivo
    document.getElementById('title-inactive-user').innerText = translations[lang].titleInactiveUser;
    document.getElementById('reactivate-text').innerText = translations[lang].reactivateText;
    document.getElementById('reactivate-button').innerText = translations[lang].reactivateButton;
    document.getElementById('instruction-text').innerText = translations[lang].instructionText;

    // Cambios en el formulario de creación de cuenta
    document.getElementById('crear-cuenta-title').innerText = translations[lang].crearCuentaTitle;
    document.getElementById('iniciar-sesion-title').innerText = translations[lang].iniciarSesionTitle;
    document.getElementById('terms-text').innerText = translations[lang].termsText;
    document.getElementById('nombreCompleto').setAttribute('placeholder', translations[lang].nombreCompleto);
    document.getElementById('correoElectronico').setAttribute('placeholder', translations[lang].correoElectronico);
    document.getElementById('contra').setAttribute('placeholder', translations[lang].contrasena);
    document.getElementById('coContra').setAttribute('placeholder', translations[lang].confirmarContrasena);
    document.querySelector('.btnn').innerHTML = translations[lang].registrar;
    document.getElementById('loginBtn').innerHTML = translations[lang].iniciarSesion;

    // Cambios en el perfil de usuario
    document.getElementById('nombre-label').innerText = translations[lang].nombreCompleto;
    document.getElementById('correo-label').innerText = translations[lang].correoElectronico;
    document.getElementById('cambiar-contrasena-link').innerText = translations[lang].cambiarContrasena;
    document.getElementById('editar-foto').innerText = translations[lang].editarFoto;
    document.getElementById('eliminar-foto').innerText = translations[lang].eliminarFoto;
    document.getElementById('guardar-cambios-btn').innerText = translations[lang].guardarCambios;

    // Cambios en el formulario de recuperación de contraseña
    document.getElementById('forgot-password-title').innerText = translations[lang].forgotPasswordTitle;
    document.getElementById('reset-password-instructions').innerText = translations[lang].resetPasswordInstructions;

    // Cambios en el perfil de empresa
    document.getElementById('label-nombreEmpresa').innerText = translations[lang].nombreEmpresa;
    document.getElementById('label-nombreRepresentante').innerText = translations[lang].nombreRepresentante;
    document.getElementById('label-nit').innerText = translations[lang].nit;
    document.getElementById('label-direccion').innerText = translations[lang].direccion;
    document.getElementById('label-correoElectronico').innerText = translations[lang].correoElectronico;
    document.getElementById('label-telefono').innerText = translations[lang].telefono;
    document.getElementById('label-tipoEmpresa').innerText = translations[lang].tipoEmpresa;
    document.getElementById('label-servicios').innerText = translations[lang].servicios;

    // Cambios en el footer
    document.getElementById('contact-title').innerHTML = `<b>${translations[lang].contactanos}</b>`;
    document.getElementById('pqrsfd-link').innerHTML = `<b>Pqrsfd</b>`;
    document.getElementById('terms-link').innerHTML = `<b>${translations[lang].terminos}</b>`;
    document.getElementById('footer-text').innerText = translations[lang].footerText;
}


document.querySelectorAll('.flags_item').forEach(item => {
    item.addEventListener('click', () => {
        const lang = item.getAttribute('data-language');
        changeLanguage(lang);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Cargar el idioma desde localStorage o establecer 'es' por defecto
    const storedLang = localStorage.getItem('language') || 'es';
    changeLanguage(storedLang);
});
