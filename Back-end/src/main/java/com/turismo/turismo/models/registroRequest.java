package com.turismo.turismo.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class registroRequest {
    
    private String nombreCompleto;
    private String correoElectronico;
    private String contra;
    private String coContra;
}
