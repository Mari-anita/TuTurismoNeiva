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
@Entity(name =" AutorMonumento")
public class AutorMonumento {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idAutorMonumento", nullable = false, length = 36)
    private String idAutorMonumento;

    @ManyToOne
    @JoinColumn(name ="idAutor")
    private Autor Autor;

    @ManyToOne
    @JoinColumn(name ="idSitioMonumento")
    private SitioMonumento SitioMonumento;
}
