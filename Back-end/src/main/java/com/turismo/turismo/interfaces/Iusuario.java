package com.turismo.turismo.interfaces;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.turismo.turismo.models.Usuario;

@Repository
public interface Iusuario extends JpaRepository<Usuario, String> {

    @Query("SELECT U FROM Usuario U WHERE U.nombreCompleto LIKE %?1% OR U.correoElectronico LIKE %?1%")
    List<Usuario> Filtros(String filtros);

    @Query("SELECT U FROM Usuario U WHERE U.nombreCompleto = :nombreCompleto")
    Optional<Usuario> findByNombreCompleto(String nombreCompleto);

    @Query("SELECT U FROM Usuario U WHERE U.correoElectronico = ?1")
    Optional<Usuario> findBycorreoElectronico(String correoElectronico);

    Optional<Usuario> findByCorreoElectronico(String correoElectronico);
}
