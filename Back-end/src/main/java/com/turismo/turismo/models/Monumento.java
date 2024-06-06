package com.turismo.turismo.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
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

    @Column(name= "Estado", nullable = false,length = 1)
    private String Estado;

}
