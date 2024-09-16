package com.turismo.turismo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.turismo.turismo.models.authResponse;
import com.turismo.turismo.models.loginRequest;
import com.turismo.turismo.models.registroRequest;
import com.turismo.turismo.service.authService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import java.util.Optional;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/publico/Usuario")
public class controllerPublicoUsuario {

    private final authService authService;


    @PostMapping("login/")
    public ResponseEntity<authResponse> login(@RequestBody loginRequest request) {
        authResponse response = new authResponse();
        authService.login(request);
        Optional<authResponse> authResult = authService.verificarToken(request.getToken()); //Validamos desde el loginRequest

        if(authResult.isPresent()){ //Token valido se permite el acceso
            response.setMensaje("Acceso Permitido");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else{
            response.setMensaje("ACCESO NEGADO. POR FAVOR, REGISTRESE");
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
    }

    @GetMapping("registro/")
    public ResponseEntity<authResponse> registro(@RequestBody registroRequest request) {
        var valido = true;
        authResponse response=new authResponse();
        if (authService.findBycorreoElectronico(request.getCorreoElectronico()).isPresent()) {
            valido = false;
            response.setEmailExists(true);
            response.setMensaje("El correo electronico ya existe");
            return new ResponseEntity<authResponse>(response, HttpStatus.BAD_REQUEST);
        }
        
        if (valido) {
            response = authService.registro(request);
            response.setMensaje("Se registró correctamente");
            return new ResponseEntity<authResponse>(response, HttpStatus.OK);
        } 
        return new ResponseEntity<authResponse>(response, HttpStatus.OK);
    }

    @PostMapping("verificarToken/")
    public ResponseEntity<authResponse> verificarToken(@RequestBody String Token) {
        Optional<authResponse> authResult = authService.verificarToken(Token);
        authResponse response = new authResponse();

        if (authResult.isPresent()) {
            // authResponse response = new authResponse();
            response.setMensaje("Token válido. Usuario registrado.");
            return new ResponseEntity<>(response, HttpStatus.OK);
        } else {
            // authResponse response = new authResponse();
            response.setMensaje("Token no válido. Por favor, regístrese.");
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
    }
    /*
     * RECUPERAR CONTRASEÑA
     * VER COMENTARIOS
     * REGISTRARSE
     * REGISTRAR EMPRESA
     * CONSULTAR SI EXISTE CORREO ELECTRONICO
     */
}
