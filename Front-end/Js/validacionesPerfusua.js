
document.getElementById("nombreRepresentante").addEventListener("keypress",soloLetras);

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
function soloLetras(event) {
    console.log("Llave presionada: " + event.key);
    console.log("Codigo tecla: " + event.keyCode);

    if(!(letrasPermitidas.includes(event.key))){
        event.preventDefault();
        return;
    }
}

// Validación de correo
function validarCorreo(correoElectronico) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.(com|es|org|net)$/i; 
    if (emailRegex.test(correoElectronico)) {
        var domainPart = correoElectronico.split('@')[1];
        if (domainPart && domainPart.split('.').length > 1) {
            return true;
        }
    }
    return false;
  }
  // Controlar la entrada de arrobas
  document.getElementById("correoElectronico").addEventListener("keydown", function(event) {
      // Verificar si la tecla presionada es arroba
      if (event.key === '@') {
          var correoElectronicoInput = event.target.value;
          var arrobaCount = (correoElectronicoInput.match(/@/g) || []).length;
  
          // Si ya hay una arroba, prevenir la entrada
          if (arrobaCount >= 1) {
              event.preventDefault();
          }
      }
  });
  