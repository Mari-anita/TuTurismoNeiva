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
    public List<SitioMonumento> consultarSitioMonumento() {
        return (List<SitioMonumento>) data.findAll();
    }

    @Override
    public String save(SitioMonumento SitioMonumento) {
        data.save(SitioMonumento);
        return SitioMonumento.getIdSitioMonumento();
    }

    @Override
    public List<SitioMonumento> findAll() {
        List<SitioMonumento> ListaSitioMonumento = (List<SitioMonumento>) data.findAll();
        return ListaSitioMonumento;
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

    @Override
    public List<SitioMonumento> FiltrarnombreSitioMonumento(String nombreSitioMonumento) {
        List<SitioMonumento> ListaSitioMonumento = data.FiltrarnombreSitioMonumento(nombreSitioMonumento);
        return ListaSitioMonumento;
    }

    @Override
    public List<SitioMonumento> FiltrardireccionSitioMonumento(String direccionSitioMonumento) {
        List<SitioMonumento> ListaSitioMonumento = data.FiltrardireccionSitioMonumento(direccionSitioMonumento);
        return ListaSitioMonumento;
    }

    @Override
    public int guardarImagenJson(SitioMonumento SitioMonumento) {
        int res = 0;
        SitioMonumento = data.save(SitioMonumento);
        if (SitioMonumento.equals(null)) {
            res = 1;
        }
        return res;
    }

}
