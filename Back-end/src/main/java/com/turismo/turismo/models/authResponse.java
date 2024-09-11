package com.turismo.turismo.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class authResponse {
    private String mensaje;
    private String Token;
    private boolean emailExists;

    public boolean isEmailExists() {
        return emailExists;
    }

    public void setEmailExists(boolean emailExists) {
        this.emailExists = emailExists;
    }

    // public static authResponse existByCorreoElectronico(String correoElectronico)
    // {
    // boolean exists = checkEmailInDatabase(correoElectronico); // Implementar este
    // método según tu lógica de negocio
    // authResponse response = new authResponse();
    // response.setEmailExists(exists);
    // return response;
    // }

}
