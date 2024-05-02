package com.turismo.turismo.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

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

    @Column(name = "primerNombre", nullable = false, length = 36)
    private String primerNombre;

    @Column(name = "segundoNombre", nullable = false, length = 36)
    private String segundoNombre;

    @Column(name = "primerApellido", nullable = false, length = 36)
    private String primerApellido;

    @Column(name = "segundoApellido", nullable = false, length = 36)
    private String segundoApellido;

    @Column(name = "tipoUsuario", nullable = false, length = 36)
    private String tipoUsuario;

    @Column(name = "Genero", nullable = false, length = 36)
    private String Genero;

    @Column(name = "correoElectronico", nullable = false, length = 36)
    private String correoElectronico;

    @Column(name = "Contraseña", nullable = false, length = 36)
    private String Contraseña;

    @Column(name = "Telefono", nullable = false, length = 36)
    private String Telefono;

    @Column(name = "fechaNacimiento", nullable = false, length = 36)
    private Date fechaNacimiento;

    public Usuario() {
    }

    public Usuario(String idUsuario, String tipoDocumento, String documentoUsuario, String primerNombre,
            String segundoNombre, String primerApellido, String segundoApellido, String tipoUsuario, String genero,
            String correoElectronico, String contraseña, String telefono, Date fechaNacimiento) {
        this.idUsuario = idUsuario;
        this.tipoDocumento = tipoDocumento;
        this.documentoUsuario = documentoUsuario;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.tipoUsuario = tipoUsuario;
        Genero = genero;
        this.correoElectronico = correoElectronico;
        Contraseña = contraseña;
        Telefono = telefono;
        this.fechaNacimiento = fechaNacimiento;
    }

    public String getIdUsuario() {
        return idUsuario;
    }

    public void setIdUsuario(String idUsuario) {
        this.idUsuario = idUsuario;
    }

    public String getTipoDocumento() {
        return tipoDocumento;
    }

    public void setTipoDocumento(String tipoDocumento) {
        this.tipoDocumento = tipoDocumento;
    }

    public String getDocumentoUsuario() {
        return documentoUsuario;
    }

    public void setDocumentoUsuario(String documentoUsuario) {
        this.documentoUsuario = documentoUsuario;
    }

    public String getPrimerNombre() {
        return primerNombre;
    }

    public void setPrimerNombre(String primerNombre) {
        this.primerNombre = primerNombre;
    }

    public String getSegundoNombre() {
        return segundoNombre;
    }

    public void setSegundoNombre(String segundoNombre) {
        this.segundoNombre = segundoNombre;
    }

    public String getPrimerApellido() {
        return primerApellido;
    }

    public void setPrimerApellido(String primerApellido) {
        this.primerApellido = primerApellido;
    }

    public String getSegundoApellido() {
        return segundoApellido;
    }

    public void setSegundoApellido(String segundoApellido) {
        this.segundoApellido = segundoApellido;
    }

    public String getTipoUsuario() {
        return tipoUsuario;
    }

    public void setTipoUsuario(String tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }

    public String getGenero() {
        return Genero;
    }

    public void setGenero(String genero) {
        Genero = genero;
    }

    public String getCorreoElectronico() {
        return correoElectronico;
    }

    public void setCorreoElectronico(String correoElectronico) {
        this.correoElectronico = correoElectronico;
    }

    public String getContraseña() {
        return Contraseña;
    }

    public void setContraseña(String contraseña) {
        Contraseña = contraseña;
    }

    public String getTelefono() {
        return Telefono;
    }

    public void setTelefono(String telefono) {
        Telefono = telefono;
    }

    public Date getFechaNacimiento() {
        return fechaNacimiento;
    }

    public void setFechaNacimiento(Date fechaNacimiento) {
        this.fechaNacimiento = fechaNacimiento;
    }
}
