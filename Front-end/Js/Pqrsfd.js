//validacion correo
function ValidarCorreo(correo) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.(com|es|org|net)$/i;
    // La primera validación verifica el formato y el dominio
    if (emailRegex.test(correo)) {
        // Verifica que haya al menos un punto en el dominio
        var domainPart = correo.split('@')[1];
        if (domainPart && domainPart.split('.').length > 1) {
            return true;
        }
    }
    return false;
}

// Contador de Caracteres
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('mensaje');
  const charCount = document.getElementById('char-count');

  textarea.addEventListener('input', () => {
    const maxLength = 5000;
    const remaining = maxLength - textarea.value.length;
    charCount.textContent = `Máximo ${remaining} caracteres restantes`;

    // Cambiar color si excede el límite
    charCount.style.color = remaining < 0 ? 'red' : '#ffffff';
  });

  // Validación del tamaño del archivo antes de enviar el formulario
  const form = document.getElementById('uploadForm');
  if (form) {
    form.addEventListener('submit', function(event) {
      const fileInput = document.getElementById('pdfFile');
      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const maxSize = 5 * 1024 * 1024; // 5 MB

        if (file.size > maxSize) {
          event.preventDefault(); // Previene el envío del formulario
          alert('El archivo debe ser menor de 5 MB.');
        }
      }
    });
  }

  // Validación de caracteres permitidos en el campo de nombre
  const nombreApellidoInput = document.getElementById("nombre_apellido");
  if (nombreApellidoInput) {
    nombreApellidoInput.addEventListener("keypress", Letras);
  }

  const Permitidas = [
    'A', 'Á', 'B', 'C', 'D', 'E', 'É', 'F', 'G', 'H', 'I', 'Í', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'Ó', 'P', 'Q', 'R', 'S', 'T', 'U', 'Ú', 'Ü', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'á', 'b', 'c', 'd', 'e', 'é', 'f', 'g', 'h', 'i', 'í', 'j', 'k', 'l', 'm',
    'n', 'ñ', 'o', 'ó', 'p', 'q', 'r', 's', 't', 'u', 'ú', 'ü', 'v', 'w', 'x', 'y', 'z', ' '
  ];

  // Función para permitir solo letras y espacios
  function Letras(event) {
    const tecla = event.key;
    if (!Permitidas.includes(tecla)) {
      event.preventDefault(); // Previene la entrada del carácter no permitido
    }
  }
});
