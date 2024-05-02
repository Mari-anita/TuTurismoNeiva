package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IsitioService;
import com.turismo.turismo.interfaces.Isitio;
import com.turismo.turismo.models.Sitio;

@Service
public class sitioService implements IsitioService {

    @Autowired
    private Isitio data;

    @SuppressWarnings("null")
    @Override 
    public String save(Sitio Sitio) {
        data.save(Sitio);
        return Sitio.getIdSitio();
    }

    @Override
    public List<Sitio> findAll() {
        List<Sitio> listaSitio = (List<Sitio>) data.findAll();
        return listaSitio;
    }

    @Override
    public Optional<Sitio> findOne(String id) {
        @SuppressWarnings("null")
        Optional<Sitio> Sitio = data.findById(id);
        return Sitio; 
    }

    @Override
    public int delete(String id) {
        data.deleteById(id);
        return 1;
    }
}
