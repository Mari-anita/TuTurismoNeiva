package com.turismo.turismo.models;

import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
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

    //Quien responde

    @ManyToOne
    @JoinColumn(name="idRespuesta")
    private Respuesta Respuesta;

    @Column(name = "tipoDoc", nullable = false, length = 10)
    private String tipoDoc;

    @Column(name = "numDoc", nullable = false, length = 11)
    private String numDoc;

    @Column(name = "nombreApellido", nullable = false, length = 200)
    private String nombreApellido;

    @Column(name = "correo", nullable = false, length = 200)
    private String correo;

    @Column(name = "fechaRadicado", nullable = false, length = 20)
    private Timestamp fechaRadicado;

    @Column(name = "tipoPeticion", nullable = false, length = 10)
    private String tipoPeticion;

    @Column(name = "descripcionPeticion", nullable = false, length = 500)
    private String descripcionPeticion;


    @Enumerated(EnumType.STRING)
    private role role;  


    
}
