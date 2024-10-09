// Función para registrar el autor
async function registroFormularioAutor() {
    // Obtener los valores de los campos
    const nombre = document.getElementById('nombre').value;
    const difusion = document.getElementById('difusion').value;
    const imgAutor = document.getElementById('imgAutor').files[0];
    const nacimiento = document.getElementById('nacimiento').value;
    const biografia = document.getElementById('biografia').value;

    // Validar que todos los campos estén llenos
    if (!nombre || !difusion || !nacimiento || !biografia || !imgAutor) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos incompletos',
            text: 'Por favor, completa todos los campos obligatorios.',
        });
        return;
    }

    // Crear un objeto FormData para almacenar los datos
    let formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('difusion', difusion);
    formData.append('imgAutor', imgAutor);
    formData.append('nacimiento', nacimiento);
    formData.append('biografia', biografia);

    try {
        // Enviar los datos al backend
        const response = await fetch('URL_DEL_BACKEND', { // Reemplaza 'URL_DEL_BACKEND' con la URL de tu API
            method: 'POST',
            body: formData,
        });

        // Verificar la respuesta
        if (!response.ok) {
            throw new Error('Error al registrar el autor');
        }

        const result = await response.json();

        // Mostrar alerta de éxito
        Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: 'El autor ha sido registrado correctamente.',
        });

        // Limpiar el formulario después de registrar
        limpiarFormulario();
        
    } catch (error) {
        console.error(error);
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Ocurrió un problema al registrar el autor.',
        });
    }
}
