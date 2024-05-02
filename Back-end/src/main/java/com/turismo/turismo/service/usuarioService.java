package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IusuarioService;
import com.turismo.turismo.interfaces.Iusuario;
import com.turismo.turismo.models.Usuario;

@Service
public class usuarioService implements IusuarioService {

    @Autowired
    private Iusuario data;

    @SuppressWarnings("null")
    @Override 
    public String save(Usuario Usuario) {
        data.save(Usuario);
        return Usuario.getIdUsuario();
    }

    @Override
    public List<Usuario> findAll() {
        List<Usuario> listaUsuario = (List<Usuario>) data.findAll();
        return listaUsuario;
    }

    @Override
    public Optional<Usuario> findOne(String id) {
        @SuppressWarnings("null")
        Optional<Usuario> Usuario = data.findById(id);
        return Usuario; 
    }

    @Override
    public int delete(String id) {
        data.deleteById(id);
        return 1;
    }
}
