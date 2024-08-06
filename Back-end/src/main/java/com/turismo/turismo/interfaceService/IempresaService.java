package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.Empresa;

public interface IempresaService {
    public String save (Empresa Empresa);

    public List<Empresa> findAll();

    public Optional<Empresa> findOne(String id);

    public int deleteForever(String id);

}
