package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.Usuario;
import com.turismo.turismo.models.authResponse;
import com.turismo.turismo.models.registroRequest;

public interface IusuarioService {

    public String save (Usuario Usuario);

    public List<Usuario> findAll();

    public Optional<Usuario> findOne(String id);

    public List<Usuario> Filtros(String filtros);

    public Optional<Usuario> findBycorreoElectronico(String correoElectronico);

    public boolean delete(String id);

    public authResponse registro(registroRequest request);

}
