package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.Autor;

public interface IautorService {
    public String save (Autor Autor);

    public List<Autor> findAll();

    public Optional<Autor> findOne(String id);

    public int delete(String id);
    


}
