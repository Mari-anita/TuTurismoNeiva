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

// Color del icono de fecha
flatpickr("#custom-date", {
  dateFormat: "Y-m-d",
});

document.querySelector(".calendar-icon").addEventListener("click", function() {
  document.querySelector("#custom-date")._flatpickr.open();
});

// Contador de caracteres
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

function registrarPqrsfd() {
  var formData = {
      "numeroDoc":document.getElementById("numDoc").value,
      "telefono": document.getElementById("telefono").value,
      "nombre_apellido": document.getElementById("nombreApellido").value,
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
  var nombre_apellido = document.getElementById("nombreApellido").value;
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("descripcionPeticion").value;

  return validarNumeroDoc(numeroDoc) && validarTelefono(telefono) &&
         validarNombre(nombre_apellido) && validarCorreo(correo) && 
         validarMensaje(mensaje);
}

function validarNumeroDoc(numDoc) {
  var valor = numDoc.trim();
  var valido = valor.length >= 3 && valor.length <= 11;

  actualizarClaseValidacion(document.getElementById("numDoc"), valido);
  return valido;
}


function validarTelefono(telefono) {
  var valor = telefono.trim();
  var valido = valor.length >= 3 && valor.length <= 11;

  actualizarClaseValidacion(document.getElementById("telefono"), valido);
  return valido;
}

function validarNombre(nombreApellido) {
  var valor = nombreApellido.trim();
  var valido = valor.length >= 5 && valor.length <= 100;

  actualizarClaseValidacion(document.getElementById("nombreApellido"), valido);
  return valido;
}

function validarCorreo(correo) {
  var valor = correo.trim();
  var valido = valor.length >= 5 && valor.length <= 100;

  actualizarClaseValidacion(document.getElementById("correo"), valido);
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
