package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.ImonumentoService;
import com.turismo.turismo.interfaces.Imonumento;
import com.turismo.turismo.models.Monumento;

@Service 
public class monumentoService implements ImonumentoService  {

    @Autowired
    private Imonumento data;

    @Override 
    public String save(Monumento Monumento) {
        data.save(Monumento);
        return Monumento.getIdMonumento();
    }

    @Override
    public List<Monumento> findAll() {
        List<Monumento> listaMonumento = (List<Monumento>) data.findAll();
        return listaMonumento;
    }

    @Override
    public Optional<Monumento> findOne(String id) {
        @SuppressWarnings("null")
        Optional<Monumento> Monumento = data.findById(id);
        return Monumento; 
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }
}
