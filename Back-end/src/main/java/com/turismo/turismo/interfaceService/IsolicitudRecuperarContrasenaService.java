package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.solicitudRecuperarContrasena;

public interface IsolicitudRecuperarContrasenaService {

    public String save (solicitudRecuperarContrasena solicitudRecuperarContrasena);

    public List<solicitudRecuperarContrasena> findAll();

    public Optional<solicitudRecuperarContrasena> findOne(String id);

    public int delete(String id);

}
