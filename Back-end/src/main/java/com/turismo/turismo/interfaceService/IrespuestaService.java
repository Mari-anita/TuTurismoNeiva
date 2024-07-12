package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.Respuesta;

public interface IrespuestaService {
    
    public String save (Respuesta Respuesta);

    public List<Respuesta> findAll();

    public Optional<Respuesta> findOne(String id);

    public int deleteForever(String id);

}
