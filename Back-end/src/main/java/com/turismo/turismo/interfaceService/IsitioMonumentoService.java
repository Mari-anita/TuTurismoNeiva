package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.SitioMonumento;

public interface IsitioMonumentoService {

    public String save (SitioMonumento SitioMonumento);

    public List<SitioMonumento> findAll();

    public Optional<SitioMonumento> findOne(String id);

    public int deleteForever(String id);

}
