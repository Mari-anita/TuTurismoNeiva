package com.turismo.turismo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Autor") 
public class Autor {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idAutor", nullable = false, length = 36)
    private String idAutor;

    @Column(name = "documentoAutor", nullable = false, length = 11) 
    private String documentoAutor;

    @Column(name = "primerNombre", nullable = false, length = 36)
    private String primerNombre;

    @Column(name = "segundoNombre", nullable = false, length = 36)
    private String segundoNombre;

    @Column(name = "primerApellido", nullable = false, length = 36)
    private String primerApellido;

    @Column(name = "segundoApellido", nullable = false, length = 36)
    private String segundoApellido;

    @Column(name = "direccionAutor", nullable = false, length = 100)
    private String direccionAutor;

    @Column(name = "correoAutor", nullable = false, length = 36)
    private String correoAutor;

    @Column(name = "telefonoAutor", nullable = false, length = 36)
    private String telefonoAutor;

    public Autor() {
    }

    public Autor(String idAutor, String documentoAutor, String primerNombre, String segundoNombre,
            String primerApellido, String segundoApellido, String direccionAutor, String correoAutor,
            String telefonoAutor) {
        this.idAutor = idAutor;
        this.documentoAutor = documentoAutor;
        this.primerNombre = primerNombre;
        this.segundoNombre = segundoNombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.direccionAutor = direccionAutor;
        this.correoAutor = correoAutor;
        this.telefonoAutor = telefonoAutor;
    }

    public String getIdAutor() {
        return idAutor;
    }

    public void setIdAutor(String idAutor) {
        this.idAutor = idAutor;
    }

    public String getDocumentoAutor() {
        return documentoAutor;
    }

    public void setDocumentoAutor(String documentoAutor) {
        this.documentoAutor = documentoAutor;
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

    public String getDireccionAutor() {
        return direccionAutor;
    }

    public void setDireccionAutor(String direccionAutor) {
        this.direccionAutor = direccionAutor;
    }

    public String getCorreoAutor() {
        return correoAutor;
    }

    public void setCorreoAutor(String correoAutor) {
        this.correoAutor = correoAutor;
    }

    public String getTelefonoAutor() {
        return telefonoAutor;
    }

    public void setTelefonoAutor(String telefonoAutor) {
        this.telefonoAutor = telefonoAutor;
    }

}
