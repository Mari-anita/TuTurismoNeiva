package com.turismo.turismo.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class pqrsfdRegistroResponse {

    private pqrsfdRegistroRequest request;
    private String mensaje;
    private String token; // Token de autenticación
    private String nombreCompleto; // Nombre completo del usuario
    private role role; // Rol del usuario

}
