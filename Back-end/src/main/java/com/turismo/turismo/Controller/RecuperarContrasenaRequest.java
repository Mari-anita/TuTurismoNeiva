package com.turismo.turismo.Controller;

public class RecuperarContrasenaRequest {

    private String nombreCompleto;

   public RecuperarContrasenaRequest() {
       super();
   }

   public RecuperarContrasenaRequest(String nombreCompleto) {
       super();
       this.nombreCompleto = nombreCompleto;
   }

   public String getNombreCompleto() {
       return nombreCompleto;
   }

   public void setNombreCompleto(String nombreCompleto) {
       this.nombreCompleto = nombreCompleto;
   }
    
    
}
