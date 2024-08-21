package com.turismo.turismo.interfaces;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.turismo.turismo.models.Usuario;

public interface Iusuario extends CrudRepository<Usuario, String> {

    @Query("SELECT U FROM Usuario U WHERE U.nombreCompleto LIKE %?1% OR U.correoElectronico LIKE %?1%")
    List<Usuario> Filtros(String filtros);

    @Query("SELECT U FROM Usuario U WHERE U.correoElectronico = ?1")
    Optional<Usuario> findBycorreoElectronico(String correoElectronico);



}
