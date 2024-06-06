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

    @Column(name = "documentoAutor", nullable = false, length = 11) 
    private String documentoAutor;

    @Column(name = "primerNombre", nullable = false, length = 36)
    private String primerNombre;

    @Column(name = "segundoNombre", nullable = false, length = 36)
    private String segundoNombre;

    @Column(name = "primerApellido", nullable = false, length = 36)
    private String primerApellido;

    @Column(name = "segundoApellido", nullable = false, length = 36)
    private String segundoApellido;

    @Column(name = "direccionAutor", nullable = false, length = 100)
    private String direccionAutor;

    @Column(name = "correoAutor", nullable = false, length = 36)
    private String correoAutor;

    @Column(name = "telefonoAutor", nullable = false, length = 36)
    private String telefonoAutor;

}
