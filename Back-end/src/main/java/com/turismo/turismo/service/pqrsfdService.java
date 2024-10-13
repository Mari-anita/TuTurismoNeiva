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
    public String save(Pqrsfd Pqrsfd) {
        data.save(Pqrsfd);
        return Pqrsfd.getIdPeticion();
    }

    @Override
    public List<Pqrsfd> findAll() {
        List<Pqrsfd> listaPqrsfd = (List<Pqrsfd>) data.findAll();
        return listaPqrsfd;
    }

    @Override
    public Optional<Pqrsfd> findOne(String id) {
        Optional<Pqrsfd> Pqrsfd = data.findById(id);
        return Pqrsfd;
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
	public List<Pqrsfd> filtroPqrsfd(String filtro) {
		List<Pqrsfd> listaPqrsfd=data.filtroPqrsfd(filtro);
		return listaPqrsfd;
	}

}
