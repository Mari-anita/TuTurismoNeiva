package com.turismo.turismo.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@AllArgsConstructor
@Data
@NoArgsConstructor
public class mensaje {

    private String estado;
    private String mensaje;
    
    
}
