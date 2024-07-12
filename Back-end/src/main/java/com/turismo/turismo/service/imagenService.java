package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IimagenService;
import com.turismo.turismo.interfaces.Iimagen;
import com.turismo.turismo.models.Imagen;

@Service
public class imagenService implements IimagenService {

    @Autowired
    private Iimagen data;

    @Override 
    public String save(Imagen Imagen) {
        data.save(Imagen);
        return Imagen.getIdImagen();
    }

    @Override
    public List<Imagen> findAll() {
        List<Imagen> listaAutor = (List<Imagen>) data.findAll();
        return listaAutor;
    }

    @Override
    public Optional<Imagen> findOne(String id) {
        Optional<Imagen> Imagen = data.findById(id);
        return Imagen;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }

}
