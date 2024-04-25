package com.turismo.turismo.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity(name = "Monumento") 
public class Monumento {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idMonumento", nullable = false, length = 36)
    private String idMonumento;

    @Column(name = "nombreMonumento", nullable = false, length = 36)
    private String nombreMonumento;

    @Column(name = "fechaMonumento", nullable = false, length = 36)
    private Date  fechaMonumento;

    @Column(name = "ubicacionMonumento", nullable = false, length = 36)
    private String  ubicacionMonumento;

    @Column(name = "calificacionMonumento", nullable = false, length = 36)
    private Date  calificacionMonumento;

    public Monumento() {
    }

    public Monumento(String idMonumento, String nombreMonumento, Date fechaMonumento, String ubicacionMonumento,
            Date calificacionMonumento) {
        this.idMonumento = idMonumento;
        this.nombreMonumento = nombreMonumento;
        this.fechaMonumento = fechaMonumento;
        this.ubicacionMonumento = ubicacionMonumento;
        this.calificacionMonumento = calificacionMonumento;
    }

    public String getIdMonumento() {
        return idMonumento;
    }

    public void setIdMonumento(String idMonumento) {
        this.idMonumento = idMonumento;
    }

    public String getNombreMonumento() {
        return nombreMonumento;
    }

    public void setNombreMonumento(String nombreMonumento) {
        this.nombreMonumento = nombreMonumento;
    }

    public Date getFechaMonumento() {
        return fechaMonumento;
    }

    public void setFechaMonumento(Date fechaMonumento) {
        this.fechaMonumento = fechaMonumento;
    }

    public String getUbicacionMonumento() {
        return ubicacionMonumento;
    }

    public void setUbicacionMonumento(String ubicacionMonumento) {
        this.ubicacionMonumento = ubicacionMonumento;
    }

    public Date getCalificacionMonumento() {
        return calificacionMonumento;
    }

    public void setCalificacionMonumento(Date calificacionMonumento) {
        this.calificacionMonumento = calificacionMonumento;
    }

}
