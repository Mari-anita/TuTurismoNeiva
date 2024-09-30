function regitroComent(){
    var coment = document.getElementById("coment");

    if(coment.value == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "DEJASTE EL CAMPO DE COMENTARIO VACIO"
          });
    }else{
        console.log("HAY TEXTO EN EL COMENTARIO");
    }

    var formData={
        "coment": coment.value

    };

    // if(ValidarCampos()){
    //     $.ajax({
    //         type: metodo,
    //         url: 
    //     });
    // }

}

function ValidarCampos() {
    var coment = document.getElementById("coment");
    return Validarcoment(coment);
}

function Validarcoment(CuadroNumero) {
    var Valor = CuadroNumero.value;
    var Valido = true;

    if (Valor.length < 3 || Valor.length > 500) {
        Valido = false;
    }
    if (Valido) {
        CuadroNumero.className = " input form-control is-valid";
    } else {
        CuadroNumero.className = "input form-control is-invalid";
    }
    return Valido;
}