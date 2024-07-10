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

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Sitio")
public class Sitio {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idSitio", nullable = false, length = 36)
    private String idSitio;

    @Column(name = "nombreSitio", nullable = false, length = 36)
    private String nombreSitio;

    @Column(name = "ubicacionSitio", nullable = false, length = 36)
    private String ubicacionSitio;

    @Column(name = "horaSitio", nullable = false, length = 36)
    private String horaSitio;

    @Column(name = "estado", nullable = false, length = 1)
    private String estado;

}
