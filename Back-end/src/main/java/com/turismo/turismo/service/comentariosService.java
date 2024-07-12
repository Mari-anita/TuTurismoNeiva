package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.turismo.turismo.interfaceService.IcomentariosService;
import com.turismo.turismo.interfaces.Icomentarios;
import com.turismo.turismo.models.Comentarios;

@Service
public class comentariosService implements IcomentariosService {

    @Autowired
    private Icomentarios data;

    @Override 
    public String save(Comentarios Comentarios) {
        data.save(Comentarios);
        return Comentarios.getIdComentarios();
    }

    @Override
    public List<Comentarios> findAll() {
        List<Comentarios> listaComentarios = (List<Comentarios>) data.findAll();
        return listaComentarios;
    }

    @Override
    public Optional<Comentarios> findOne(String id) {
        Optional<Comentarios> Comentarios = data.findById(id);
        return Comentarios;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }

}
