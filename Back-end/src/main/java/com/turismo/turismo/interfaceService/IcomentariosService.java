package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.Comentarios;

public interface IcomentariosService {

    public String save (Comentarios Comentarios);

    public List<Comentarios> findAll();

    public Optional<Comentarios> findOne(String id);

    public int deleteForever(String id);

}
