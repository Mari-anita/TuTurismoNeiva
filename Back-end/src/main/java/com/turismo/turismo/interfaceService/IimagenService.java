package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.Imagen;

public interface IimagenService {
    public String save (Imagen Imagen);

    public List<Imagen> findAll();

    public Optional<Imagen> findOne(String id);

    public int deleteForever(String id);
    

}
