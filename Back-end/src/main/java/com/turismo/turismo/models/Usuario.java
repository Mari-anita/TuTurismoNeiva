package com.turismo.turismo.models;

import java.sql.Date;

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

    @Column(name = "documentoUsuario", nullable = false, length = 11)
    private String documentoUsuario;

    @Column(name = "Nombres", nullable = false, length = 36)
    private String Nombres;

    @Column(name = "Apellidos", nullable = false, length = 36)
    private String Apellidos;

    @Column(name = "tipoUsuario", nullable = false, length = 36)
    private String tipoUsuario;

    @Column(name = "Genero", nullable = false, length = 36)
    private String Genero;

    @Column(name = "correoElectronico", nullable = false, length = 36)
    private String correoElectronico;

    @Column(name = "Contrasena", nullable = false, length = 36)
    private String Contrasena;

    @Column(name = "confirmarContrasena", nullable = false, length = 36)
    private String confirmarContrasena;

    @Column(name = "Telefono", nullable = false, length = 36)
    private String Telefono;

    @Column(name = "fechaNacimiento", nullable = false, length = 36)
    private Date fechaNacimiento;

    @Column(name= "Estado", nullable = false, length = 36)
    private String Estado;
}
