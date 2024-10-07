// Función para previsualizar la imagen seleccionada
function previewImage(event) {
    const input = event.target;
    const preview = document.getElementById('preview');

    // Verifica si se ha seleccionado un archivo
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        // Cuando se carga el archivo, se establece la fuente de la imagen
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block'; // Muestra la imagen
            document.getElementById('camera-icon-container').style.display = 'none'; // Oculta el ícono de la cámara
        }

        reader.readAsDataURL(input.files[0]); // Lee el archivo como una URL de datos
    }
}

// Función para confirmar la eliminación de la foto de perfil
function confirmDelete() {
    const confirmDelete = confirm("¿Estás seguro de que deseas eliminar la foto de perfil?");
    if (confirmDelete) {
        // Reinicia el input de archivo
        document.getElementById('file-input').value = '';
        const preview = document.getElementById('preview');
        preview.style.display = 'none'; // Oculta la imagen
        document.getElementById('camera-icon-container').style.display = 'block'; // Muestra el ícono de la cámara
    }
}

// Función para guardar los cambios
function saveChanges() {
    // Aquí puedes implementar la lógica para guardar los cambios, como enviar los datos a un servidor
    alert("Cambios guardados (funcionalidad no implementada).");
}
