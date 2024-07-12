package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.AutorMonumento;

public interface IautorMonumentoService {
     public String save (AutorMonumento AutorMonumento);

    public List<AutorMonumento> findAll();

    public Optional<AutorMonumento> findOne(String id);

    public int deleteForever(String id);

}
