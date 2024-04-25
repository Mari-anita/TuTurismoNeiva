package com.turismo.turismo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Sitio")
public class Sitio {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idSitio", nullable = false, length = 36)
    private String idSitio;

    @Column(name = "nombreSitio", nullable = false, length = 36)
    private String nombreSitio;

    @Column(name = "ubicacionSitio", nullable = false, length = 36)
    private String ubicacionSitio;

    @Column(name = "horaSitio", nullable = false, length = 36)
    private String horaSitio;

    @Column(name = "categoriaSitio", nullable = false, length = 36)
    private String categoriaSitio;

    public Sitio() {
    }

    public Sitio(String idSitio, String nombreSitio, String ubicacionSitio, String horaSitio, String categoriaSitio) {
        this.idSitio = idSitio;
        this.nombreSitio = nombreSitio;
        this.ubicacionSitio = ubicacionSitio;
        this.horaSitio = horaSitio;
        this.categoriaSitio = categoriaSitio;
    }

    public String getIdSitio() {
        return idSitio;
    }

    public void setIdSitio(String idSitio) {
        this.idSitio = idSitio;
    }

    public String getNombreSitio() {
        return nombreSitio;
    }

    public void setNombreSitio(String nombreSitio) {
        this.nombreSitio = nombreSitio;
    }

    public String getUbicacionSitio() {
        return ubicacionSitio;
    }

    public void setUbicacionSitio(String ubicacionSitio) {
        this.ubicacionSitio = ubicacionSitio;
    }

    public String getHoraSitio() {
        return horaSitio;
    }

    public void setHoraSitio(String horaSitio) {
        this.horaSitio = horaSitio;
    }

    public String getCategoriaSitio() {
        return categoriaSitio;
    }

    public void setCategoriaSitio(String categoriaSitio) {
        this.categoriaSitio = categoriaSitio;
    }

}
