package com.turismo.turismo.Controller;

import org.springframework.security.core.Authentication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turismo.turismo.models.Usuario;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/usuario/")
public class controllerUsuario {
    
    @GetMapping("profile/")
    public ResponseEntity<Usuario> getProfile() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Usuario usuario = (Usuario) auth.getPrincipal();
        return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }
    /* 
    @GetMapping("profile/")
    public ResponseEntity<String> profile(@RequestBody String request){
        return new ResponseEntity<String>("ESTE END-POINT es perfil privado", HttpStatus.OK);
    }*/


    /*
     * CAMBIAR CONTRASEÑA
     * ACTUALIZAR PERFIL
     * REGISTRO INFORMACION SITIOS SOLO ADMIN
     * PQRS
     * COMENTARIO
    */
    
}
