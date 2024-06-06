package com.turismo.turismo.interfaces;


import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.turismo.turismo.models.Sitio;

@Repository
public interface Isitio extends CrudRepository< Sitio, String>  {
    @Query ("SELECT s FROM Sitio s WHERE s.nombreSitio LIKE %?1%")
    List<Sitio>filtroSitio(String filtro);


}
