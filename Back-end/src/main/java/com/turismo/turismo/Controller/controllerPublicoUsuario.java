package com.turismo.turismo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/api/v1/publico/usuario")
public class controllerPublicoUsuario {
    
    @GetMapping("login/")
    public ResponseEntity<String> login(@RequestBody String request){
        return new ResponseEntity<>("ESTE END-POINT ES PUBLICO", HttpStatus.OK);
    }
    @PostMapping("registro/")
    public ResponseEntity<String> registro(@RequestBody String request){
        return new ResponseEntity<>("ESTE END-POINT ES PUBLICO", HttpStatus.OK);
    }
}
