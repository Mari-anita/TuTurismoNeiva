document.getElementById("tipoEmpresa").addEventListener("keypress",soloLetras);
document.getElementById("nombreRepresentante").addEventListener("keypress",soloNombreRep);
document.getElementById("telefono").addEventListener("keypress",soloNumeros);
document.getElementById("servicios").addEventListener("keypress",soloServic);

//este metodo solo permite numeros
const numerosPermitidos = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
];

const letrasPermitidas = [
    'A', 'Á', 'B', 'C', 'D', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M', 
    'N', 'Ñ', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ú', 'Ü', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'ó', 'p', 'q', 'r', 's', 't', 'u', 'ú', 'ü', 'v', 'w', 'x', 'y', 'z', ' '
];

const signosPermitidos = [
    '.', ',', '@', '_', '-', ''
];


// FORMA CORTA
function soloLetras(event) {
    console.log("Llave presionada: " + event.key);
    console.log("Codigo tecla: " + event.keyCode);

    if(!(letrasPermitidas.includes(event.key))){
        event.preventDefault();
        return;
    }
}

function soloNombreRep(event) {
    console.log("Llave presionada: " + event.key);
    console.log("Codigo tecla: " + event.keyCode);

    if(!(letrasPermitidas.includes(event.key))){
        event.preventDefault();
        return;
    }
}

function soloNumeros(event) {
    console.log("Llave presionada: " + event.key);
    console.log("Codigo tecla: " + event.keyCode);

    if(!(numerosPermitidos.includes(event.key))){
        event.preventDefault();
        return;
    }
}

function soloNombreRep(event) {
    console.log("Llave presionada: " + event.key);
    console.log("Codigo tecla: " + event.keyCode);

    if(!(letrasPermitidas.includes(event.key))){
        event.preventDefault();
        return;
    }
}


function confirmDelete() {
    if (confirm("¿Estás seguro de que quieres eliminar la imagen de perfil?")) {
        // Aquí puedes agregar la lógica para eliminar la imagen de perfil
        console.log("Imagen eliminada");
        // Ejemplo de eliminación de la imagen (puedes agregar tu lógica):
        // document.getElementById('img-profile').src = 'ruta/default.png'; 
    } else {
        console.log("Eliminación cancelada");
    }
}
function previewImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('preview');
            const cameraIcon = document.getElementById('camera-icon-container');
            
            // Ocultar el ícono de la cámara
            cameraIcon.style.display = 'none';
            
            // Mostrar la imagen seleccionada
            preview.src = e.target.result;
            preview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    }
}

// Función para eliminar la foto de perfil
function confirmDelete() {
    if (confirm("¿Estás seguro de que deseas eliminar la imagen de perfil?")) {
        const preview = document.getElementById('preview');
        const cameraIcon = document.getElementById('camera-icon-container');
        
        // Ocultar la imagen
        preview.style.display = 'none';
        preview.src = ''; // Limpiar la imagen
        
        // Mostrar el ícono de la cámara
        cameraIcon.style.display = 'block';
        
        // Limpiar el input de archivo
        document.getElementById('file-input').value = '';
    }
}

// Función para guardar los cambios 
function saveChanges() {
    const fileInput = document.getElementById('file-input');
    if (fileInput.files.length > 0) {
        const formData = new FormData();
        formData.append('profileImage', fileInput.files[0]);

        fetch('/save-profile-image', {
            method: 'POST',
            body: formData
        }).then(response => response.json())
          .then(data => {
            alert("¡Cambios guardados correctamente!");
          })
          .catch(error => {
            console.error('Error al guardar la imagen:', error);
          });
    } else {
        alert("Por favor selecciona una imagen antes de guardar los cambios.");
    }
}

// Función para confirmar eliminación
function confirmDelete() {
    if (confirm("¿Estás seguro de que deseas eliminar la imagen de perfil?")) {
        document.getElementById('preview').src = ''; // Limpiar la imagen
        document.getElementById('preview').style.display = 'none'; // Ocultar imagen
        document.getElementById('file-input').value = ''; // Limpiar input
    }
}

// Función para guardar cambios 
function saveChanges() {
    alert('Cambios guardados correctamente');
}

function saveChanges() {
    const fileInput = document.getElementById('file-input');
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    fetch('/api/upload', {  // Reemplaza '/api/upload' con la URL de tu backend
        method: 'POST',
        body: formData
    }).then(response => {
        if (response.ok) {
            alert('Imagen guardada exitosamente');
        } else {
            alert('Error al guardar la imagen');
        }
    });
}