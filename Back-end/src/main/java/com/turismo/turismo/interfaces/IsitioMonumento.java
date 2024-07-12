package com.turismo.turismo.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.turismo.turismo.models.SitioMonumento;

public interface IsitioMonumento extends CrudRepository< SitioMonumento, String> {

    @Query("SELECT SM FROM SitioMonumento SM WHERE SM.nombreSitioMonumento LIKE %?1%")
    List<SitioMonumento> FiltrarnombreSitioMonumento(String nombreSitioMonumento);

    @Query("SELECT SM FROM SitioMonumento SM WHERE SM.direccionSitioMonumento LIKE %?1%")
    List<SitioMonumento> FiltrardireccionSitioMonumento(String direccionSitioMonumento);
}
