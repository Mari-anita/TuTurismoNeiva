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

function listarPqrsfd(){
    //METODO PARA LISTAR LOS CLIENTES
    //SE CREA LA PETICION AJAX

    var urlLocal=url;
    var filtro=document.getElementById("texto").value
    if(filtro!="")
        urlLocal+="busqueda/"+filtro;

    $.ajax({
        url:urlLocal,
        type:"GET",
        success: function(result){
            //success: funcion que se ejecuta
            //cuando la peticion tiene exito
            console.log(result);
    
            var cuerpoTablaPqrsfd=document.getElementById("cuerpoTablaPqrsfd");
            //Se limpia el cuepro de la tabla
            cuerpoTablaPqrsfd.innerHTML="";
            //se hace un ciclo que recorra l arreglo con los datos
            for(var i=0; i<result.length;i++){
                //UNA ETIQUETA tr por cada registro
                var trResgistro=document.createElement("tr");

                var celdaIdPqrsfd=document.createElement("td");
                let celdaTipoDoc = document.createElement("td")
                let celdaNumeroDoc = document.createElement("td")
                let celdaNombreApe = document.createElement("td")
                let celdaCorreo = document.createElement("td")
                let celdaTelefono = document.createElement("td")
                let celdaFecha = document.createElement("td")
                let celdaMotivoMens = document.createElement("td")
                let celdaMensaje = document.createElement("td")
    
                celdaIdPqrsfd.innerText=result[i]["idPeticion"];
                celdaTipoDoc.innerText=result[i]["tipoDoc"];
                celdaNumeroDoc.innerText=result[i]["numDoc"];
                celdaNombreApe.innerText=result[i]["nombreApellido"];
                celdaCorreo.innerText=result[i]["correo"];
                celdaTelefono.innerText=result[i]["telefono"];
                celdaFecha.innerText=result[i]["fechaRadicado"];
                celdaMotivoMens.innerText=result[i]["tipoPeticion"];
                celdaMensaje.innerText=result[i]["descripcionPeticion"];
    
                trResgistro.appendChild(celdaIdPqrsfd);
                trResgistro.appendChild(celdaTipoDoc);
                trResgistro.appendChild(celdaNumeroDoc);
                trResgistro.appendChild(celdaNombreApe);
                trResgistro.appendChild(celdaCorreo);
                trResgistro.appendChild(celdaTelefono);
                trResgistro.appendChild(celdaFecha);
                trResgistro.appendChild(celdaMotivoMens);
                trResgistro.appendChild(celdaMensaje);
                
                trResgistro.appendChild(celdaOpcion)
                cuerpoTablaPaciente.appendChild(trResgistro);

               
                //creamos un td por cada campo de resgistro
                
            }
        },
        error: function(error){
            /*
            ERROR: funcion que se ejecuta cuando la peticion tiene un error
            */
            alert("Error en la petición " + error);
        }
    });
    }

    function registrarPqrsfd() {
  
        let formData={
            "idPeticion": document.getElementById("idPeticion").value,
            "tipoDoc": document.getElementById("tipoDoc").value,
            "numDoc": document.getElementById("numDoc").value,
            "nombreApellido": document.getElementById("nombreApellido").value,
            "correo": document.getElementById("correo").value,
            "telefono": document.getElementById("telefono").value,
            "fechaRadicado": document.getElementById("fechaRadicado").value,
            "tipoPeticion": document.getElementById("tipoPeticion").value,
            "descripcionPeticion": document.getElementById("descripcionPeticion").value
            
        };
    
        if (validarCampos()) {
            $.ajax({
                url:url,
                type:"POST",
                data:formData,
                success: function (result){
                    //
                    Swal.fire({
                        title: "¡Excelente!",
                        text: "Se guardó correctamente",
                        icon: "success"
                      });
                      limpiarFormulario();// Limpiar el formulario después de un registro exitoso
                },
            })
        }else{
            Swal.fire({
                title: "¡Error!",
                text: "Llene todos los campos correctamente",
                icon: "error"
            });
        }   
    }

    function limpiarFormulario() {
        // Limpiar todos los campos del formulario
        document.getElementById("uploadForm").reset();
        // Reiniciar clases de validación
        const inputs = document.querySelectorAll("#uploadForm .form-control");
        inputs.forEach(input => {
            input.className = "form-control"; // Reiniciar clase a la predeterminada
        });
    }
        
    //validación número de documento
    function validarCampos(){
        var numDoc = document.getElementById("numDoc");
        var nombreApellido = document.getElementById("nombreApellido");
        var correo = document.getElementById("correo");
        var telefono = document.getElementById("telefono");
        var descripcionPeticion = document.getElementById("descripcionPeticion");

    return validarNumDoc(numDoc) && validarNombreApe(nombreApellido) && validarCorreoPqrsfd(correo) && 
    validarTelefonoPqrsfd(telefono) && validarDescripMens(descripcionPeticion);
    }
    function validarNumDoc(cuadroNumDocu){
        var valor=cuadroNumDocu.value;
        var valido=true;
        if (valor.length <5 || valor.length> 11){
         valido=false
        }
     
        if(valido){
            cuadroNumDocu.className="form-control is-valid";
        }else{
            cuadroNumDocu.className="form-control is-invalid";
        }
        return valido;
     }

     //validación segundo nombre
    function validarNombreApe(cuadroNombreApe){
        var valor=cuadroNombreApe.value;
        var valido=true;
        if (valor.length <3 || valor.length> 21){
         valido=false
        }
     
        if(valido){
            cuadroNombreApe.className="form-control is-valid";
        }else{
            cuadroNombreApe.className="form-control is-invalid";
        }
        return valido;
     }

     //validación telefono
    function validarTelefonoPqrsfd(cuadroTelefonoPqrsfd){
        var valor=cuadroTelefonoPqrsfd.value;
        var valido=true;
        if (valor.length <7 || valor.length> 16){
         valido=false
        }
     
        if(valido){
            cuadroTelefonoPqrsfd.className="form-control is-valid";
        }else{
            cuadroTelefonoPqrsfd.className="form-control is-invalid";
        }
        return valido;
     }

     //validación correo
    function validarCorreoPqrsfd(cuadroCorreoPqrsfd){
        var valor=cuadroCorreoPqrsfd.value;
        var valido=true;
        if (valor.length <7 || valor.length> 256){
         valido=false
        }
     
        if(valido){
            cuadroCorreoPqrsfd.className="form-control is-valid";
        }else{
            cuadroCorreoPqrsfd.className="form-control is-invalid";
        }
        return valido;
    }

        //validación descripcion mensaje
        function validarDescripMens(cuadroDescripMens){
            var valor=cuadroDescripMens.value;
            var valido=true;
            if (valor.length <7 || valor.length> 256){
             valido=false
            }
         
            if(valido){
                cuadroDescripMens.className="form-control is-valid";
            }else{
                cuadroDescripMens.className="form-control is-invalid";
            }
            return valido;
        }
    
})
