package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.Pqrsfd;


public interface IpqrsfdService {
    public String save(Pqrsfd Pqrsfd);

    public List<Pqrsfd> findAll();

    public Optional<Pqrsfd> findOne(String id);

    public int deleteForever(String id);

    public Optional<Pqrsfd> findBynumDoc(String numDoc);

    public Object filtroPqrsfd(String filtro);
}
