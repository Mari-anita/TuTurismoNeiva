package com.turismo.turismo.interfaces;

import java.util.Optional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.turismo.turismo.models.Empresa;

public interface Iempresa extends CrudRepository<Empresa, String> {

    @Query("SELECT e FROM Empresa e WHERE e.correoElectronico = ?1")
    Optional<Empresa> findBycorreoElectronico(String correoElectronico);

}
