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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/publico/Usuario")
public class controllerPublicoUsuario {

    private final authService authService;

    @GetMapping("login/")
    public ResponseEntity<authResponse> login(@RequestBody loginRequest request) {
        authResponse response = authService.login(request);
        return new ResponseEntity<authResponse>(response, HttpStatus.OK);
    }

    @PostMapping("registro/")
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

    // por seguridad no deberia está r expuesto como end-point
    // deberia ser private y ser consultado al momento de registrar el usuario
    // @GetMapping("existsBycorreoElectronico/{correoElectronico}")
    // public ResponseEntity<authResponse> existByCorreoElectronico(@PathVariable
    // String correoElectronico) {
    // authResponse response =
    // authResponse.existByCorreoElectronico(correoElectronico);
    // return new ResponseEntity<authResponse>(response, HttpStatus.OK);
    // }

    

    /*
     * RECUPERAR CONTRASEÑA
     * VER COMENTARIOS
     * REGISTRARSE
     * REGISTRAR EMPRESA
     * CONSULTAR SI EXISTE CORREO ELECTRONICO
     */
}
