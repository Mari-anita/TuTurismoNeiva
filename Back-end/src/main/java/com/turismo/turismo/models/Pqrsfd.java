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
@Entity(name = "Pqrsfd")
public class Pqrsfd {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idPeticion", nullable = false, length = 36)
    private String idPeticion;        

    @ManyToOne
    @JoinColumn(name ="idUsuario")
    private Usuario Usuario;

    @ManyToOne
    @JoinColumn(name="idRespuesta")
    private Respuesta Respuesta;

    @Column(name = "tipoDoc", nullable = false, length = 10)
    private String tipoDoc;

    @Column(name = "numDoc", nullable = false, length = 11)
    private int numDoc;

    @Column(name = "nombreApellido", nullable = false, length = 200)
    private String nombreApellido;

    @Column(name = "correo", nullable = false, length = 200)
    private String correo;

    @Column(name = "telefono", nullable = false, length = 11)
    private int telefono;

    @Column(name = "fechaRadicado", nullable = false, length = 20)
    private Date fechaRadicado;

    @Column(name = "tipoPeticion", nullable = false, length = 10)
    private String tipoPeticion;

    @Column(name = "descripcionPeticion", nullable = false, length = 500)
    private String descripcionPeticion;

    @Column(name = "documentos", nullable = false, length = 10)
    private String documentos;


    
}
