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

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name="SitioMonumento")
public class SitioMonumento {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name="idSitioMonumento", nullable = false, length = 36)
    private String idSitioMonumento;

    @Column(name="nombreSitioMonumento", nullable = false, length = 60)
    private String nombreSitioMonumento;

    @Column(name="ubicacionSitioMonumento", nullable = false, length = 60)
    private String ubicacionSitioMonumento;

    @Column(name="calificacionSitioMonumento", nullable = false, length = 60)
    private String calificacionSitioMonumento;

    @Column(name="direccionSitioMonumento", nullable = false, length = 100)
    private String direccionSitioMonumento;

    @Column(name="descripcionSitioMonumento", nullable = false, length = 60)
    private String descripcionSitioMonumento;

    @Column(name="detalladaSitioMonumento", nullable = false, length = 120)
    private String detalladaSitioMonumento;

    @Column(name="horarioSitioMonumento", nullable = false, length = 60)
    private String horarioSitioMonumento;

    @Column(name="fechaCreacionSitioMonumento", nullable = false, length = 60)
    private Date fechaCreacionSitioMonumento;

    @Column(name="fechaModificacionSitioMonumento", nullable = false, length = 60)
    private Date fechaModificacionSitioMonumento;

    @ManyToOne
    @JoinColumn(name="idAutor")
    private Autor Autor;

    @Column(name="contactoSitioMonumento", nullable = false, length = 15)
    private Date contactoSitioMonumento;

}
