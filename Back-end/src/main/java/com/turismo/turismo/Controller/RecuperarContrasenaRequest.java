package com.turismo.turismo.Controller;

public class RecuperarContrasenaRequest {

    private String correoElectronico;

   public RecuperarContrasenaRequest() {
       super();
   }

   public RecuperarContrasenaRequest(String correoElectronico) {
       super();
       this.correoElectronico = correoElectronico;
   }

   public String getCorreoElectronico() {
       return correoElectronico;
   }

   public void setCorreoElectronico(String correoElectronico) {
       this.correoElectronico = correoElectronico;
   }
    
    
}
