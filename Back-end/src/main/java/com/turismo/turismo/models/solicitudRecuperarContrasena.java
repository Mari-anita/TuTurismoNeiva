package com.turismo.turismo.models;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Restablecer")
public class solicitudRecuperarContrasena {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idRestablecer", nullable = false, length = 36)
    private String idRestablecer;

    @Column(name = "fechaHora", nullable = false, length = 30, columnDefinition="DateTime" )
    private Date fechaHora;

    @Column(name = "estado", nullable = false, length = 15)
    private boolean estado;

    @ManyToOne
    @JoinColumn(name="idUsuario")
    private Usuario Usuario;

}
