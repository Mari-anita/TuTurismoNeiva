package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IpqrsfdService;
import com.turismo.turismo.interfaces.Ipqrsfd;
import com.turismo.turismo.models.Pqrsfd;

@Service
public class pqrsfdService implements IpqrsfdService {

    @Autowired
    private Ipqrsfd data;

    @Override
    public String save(Pqrsfd pqrsfd) {
        data.save(pqrsfd);
        return pqrsfd.getIdPeticion();
    }

    @Override
    public List<Pqrsfd> findAll() {
        return (List<Pqrsfd>) data.findAll();
    }

    @Override
    public Optional<Pqrsfd> findOne(String id) {
        return data.findById(id);
    }

    @Override
    public int deleteForever(String id) {
        data.deleteById(id);
        return 1;
    }

    @Override
    public Optional<Pqrsfd> findBynumDoc(String numDoc) {
        return data.findBynumDoc(numDoc);
    }

    @Override
    public Optional<Pqrsfd> findByCodigo(String codigo) {  // Método agregado
        return data.findByCode(codigo);
    }
}
