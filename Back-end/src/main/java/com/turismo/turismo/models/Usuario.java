package com.turismo.turismo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idUsuario", nullable = false, length = 36)
    private String idUsuario;

    @Column(name = "nombreCompleto", nullable = false, length = 60)
    private String nombreCompleto;

    @Column(name = "correoElectronico", nullable = false, length = 100)
    private String correoElectronico;

    @Column(name = "contra", nullable = false, length = 36)
    private String contra;

    @Column(name = "coContra", nullable = false, length = 36)
    private String coContra;


    

}
