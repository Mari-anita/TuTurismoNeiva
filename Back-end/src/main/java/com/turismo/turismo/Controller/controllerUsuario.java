package com.turismo.turismo.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/usuario/")
public class controllerUsuario {
    
    @GetMapping("profile/")
    public ResponseEntity<String> profile(@RequestBody String request){
        return new ResponseEntity<String>("ESTE END-POINT es perfil privado", HttpStatus.OK);
    }
    
}
