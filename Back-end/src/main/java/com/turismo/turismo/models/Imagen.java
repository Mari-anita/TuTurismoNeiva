package com.turismo.turismo.models;

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
@Entity(name= "Imagen")
public class Imagen {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idImagen", nullable = false, length = 36)
    private String idImagen;

    @ManyToOne
    @JoinColumn(name ="idSitioMonumento")
    private SitioMonumento SitioMonumento;

    @Column(name = "imagen", nullable = false, length = 200)
    private String imagen;

}
