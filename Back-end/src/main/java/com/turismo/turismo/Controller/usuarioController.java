package com.turismo.turismo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turismo.turismo.interfaceService.IusuarioService;
import com.turismo.turismo.models.Usuario;
import com.turismo.turismo.models.mensaje;

@RequestMapping("/api/v1/Usuario/")
@RestController
public class usuarioController {

    @Autowired
    private IusuarioService usuarioService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@ModelAttribute("Usuario") Usuario Usuario) {

        // VALIDACIONES

        if (Usuario.getNombreCompleto().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Usuario.getCorreoElectronico().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
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

        if (contra.length() < 8 || contra.length() > 16) {
            mensaje.setEstado("error");
            mensaje.setMensaje("La contraseña es inferior a 8 caracteres");
        }

        if (contra.length() > 16) {
            mensaje.setEstado("error");
            mensaje.setMensaje("La contraseña es mayor a 16 caracteres");
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

    // @DeleteMapping("/{id}")
    // public ResponseEntity<Object> delete(@PathVariable String id) {
    // var Usuario = usuarioService.findOne(id).get();
    // if (Usuario != null) {
    // if (Usuario.getEstado().equals("H")) {
    // Usuario.setEstado("D");
    // usuarioService.save(Usuario);
    // return new ResponseEntity<>("Se ha desabilitado correctamente",
    // HttpStatus.OK);
    // } else
    // Usuario.setEstado("H");
    // usuarioService.save(Usuario);
    // return new ResponseEntity<>("Se ha habilitado correctamente", HttpStatus.OK);
    // } else {
    // return new ResponseEntity<>("No se encontro registro", HttpStatus.OK);
    // }
    // }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Usuario") Usuario UsuarioUpdate) {
        var Usuario = usuarioService.findOne(id).get();
        if (Usuario != null) {
            Usuario.setNombreCompleto(UsuarioUpdate.getNombreCompleto());
            Usuario.setCorreoElectronico(UsuarioUpdate.getCorreoElectronico());
            Usuario.setContra(UsuarioUpdate.getContra());
            Usuario.setCoContra(UsuarioUpdate.getCoContra());
            // Usuario.setEstado(UsuarioUpdate.getEstado());
            // Usuario.setMayorYmenor(UsuarioUpdate.isMayorYmenor());
            usuarioService.save(Usuario);
            return new ResponseEntity<>(Usuario, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Usuario NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
