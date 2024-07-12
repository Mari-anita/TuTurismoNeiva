package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IautorMonumentoService;
import com.turismo.turismo.interfaces.IautorMonumento;
import com.turismo.turismo.models.AutorMonumento;

@Service
public class autorMonumentoService implements IautorMonumentoService {

      @Autowired
    private IautorMonumento data;

    @Override 
    public String save(AutorMonumento AutorMonumento) {
        data.save(AutorMonumento);
        return AutorMonumento.getIdAutorMonumento();
    }

    @Override
    public List<AutorMonumento> findAll() {
        List<AutorMonumento> listaAutorMonumento = (List<AutorMonumento>) data.findAll();
        return listaAutorMonumento;
    }

    @Override
    public Optional<AutorMonumento> findOne(String id) {
        Optional<AutorMonumento> AutorMonumento = data.findById(id);
        return AutorMonumento;
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }


}
