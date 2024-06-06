package com.turismo.turismo.interfaces;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.turismo.turismo.models.Monumento;



@Repository
public interface Imonumento extends CrudRepository< Monumento, String>{

    @Query ("SELECT m FROM Monumento m WHERE m.nombreMonumento = LIKE %?1%")
    List<Monumento>filtroMonumento(String filtro);


}
