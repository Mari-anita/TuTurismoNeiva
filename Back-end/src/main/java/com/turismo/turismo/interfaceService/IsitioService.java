package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;


import com.turismo.turismo.models.Sitio;

public interface IsitioService {
    public String save (Sitio Sitio);

    public List<Sitio> findAll();

    public Optional<Sitio> findOne(String id);

    public int deleteForever(String id);

    public List<Sitio> filtroSitio (String filtro);
}
