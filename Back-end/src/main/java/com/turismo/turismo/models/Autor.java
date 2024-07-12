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
@Entity(name = "Autor") 
public class Autor {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idAutor", nullable = false, length = 36)
    private String idAutor;

    @Column(name = "nombreCompletoAutor", nullable = false, length = 60)
    private String nombreCompletoAutor;

    @Column(name = "fechaNacimiento", nullable = false, length = 36)
    private Date fechaNacimiento;

    @Column(name = "fechaMuerte", nullable = false, length = 36)
    private Date fechaMuerte;

    @Column(name = "bibliografiaAutor", nullable = false, length = 200)
    private String bibliografiaAutor;

    @Column(name = "imagenAutor", nullable = false, length = 36)
    private String imagenAutor;

}
