package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.Monumento;

public interface ImonumentoService {
    public String save (Monumento Monumento);

    public List<Monumento> findAll();

    public Optional<Monumento> findOne(String id);

    public List<Monumento> filtroMonumento(String filtro);

    public int deleteForever(String id);

}
