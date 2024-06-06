package com.turismo.turismo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Pqrsfd")
public class Pqrsfd {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idPeticion", nullable = false, length = 36)
    private String idPeticion;

    @Column(name = "tipoPeticion", nullable = false, length = 36)
    private String tipoPeticion;

    @ManyToOne
    @JoinColumn(name ="idUsuario")
    private Usuario Usuario;

    @Column(name = "descripcionPeticion", nullable = false, length = 36)
    private String descripcionPeticion;

    @Column(name = "asuntoPeticion", nullable = false, length = 36)
    private String asuntoPeticion;

    @Column(name = "documentoAdjunto", nullable = false, length = 36)
    private String documentoAdjunto;

    @Column(name = "nombreRadicaPeticion", nullable = false, length = 36)
    private String nombreRadicaPeticion;

}
