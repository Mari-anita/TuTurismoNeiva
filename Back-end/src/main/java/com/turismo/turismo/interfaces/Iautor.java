package com.turismo.turismo.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.turismo.turismo.models.Autor;

public interface Iautor extends CrudRepository< Autor, String>{

    @Query("SELECT a FROM Autor a WHERE a.nombreCompletoAutor LIKE %?1%")
    List<Autor> FiltrarnombreCompletoAutor(String nombreCompletoAutor );

}
