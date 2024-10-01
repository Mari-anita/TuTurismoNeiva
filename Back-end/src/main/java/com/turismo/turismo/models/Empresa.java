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
@NoArgsConstructor
@Data
@AllArgsConstructor
@Entity(name = "Empresa")
public class Empresa {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idEmpresa", nullable = false, length = 36)
    private String idEmpresa;

    @Column(name = "nombreEmpresa", nullable = false, length = 36)
    private String nombreEmpresa;

    @Column(name = "correoElectronico", nullable = false, length = 100)
    private String correoElectronico;

    @Column(name = "tipoEmpresa", nullable = false, length = 100)
    private String tipoEmpresa;

    @Column(name = "nombreRepresentante", nullable = false, length = 40)
    private String nombreRepresentante;

    @Column(name = "direccion", nullable = false, length = 100)
    private String direccion;

    @Column(name = "servicios", nullable = false, length = 150)
    private String servicios;

    @Column(name = "nit", nullable = false, length = 9)
    private String nit;

    @Column(name = "telefono", nullable = false, length = 15)
    private String telefono;

    @Column(name = "password", nullable = false, length = 60)
    private String password;

}
