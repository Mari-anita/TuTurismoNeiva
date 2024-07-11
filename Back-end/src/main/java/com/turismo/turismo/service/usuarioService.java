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
    public List<Usuario> findAll() {  ///MOSTRAR TODA LA LISTA
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
    public int deleteForever(String id) {  //ELIMINAR POR ID
        data.deleteById(id);
        return 1;
    }

    @Override
    public List<Usuario> FiltrarcorreoElectronico(String correoElectronico) {  //FILTRAR POR CORREO
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'FiltrarcorreoElectronico'");
    }

    @Override
    public List<Usuario> FiltrarnombreCompleto(String nombreCompleto) {  //FILTRAR POR NOMBRE COMPLETO
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'FiltrarnombreCompleto'");
    }

    @Override
    public Optional<Usuario> findBycorreoElectronico(String correoElectronico) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findBycorreoElectronico'");
    }
}
