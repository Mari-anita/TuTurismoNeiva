package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IrespuestaService;
import com.turismo.turismo.interfaces.Irespuesta;
import com.turismo.turismo.models.Respuesta;

@Service
public class respuestaService implements IrespuestaService {

    @Autowired
    private Irespuesta data;

    @SuppressWarnings("null")
    @Override 
    public String save(Respuesta Respuesta) {
        data.save(Respuesta);
        return Respuesta.getIdRespuesta();
    }

    @Override
    public List<Respuesta> findAll() {
        List<Respuesta> listaRespuesta = (List<Respuesta>) data.findAll();
        return listaRespuesta;
    }

    @Override
    public Optional<Respuesta> findOne(String id) {
        @SuppressWarnings("null")
        Optional<Respuesta> Respuesta = data.findById(id);
        return Respuesta; 
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }

}
