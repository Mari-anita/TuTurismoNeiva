package com.turismo.turismo.models;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class pqrsfdRegistroRequest {
    private String tipoDoc;
    private String numDoc;
    private String nombreApellido;
    private String correo;
    private String telefono;
    private LocalDateTime   fechaRadicacion;
    private String tipoPeticion;
    private String descripcionPeticion;
    private String documentos;

}
