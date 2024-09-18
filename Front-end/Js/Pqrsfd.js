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

function registrarPqrsfd() {
  var formData = {
    "telefono": document.getElementById("telefono").value,
    "nombre_apellido": document.getElementById("nombre_apellido").value,
    "correo": document.getElementById("correo").value,
    "mensaje": document.getElementById("mensaje").value,
  }
}

if (validarCampos()) {
  $.ajax({
      url: url,
      type: "POST",
      contentType: "application/json",
      data: JSON.stringify(formData),
      success: function(result) {
          Swal.fire({
              title: "¡Excelente!",
              text: "Se guardó correctamente",
              icon: "success"
          });
          $('#exampleModal').modal('hide');
      },
      error: function(error) {
          Swal.fire({
              title: "¡Error!",
              text: "No se guardó",
              icon: "error"
          });
      }
  });
} else {
  Swal.fire({
      title: "¡Error!",
      text: "Llene todos los campos correctamente",
      icon: "error"
  });
}

function validarCampos() {
  "telefono" = document.getElementById("telefono").value;
  "nombre_apellido" = document.getElementById("nombre_apellido").value;
  "correo" = document.getElementById("correo").value;
  "mensaje" = document.getElementById("mensaje").value;

return validarTelefono(telefono) && validarNombre(nombre_apellido) && validarCorreo(correo) && validarMensaje(mensaje);
}

function validarTelefono(telefono) {
var valor = telefono.value.trim();
var valido = valor.length >=3 && valor.length <=11;

actualizarClaseValidacion(telefono, valido);
return valido;
}

function validarNombre(nombre_apellido) {
var valor = nombre_apellido.value.trim();
var valido = valor.length >=5 && valor.length <=100;

actualizarClaseValidacion(nombre_apellido, valido);
return valido;
}

function validarCorreo(correo) {
  var valor = correo.value.trim();
  var valido = valor.length >=5 && valor.length <=100;
  
  actualizarClaseValidacion(correo, valido);
  return valido;
  }

function validarMensaje(mensaje) {
var valor = mensaje.value.trim();
var valido = valor.length >=4 && valor.length <=5000;

actualizarClaseValidacion(mensaje, valido);
return valido;
}

function actualizarClaseValidacion(elemento, valido) {
if (valido) {
  elemento.classList.remove("is-invalid");
  elemento.classList.add("is-valid");
} else {
  elemento.classList.remove("is-valid");
  elemento.classList.add("is-invalid");
}
}
