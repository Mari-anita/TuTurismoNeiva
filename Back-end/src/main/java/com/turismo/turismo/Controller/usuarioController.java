package com.turismo.turismo.Controller;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turismo.turismo.interfaceService.IusuarioService;
import com.turismo.turismo.models.Usuario;
import com.turismo.turismo.models.mensaje;
import com.turismo.turismo.service.emailService;

@RequestMapping("/api/v1/Usuario")
@RestController
public class usuarioController {

    @Autowired
    private IusuarioService usuarioService;

    @Autowired
    private emailService emailService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@RequestBody Usuario Usuario) {

        // VALIDACIONES

        if (Usuario.getNombreCompleto().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Usuario.getCorreoElectronico().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }
        
        String correoElectronico = Usuario.getCorreoElectronico();
        // Expresión regular para validar el correo electrónico
        String emailRegex = "^[^\\s@]+@[^\\s@]+\\.(com|es|org|net)$";
        Pattern pattern = Pattern.compile(emailRegex);
        Matcher matcher = pattern.matcher(correoElectronico);

        if (!matcher.matches()) {
            return new ResponseEntity<>("Verifica tu correo electrónico parece no válido", HttpStatus.BAD_REQUEST);
        }

        // VERIFICA SI EL CORREO ELECTRONICO YA SÉ ENCUENTRA EN NUESTRA BASE DE DATOS
        if (usuarioService.findBycorreoElectronico(Usuario.getCorreoElectronico()).isPresent()) {
            return new ResponseEntity<>("El correo electrónico ya está registrado", HttpStatus.BAD_REQUEST);
        }

        if (Usuario.getContra().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Usuario.getCoContra().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (!Usuario.getContra().equals(Usuario.getCoContra())) {
            return new ResponseEntity<>("Las contraseñas no coinciden", HttpStatus.BAD_REQUEST);
        }
        var mensajeContrasena = validarContrasena(Usuario.getContra());
        if (mensajeContrasena.getEstado() == "error") {
            return new ResponseEntity<>(mensajeContrasena.getMensaje(), HttpStatus.BAD_REQUEST);
        }
        // antes guardar
        usuarioService.save(Usuario);
        emailService.enviarCorreoBienvenida(Usuario.getCorreoElectronico(),Usuario.getNombreCompleto());

        return new ResponseEntity<>(Usuario, HttpStatus.OK);
    }

    private mensaje validarContrasena(String contra) {
        /*
         * longitud minima= 8
         * logitud maxima=16
         * números minimo=1
         * mayúscula=1
         * minuscula=1
         * simbolos=1
         * simbolos aceptados=@,.$%&
         */
        var mensaje = new mensaje();
        mensaje.setEstado("success");
        mensaje.setMensaje("");

        if (contra.length() < 8 || contra.length() > 25) {
            mensaje.setEstado("error");
            mensaje.setMensaje("La contraseña es inferior a 8 caracteres");
        }

        if (contra.length() > 25) {
            mensaje.setEstado("error");
            mensaje.setMensaje("La contraseña es mayor a 25 caracteres");
        }

        // Validación de números
        if (!contra.matches(".*\\d.*")) {
            mensaje.setEstado("error");
            mensaje.setMensaje("La contraseña debe contener al menos un número");
        }

        // Validación de mayúscula
        if (!contra.matches(".*[A-Z].*")) {
            mensaje.setEstado("error");
            mensaje.setMensaje("La contraseña debe contener al menos una letra mayúscula");
            return mensaje;
        }

        // Validación de minúscula
        if (!contra.matches(".*[a-z].*")) {
            mensaje.setEstado("error");
            mensaje.setMensaje("La contraseña debe contener al menos una letra minúscula");
            return mensaje;
        }

        // Validación de símbolos
        boolean tieneSimbolo = false;
        char[] simbolosPermitidos = { '@', '.', '$', '%', '&' };

        for (char simbolo : simbolosPermitidos) {
            if (contra.indexOf(simbolo) != -1) {
                tieneSimbolo = true;
                break;
            }
        }

        if (!tieneSimbolo) {
            mensaje.setEstado("error");
            mensaje.setMensaje("La contraseña debe contener al menos uno de los siguientes símbolos: @, ., $, %, &");
        }

        return mensaje;

    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var ListaUsuario = usuarioService.findAll();
        return new ResponseEntity<>(ListaUsuario, HttpStatus.OK);
    }

    @GetMapping("FiltrarnombreCompleto/{nombreCompleto}")
    public ResponseEntity<Object> findnombreCompleto(@PathVariable String nombreCompleto) {
        var listaUsuario = usuarioService.FiltrarnombreCompleto(nombreCompleto);
        return new ResponseEntity<>(listaUsuario, HttpStatus.OK);
    }

    @GetMapping("FiltrarcorreoElectronico/{correoElectronico}")
    public ResponseEntity<Object> findcorreoElectronico(@PathVariable String correoElectronico) {
        var listaUsuario = usuarioService.FiltrarcorreoElectronico(correoElectronico);
        return new ResponseEntity<>(listaUsuario, HttpStatus.OK);
    }

    @GetMapping("/existsBycorreoElectronico/{correoElectronico}")
    public ResponseEntity<Boolean> existsBycorreoElectronico(@PathVariable String correoElectronico) {
        boolean exists = usuarioService.findBycorreoElectronico(correoElectronico).isPresent();
        return new ResponseEntity<>(exists, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var usuario = usuarioService.findOne(id);
        return new ResponseEntity<>(usuario, HttpStatus.OK);
    }

    @DeleteMapping("/Eliminar/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
        usuarioService.delete(id);
        return new ResponseEntity<>("Registro Eliminado", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @RequestBody Usuario UsuarioUpdate) {
        var Usuario = usuarioService.findOne(id).get();
        if (Usuario != null) {
            Usuario.setNombreCompleto(UsuarioUpdate.getNombreCompleto());
            Usuario.setCorreoElectronico(UsuarioUpdate.getCorreoElectronico());
            Usuario.setContra(UsuarioUpdate.getContra());
            Usuario.setCoContra(UsuarioUpdate.getCoContra());
            usuarioService.save(Usuario);
            return new ResponseEntity<>(Usuario, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Usuario NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
