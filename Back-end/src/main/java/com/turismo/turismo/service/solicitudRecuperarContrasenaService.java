package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IsolicitudRecuperarContrasenaService;
import com.turismo.turismo.interfaces.IsolicitudRecuperarContrasena;
import com.turismo.turismo.models.solicitudRecuperarContrasena;

@Service
public class solicitudRecuperarContrasenaService implements IsolicitudRecuperarContrasenaService {

    @Autowired
    private IsolicitudRecuperarContrasena data;

    @Override 
    public String save(solicitudRecuperarContrasena solicitudRecuperarContrasena) {
        data.save(solicitudRecuperarContrasena);
        return solicitudRecuperarContrasena.getIdRestablecer();
    }

    @Override
    public List<solicitudRecuperarContrasena> findAll() {
        List<solicitudRecuperarContrasena> listaRestablecer = (List<solicitudRecuperarContrasena>) data.findAll();
        return listaRestablecer;
    }

    @Override
    public Optional<solicitudRecuperarContrasena> findOne(String id) {
        Optional<solicitudRecuperarContrasena> restablecer = data.findById(id);
        return restablecer;
    }

    @Override
    public int delete(String id) {
        data.deleteById(id);
        return 1;
    }

}
