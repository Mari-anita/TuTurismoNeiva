package com.turismo.turismo.interfaces;

import org.springframework.data.repository.CrudRepository;

import com.turismo.turismo.models.Usuario;

public interface Iusuario extends CrudRepository< Usuario, String> {

}
