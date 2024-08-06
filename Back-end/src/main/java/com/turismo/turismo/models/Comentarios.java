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

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name= "Comentarios")
public class Comentarios {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idComentarios", nullable = false, length = 36)
    private String idComentarios;

    @ManyToOne
    @JoinColumn(name ="idUsuario")
    private Usuario Usuario;

    @ManyToOne
    @JoinColumn(name = "idSitioMonumento")
    private SitioMonumento SitioMonumento;

    @Column(name = "comentario", nullable = false, length = 36)
    private String comentario;

    @Column(name = "fechaComentario", nullable = false, length = 36)
    private Date fechaComentario;

    @ManyToOne
    @JoinColumn(name = "idComentarioRespuesta")
    private Comentarios comentarioRespuesta;

}
