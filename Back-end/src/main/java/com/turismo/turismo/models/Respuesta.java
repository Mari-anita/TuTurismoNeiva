package com.turismo.turismo.models;

import java.sql.Date;

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
@Entity(name="Respuesta")
public class Respuesta {

    @ManyToOne
    @JoinColumn(name ="idUsuario")
    private Usuario Usuario;

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name="idRespuesta", nullable = false, length=36)
    private String idRespuesta;

    @ManyToOne
    @JoinColumn(name="idPeticion")
    private Pqrsfd Pqrsfd;

    @Column(name="textoRespuesta", nullable = false, length=300)
    private String textoRespuesta;

    @Column(name="fechaRespuesta", nullable = false, length=30)
    private Date fechaRespuesta;

}
