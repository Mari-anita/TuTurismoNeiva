package com.turismo.turismo.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turismo.turismo.models.authResponse;
import com.turismo.turismo.models.loginRequest;
import com.turismo.turismo.models.registroRequest;
import com.turismo.turismo.service.authService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/public/usuario")
public class controllerUsuarioPublico {
    
    private final authService authService;

    @PostMapping("login/")
    public ResponseEntity<authResponse> login(@RequestBody loginRequest request){
        authResponse response=authService.login(request);
        return new ResponseEntity<authResponse>(response, HttpStatus.OK);
    }

    @PostMapping("registro/")
    public ResponseEntity<authResponse> registro(@RequestBody registroRequest request){
        authResponse response=authService.registro(request);
        return new ResponseEntity<authResponse>(response, HttpStatus.OK);
    }
    
    
}
