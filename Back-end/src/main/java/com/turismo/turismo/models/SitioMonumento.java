package com.turismo.turismo.models;

import java.sql.Date;
import java.sql.Time;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;


@Entity(name="SitioMonumento")
public class SitioMonumento {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name="idSitioMonumento", nullable = false, length = 36)     //FILTRAR
    private String idSitioMonumento;

    @Column(name="calificacionSitioMonumento", nullable = false, length = 1)  //FILTRAR
    private char calificacionSitioMonumento;

    @Column(name="nombreSitioMonumento", nullable = false, length = 60)  //FILTRAR
    private String nombreSitioMonumento;

    @Column(name="ubicacionSitioMonumento", nullable = false, length = 60)
    private String ubicacionSitioMonumento;

    @Column(name="clasificacionSitioMonumento", nullable = false, length = 60)
    private String clasificacionSitioMonumento;

    @Column(name="direccionSitioMonumento", nullable = false, length = 100)     //FILTRAR
    private String direccionSitioMonumento;

    @Column(name="descripcionSitioMonumento", nullable = false, length = 300)
    private String descripcionSitioMonumento;

    @Column(name="detalladaSitioMonumento", nullable = false, length = 120)
    private String detalladaSitioMonumento;

    @Column(name="horarioSitioMonumento", nullable = false, length = 60)
    private Time horarioSitioMonumento;

    @Column(name="fechaCreacionSitioMonumento", nullable = false, length = 60)
    private Date fechaCreacionSitioMonumento;

    @Column(name="fechaModificacionSitioMonumento", nullable = false, length = 60)
    private Date fechaModificacionSitioMonumento;

    @ManyToOne
    @JoinColumn(name="idAutor")
    private Autor Autor;

    @Column(name="contactoSitioMonumento", nullable = false, length = 15)
    private String contactoSitioMonumento;

    @Column( name="imagen_base", nullable = true, columnDefinition = "BLOB")
	private String  imagen_base;
	@Column( name="imagen_url", nullable = true, length = 255 )
	private String imagen_url;

    public SitioMonumento() {
    }

    public SitioMonumento(String idSitioMonumento, String clasificacionSitioMonumento, String nombreSitioMonumento,
            String ubicacionSitioMonumento, char calificacionSitioMonumento, String direccionSitioMonumento,
            String descripcionSitioMonumento, String detalladaSitioMonumento, Time horarioSitioMonumento,
            Date fechaCreacionSitioMonumento, Date fechaModificacionSitioMonumento,
            com.turismo.turismo.models.Autor autor, String contactoSitioMonumento, String imagen_base,
            String imagen_url) {
        this.idSitioMonumento = idSitioMonumento;
        this.calificacionSitioMonumento = calificacionSitioMonumento;
        this.nombreSitioMonumento = nombreSitioMonumento;
        this.ubicacionSitioMonumento = ubicacionSitioMonumento;
        this.clasificacionSitioMonumento = clasificacionSitioMonumento;
        this.direccionSitioMonumento = direccionSitioMonumento;
        this.descripcionSitioMonumento = descripcionSitioMonumento;
        this.detalladaSitioMonumento = detalladaSitioMonumento;
        this.horarioSitioMonumento = horarioSitioMonumento;
        this.fechaCreacionSitioMonumento = fechaCreacionSitioMonumento;
        this.fechaModificacionSitioMonumento = fechaModificacionSitioMonumento;
        Autor = autor;
        this.contactoSitioMonumento = contactoSitioMonumento;
        this.imagen_base = "data:image/jpeg;base64,"+ imagen_base;
        this.imagen_url = imagen_url;
    }

    public String getIdSitioMonumento() {
        return idSitioMonumento;
    }

    public void setIdSitioMonumento(String idSitioMonumento) {
        this.idSitioMonumento = idSitioMonumento;
    }

    public String getClasificacionSitioMonumento() {
        return clasificacionSitioMonumento;
    }

    public void setClasificacionSitioMonumento(String clasificacionSitioMonumento) {
        this.clasificacionSitioMonumento = clasificacionSitioMonumento;
    }

    public String getNombreSitioMonumento() {
        return nombreSitioMonumento;
    }

    public void setNombreSitioMonumento(String nombreSitioMonumento) {
        this.nombreSitioMonumento = nombreSitioMonumento;
    }

    public String getUbicacionSitioMonumento() {
        return ubicacionSitioMonumento;
    }

    public void setUbicacionSitioMonumento(String ubicacionSitioMonumento) {
        this.ubicacionSitioMonumento = ubicacionSitioMonumento;
    }

    public char getCalificacionSitioMonumento() {
        return calificacionSitioMonumento;
    }

    public void setCalificacionSitioMonumento(char calificacionSitioMonumento) {
        this.calificacionSitioMonumento = calificacionSitioMonumento;
    }

    public String getDireccionSitioMonumento() {
        return direccionSitioMonumento;
    }

    public void setDireccionSitioMonumento(String direccionSitioMonumento) {
        this.direccionSitioMonumento = direccionSitioMonumento;
    }

    public String getDescripcionSitioMonumento() {
        return descripcionSitioMonumento;
    }

    public void setDescripcionSitioMonumento(String descripcionSitioMonumento) {
        this.descripcionSitioMonumento = descripcionSitioMonumento;
    }

    public String getDetalladaSitioMonumento() {
        return detalladaSitioMonumento;
    }

    public void setDetalladaSitioMonumento(String detalladaSitioMonumento) {
        this.detalladaSitioMonumento = detalladaSitioMonumento;
    }

    public Time getHorarioSitioMonumento() {
        return horarioSitioMonumento;
    }

    public void setHorarioSitioMonumento(Time horarioSitioMonumento) {
        this.horarioSitioMonumento = horarioSitioMonumento;
    }

    public Date getFechaCreacionSitioMonumento() {
        return fechaCreacionSitioMonumento;
    }

    public void setFechaCreacionSitioMonumento(Date fechaCreacionSitioMonumento) {
        this.fechaCreacionSitioMonumento = fechaCreacionSitioMonumento;
    }

    public Date getFechaModificacionSitioMonumento() {
        return fechaModificacionSitioMonumento;
    }

    public void setFechaModificacionSitioMonumento(Date fechaModificacionSitioMonumento) {
        this.fechaModificacionSitioMonumento = fechaModificacionSitioMonumento;
    }

    public Autor getAutor() {
        return Autor;
    }

    public void setAutor(Autor autor) {
        Autor = autor;
    }

    public String getContactoSitioMonumento() {
        return contactoSitioMonumento;
    }

    public void setContactoSitioMonumento(String contactoSitioMonumento) {
        this.contactoSitioMonumento = contactoSitioMonumento;
    }

    public String getImagen_base() {
        return imagen_base;
    }

    public void setImagen_base(String imagen_base) {
        this.imagen_base = imagen_base;
    }

    public String getImagen_url() {
        return imagen_url;
    }

    public void setImagen_url(String imagen_url) {
        this.imagen_url =  imagen_url;
    }

    
    
}
