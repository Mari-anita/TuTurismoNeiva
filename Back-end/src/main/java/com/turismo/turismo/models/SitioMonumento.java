package com.turismo.turismo.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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

}
