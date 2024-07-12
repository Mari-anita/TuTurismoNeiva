package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IautorService;
import com.turismo.turismo.interfaces.Iautor;
import com.turismo.turismo.models.Autor;

@Service
public class autorService implements IautorService {

    @Autowired
    private Iautor data;

    @Override 
    public String save(Autor Autor) {
        data.save(Autor);
        return Autor.getIdAutor();
    }

    @Override
    public List<Autor> findAll() {
        List<Autor> listaAutor = (List<Autor>) data.findAll();
        return listaAutor;
    }

    @Override
    public Optional<Autor> findOne(String id) {
        Optional<Autor> Autor = data.findById(id);
        return Autor;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}
