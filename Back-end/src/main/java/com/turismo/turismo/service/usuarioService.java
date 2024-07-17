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

    @Override 
    public String save(Usuario Usuario) {
        data.save(Usuario);
        return Usuario.getIdUsuario();
    }

    @Override
    public List<Usuario> findAll() {  ///MOSTRAR TODA LA LISTA
        List<Usuario> ListaUsuario = (List<Usuario>) data.findAll();
        return ListaUsuario;
    }

    @Override
    public Optional<Usuario> findOne(String id) {
        Optional<Usuario> Usuario = data.findById(id);
        return Usuario; 
    }

    @Override
    public List<Usuario> FiltrarcorreoElectronico(String correoElectronico) {  //FILTRAR POR CORREO
        List<Usuario> ListaUsuario = data.FiltrarcorreoElectronico(correoElectronico);
        return ListaUsuario;
    }

    @Override
    public List<Usuario> FiltrarnombreCompleto(String nombreCompleto) {  //FILTRAR POR NOMBRE COMPLETO
        List<Usuario> ListaUsuario = data.FiltrarnombreCompleto(nombreCompleto);
        return ListaUsuario;
    }

    @Override
    public Optional<Usuario> findBycorreoElectronico(String correoElectronico) {
        return data.findBycorreoElectronico(correoElectronico);
    }
}
