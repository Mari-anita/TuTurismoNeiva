package com.turismo.turismo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Pqrsfd")
public class Pqrsfd {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idPeticion", nullable = false, length = 36)
    private String idPeticion;

    @Column(name = "tipoPeticion", nullable = false, length = 36)
    private String tipoPeticion;

    @Column(name = "descripcionPeticion", nullable = false, length = 36)
    private String descripcionPeticion;

    @Column(name = "asuntoPeticion", nullable = false, length = 36)
    private String asuntoPeticion;

    @Column(name = "documentoAdjunto", nullable = false, length = 36)
    private String documentoAdjunto;

    @Column(name = "nombreRadicaPeticion", nullable = false, length = 36)
    private String nombreRadicaPeticion;

    public Pqrsfd() {
    }

    public String getIdPeticion() {
        return idPeticion;
    }

    public void setIdPeticion(String idPeticion) {
        this.idPeticion = idPeticion;
    }

    public String getTipoPeticion() {
        return tipoPeticion;
    }

    public void setTipoPeticion(String tipoPeticion) {
        this.tipoPeticion = tipoPeticion;
    }

    public String getDescripcionPeticion() {
        return descripcionPeticion;
    }

    public void setDescripcionPeticion(String descripcionPeticion) {
        this.descripcionPeticion = descripcionPeticion;
    }

    public String getAsuntoPeticion() {
        return asuntoPeticion;
    }

    public void setAsuntoPeticion(String asuntoPeticion) {
        this.asuntoPeticion = asuntoPeticion;
    }

    public String getDocumentoAdjunto() {
        return documentoAdjunto;
    }

    public void setDocumentoAdjunto(String documentoAdjunto) {
        this.documentoAdjunto = documentoAdjunto;
    }

    public String getNombreRadicaPeticion() {
        return nombreRadicaPeticion;
    }

    public void setNombreRadicaPeticion(String nombreRadicaPeticion) {
        this.nombreRadicaPeticion = nombreRadicaPeticion;
    }
}
