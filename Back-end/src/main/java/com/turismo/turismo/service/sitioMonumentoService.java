package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IsitioMonumentoService;
import com.turismo.turismo.interfaces.IsitioMonumento;
import com.turismo.turismo.models.SitioMonumento;

@Service
public class sitioMonumentoService implements IsitioMonumentoService {

     @Autowired
    private IsitioMonumento data;

    @Override 
    public String save(SitioMonumento SitioMonumento) {
        data.save(SitioMonumento);
        return SitioMonumento.getIdSitioMonumento();
    }

    @Override
    public List<SitioMonumento> findAll() {
        List<SitioMonumento> listaRespuesta = (List<SitioMonumento>) data.findAll();
        return listaRespuesta;
    }

    @Override
    public Optional<SitioMonumento> findOne(String id) {
        Optional<SitioMonumento> SitioMonumento = data.findById(id);
        return SitioMonumento; 
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }

}
