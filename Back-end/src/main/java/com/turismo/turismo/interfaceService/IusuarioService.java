package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.Usuario;

public interface IusuarioService {

    public String save (Usuario Usuario);

    public List<Usuario> findAll();

    public Optional<Usuario> findOne(String id);

    public int deleteForever(String id);

    public List<Usuario> FiltrarcorreoElectronico(String correoElectronico);

    public List<Usuario> FiltrarnombreCompleto(String nombreCompleto);

    public Optional<Usuario> findBycorreoElectronico(String correoElectronico);

}
