//validaciones de campos
document.getElementById("numDoc").addEventListener("keypress",soloNumeros);
document.getElementById("telefono").addEventListener("keypress",soloNumeros);
document.getElementById("nombreApellido").addEventListener("keypress",soloLetras);

//este metodo solo permite numeros
const numerosPermitidos = [
    '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '' 
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
function soloNumeros(event) {
    console.log("Llave presionada: " + event.key);
    console.log("Codigo tecla: " + event.keyCode);

    if(!(numerosPermitidos.includes(event.key))){
        event.preventDefault();
        return;
    }
}

function soloLetras(event) {
    console.log("Llave presionada: " + event.key);
    console.log("Codigo tecla: " + event.keyCode);

    if(!(letrasPermitidas.includes(event.key))){
        event.preventDefault();
        return;
    }
}

// Validación de correo
function validarCorreo(correo) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.(com|es|org|net)$/i; 
  if (emailRegex.test(correo)) {
      var domainPart = correo.split('@')[1];
      if (domainPart && domainPart.split('.').length > 1) {
          return true;
      }
  }
  return false;
}
// Controlar la entrada de arrobas
document.getElementById("correo").addEventListener("keydown", function(event) {
    // Verificar si la tecla presionada es arroba
    if (event.key === '@') {
        var correoInput = event.target.value;
        var arrobaCount = (correoInput.match(/@/g) || []).length;

        // Si ya hay una arroba, prevenir la entrada
        if (arrobaCount >= 1) {
            event.preventDefault();
        }
    }
});

//Color del icono de fecha
flatpickr("#custom-date", {
  dateFormat: "Y-m-d",
});

document.querySelector(".calendar-icon").addEventListener("click", function() {
  document.querySelector("#custom-date")._flatpickr.open();
});

//Contador de caracteres
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('descripcionPeticion');
  const charCount = document.getElementById('char-count');

  textarea.addEventListener('input', () => {
      const maxLength = 5000;
      const remaining = maxLength - textarea.value.length;
      charCount.textContent = `Máximo ${remaining} caracteres restantes`;
      charCount.style.color = remaining < 0 ? 'red' : '#ffffff';
  });

  const form = document.getElementById('uploadForm');
  if (form) {
      form.addEventListener('submit', function(event) {
          const fileInput = document.getElementById('pdfFile');
          if (fileInput.files.length > 0) {
              const file = fileInput.files[0];
              const maxSize = 5 * 1024 * 1024; // 5 MB
              if (file.size > maxSize) {
                event.preventDefault();
                alert('El archivo debe ser menor de 5 MB.');
            }
        }
    });
}

//icono de basura
  document.querySelector('.trash-icon').addEventListener('click', function() {
      document.getElementById('pdfFile').value = '';
  });

  const nombreApellidoInput = document.getElementById("nombreApellido"); // Asegúrate de que el ID es correcto
  if (nombreApellidoInput) {
      nombreApellidoInput.addEventListener("keypress", Letras);
  }

  const Permitidas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz áéíóúñÑ'; // Solo letras y espacio

  function Letras(event) {
      const tecla = event.key;
      if (!Permitidas.includes(tecla)) {
          event.preventDefault();
      }
  }
});

//registro
function registrarPqrsfd() {
  var formData = {
      "tipoDoc":document.getElementById("tipoDoc").value,
      "numeroDoc":document.getElementById("numDoc").value,
      "telefono": document.getElementById("telefono").value,
      "fechaRadicado": document.getElementById("fechaRadicado").value,
      "tipoPeticion": document.getElementById("tipoPeticion").value,
      "nombreApellido": document.getElementById("nombreApellido").value,
      "correo": document.getElementById("correo").value,
      "mensaje": document.getElementById("descripcionPeticion").value, // Asegúrate de que el ID sea correcto
  };

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
}

function validarCampos() {
  var numeroDoc = document.getElementById("numDoc").value; // Asegúrate de que el ID es correcto
  var telefono = document.getElementById("telefono").value;
  var nombreApellido = document.getElementById("nombreApellido").value;
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("descripcionPeticion").value;

  return validarNumeroDoc(numeroDoc) && validarTelefono(telefono) &&
         validarNombre(nombreApellido) && validarCorreo(correo) && 
         validarMensaje(mensaje);
}

function validarNumeroDoc(numeroDoc) {
    var valor = numeroDoc.trim();
    var valido = valor.length >= 5 && valor.length <= 11;
  
    actualizarClaseValidacion(document.getElementById("numeroDoc"), valido);
    return valido;
  }

function validarTelefono(telefono) {
    var valor = telefono.trim();
    var valido = valor.length >= 5 && valor.length <= 11;
  
    actualizarClaseValidacion(document.getElementById("telefono"), valido);
    return valido;
  }

function validarNombre(nombreApellido) {
  var valor = nombreApellido.trim();
  var valido = valor.length >= 5 && valor.length <= 100;

  actualizarClaseValidacion(document.getElementById("nombreApellido"), valido);
  return valido;
}

function validarMensaje(descripcionPeticion) {
  var valor = descripcionPeticion.trim();
  var valido = valor.length >= 4 && valor.length <= 5000;

  actualizarClaseValidacion(document.getElementById("descripcionPeticion"), valido);
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
