package com.turismo.turismo.interfaces;

import org.springframework.data.repository.CrudRepository;

import com.turismo.turismo.models.RecuperarContrasena;

public interface IPasswordResetTokenRepository extends CrudRepository<RecuperarContrasena, Long> {
    RecuperarContrasena findByToken(String token);
}
