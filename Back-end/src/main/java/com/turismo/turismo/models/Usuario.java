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

    @Column(name = "tipoDocumento", nullable = false, length = 11)
    private String tipoDocumento;

    @Column(name = "documentoUsuario", nullable = false, length = 13)
    private String documentoUsuario;

    @Column(name = "nombreCompleto", nullable = false, length = 55)
    private String nombreCompleto;

    @Column(name = "tipoUsuario", nullable = false, length = 36)
    private String tipoUsuario;

    @Column(name = "correoElectronico", nullable = false, length = 100)
    private String correoElectronico;

    @Column(name = "contra", nullable = false, length = 36)
    private String contra;

    @Column(name = "coContra", nullable = false, length = 36)
    private String coContra;

    @Column(name = "telefono", nullable = false, length = 15)
    private String telefono;

    @Column(name= "estado", nullable = false, length = 10)
    private String estado;
}
