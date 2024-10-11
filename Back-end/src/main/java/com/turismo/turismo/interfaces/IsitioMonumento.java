package com.turismo.turismo.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.turismo.turismo.models.SitioMonumento;

@Repository
public interface IsitioMonumento extends CrudRepository<SitioMonumento, String> {

    // Filtrar por nombre del sitio o monumento
    @Query("SELECT SM FROM SitioMonumento SM WHERE SM.nombreSitioMonumento LIKE %?1%")
    List<SitioMonumento> FiltrarnombreSitioMonumento(String nombreSitioMonumento);

    // Filtrar por dirección del sitio o monumento
    @Query("SELECT SM FROM SitioMonumento SM WHERE SM.direccionSitioMonumento LIKE %?1%")
    List<SitioMonumento> FiltrardireccionSitioMonumento(String direccionSitioMonumento);
}
