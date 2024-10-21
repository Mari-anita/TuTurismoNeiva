package com.turismo.turismo.Controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.turismo.turismo.models.Respuestica;
import com.turismo.turismo.models.Usuario;
import com.turismo.turismo.models.authResponse;
import com.turismo.turismo.models.loginRequest;
import com.turismo.turismo.models.registroRequest;
import com.turismo.turismo.models.solicitudRecuperarContrasena;
import com.turismo.turismo.service.authService;
import com.turismo.turismo.service.emailService;
import com.turismo.turismo.service.solicitudRecuperarContrasenaService;
import com.turismo.turismo.service.usuarioService;

import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Date;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/publico/Usuario")
public class controllerPublicoUsuario {

    private final authService authService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private emailService emailService;

    @Autowired
    private usuarioService usuarioService;

    @Autowired
    private solicitudRecuperarContrasenaService solicitudRecuperarContrasenaService;

    @PostMapping("login/")
    public ResponseEntity<authResponse> login(@RequestBody loginRequest request) {
        try {
            // Autentica al usuario y genera el token
            authResponse authResponse = authService.login(request);
            authResponse.setMensaje("Acceso Permitido");

            return new ResponseEntity<>(authResponse, HttpStatus.OK);
        } catch (AuthenticationException e) {
            // Maneja errores de autenticación
            authResponse response = new authResponse();
            response.setMensaje("ACCESO DENEGADO. POR FAVOR, REGÍSTRESE");
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
    }

    @PostMapping("registro/")
    public ResponseEntity<authResponse> registro(@RequestBody registroRequest request) {
        var valido = true;
        authResponse response = new authResponse();
        if (authService.findBycorreoElectronico(request.getCorreoElectronico()).isPresent()) {
            valido = false;
            response.setEmailExists(true);
            response.setMensaje("El correo electronico ya existe");
            return new ResponseEntity<authResponse>(response, HttpStatus.BAD_REQUEST);
        }

        if (valido) {
            response = authService.registro(request);
            response.setMensaje("Se registró correctamente");
            // para envíar el correo electronico
            emailService.enviarCorreoBienvenida(request.getCorreoElectronico(), request.getNombreCompleto());
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

    @PostMapping("recuperarContrasena/")
    public ResponseEntity<Map<String, String>> recuperarContrasena(@RequestBody RecuperarContrasenaRequest request) {
        Map<String, String> response = new HashMap<>();

        if (request.getCorreoElectronico() == null || request.getCorreoElectronico().isEmpty()) {
            response.put("message", "El correo es un campo obligatorio");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        java.util.Optional<Usuario> optionalUsuario = usuarioService
                .findBycorreoElectronico(request.getCorreoElectronico());

        if (!optionalUsuario.isPresent()) {
            response.put("message", "El usuario no existe");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        Usuario usuario = optionalUsuario.get();
        var solicitud = solicitudRecuperarContrasena.builder()
                .Usuario(usuario)
                .estado(true)
                .fechaHora(new Date())
                .build();
        solicitudRecuperarContrasenaService.save(solicitud);

        String enlace = "http://127.0.0.1:5502/Front-end/html/recuperarContrasena.html?+&t="
                + solicitud.getIdRestablecer();

        emailService.enviarNotificacionRecuperarContra(usuario.getUsername(), enlace);

        response.put("message", "Se ha enviado un enlace para recuperar la contraseña");
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    private boolean esContrasenaValida(String contraseña) {
        if (contraseña.length() < 8) {
            return false;
        }

        boolean tieneMayuscula = contraseña.chars().anyMatch(Character::isUpperCase);
        boolean tieneNumero = contraseña.chars().anyMatch(Character::isDigit);
        boolean tieneCaracterEspecial = contraseña.matches(".*[!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?].*");

        return tieneMayuscula && tieneNumero && tieneCaracterEspecial;
    }

    @PutMapping("cambioRecuperacionContrasena/{idSolicitud}")
    public ResponseEntity<Respuestica> cambiarContraseña(@PathVariable("idSolicitud") String idSolicitud,
            @RequestBody CambioRecuperaContrasenaRequest request) {
        // Buscar la solicitud por ID (usando el método findOne del service)
        Optional<solicitudRecuperarContrasena> optionalSolicitud = solicitudRecuperarContrasenaService
                .findOne(idSolicitud);

        if (!optionalSolicitud.isPresent()) {
            var respuesta = new Respuestica(HttpStatus.NOT_FOUND.toString(), "La solicitud no existe");
            return new ResponseEntity<>(respuesta, HttpStatus.NOT_FOUND);
        }

        solicitudRecuperarContrasena solicitud = optionalSolicitud.get();

        // Verificar que el estado de la solicitud sea true
        if (!solicitud.isEstado()) {
            var respuesta = new Respuestica(HttpStatus.BAD_REQUEST.toString(), "La solicitud ya ha sido utilizada");
            return new ResponseEntity<>(respuesta, HttpStatus.BAD_REQUEST);
        }

        // Verificar que la solicitud no tenga más de 15 minutos
        Date ahora = new Date();
        long diffInMillies = Math.abs(ahora.getTime() - solicitud.getFechaHora().getTime());
        long diffMinutos = diffInMillies / (60 * 1000); // Conversión de milisegundos a minutos

        if (diffMinutos > 15) {
            var respuesta = new Respuestica(HttpStatus.BAD_REQUEST.toString(), "La solicitud ha expirado");
            return new ResponseEntity<>(respuesta, HttpStatus.BAD_REQUEST);
        }

        // Obtener el usuario relacionado a la solicitud
        Usuario usuario = solicitud.getUsuario();

        String nuevaContrasena = request.getNuevaContrasena();
        if (passwordEncoder.matches(nuevaContrasena, usuario.getPassword())) {
            var respuesta = new Respuestica(HttpStatus.BAD_REQUEST.toString(),
                    "La nueva contraseña no puede ser igual a la anterior");
            return new ResponseEntity<>(respuesta, HttpStatus.BAD_REQUEST);
        }

        if (!nuevaContrasena.equals(request.getConfirmarContrasena())) {
            var respuesta = new Respuestica(HttpStatus.BAD_REQUEST.toString(),
                    "La nueva contraseña y la confirmación no coinciden");
            return new ResponseEntity<>(respuesta, HttpStatus.BAD_REQUEST);
        }

        if (!esContrasenaValida(nuevaContrasena)) {
            var respuesta = new Respuestica(HttpStatus.BAD_REQUEST.toString(),
                    "La nueva contraseña debe tener al menos 8 caracteres, incluir una letra mayúscula, un número y un carácter especial.");
            return new ResponseEntity<>(respuesta, HttpStatus.BAD_REQUEST);
        }

        usuario.setContra(passwordEncoder.encode(nuevaContrasena));
        usuario.setVerificarContrasena(false);
        usuarioService.save(usuario);

        solicitud.setEstado(false);
        solicitudRecuperarContrasenaService.save(solicitud);

        emailService.enviarNotificacionCambioContra(usuario.getUsername());

        var respuesta = new Respuestica(HttpStatus.OK.toString(), "Cambio de contraseña exitoso");
        return new ResponseEntity<>(respuesta, HttpStatus.OK);
    }

}

/*
 * RECUPERAR CONTRASEÑA
 * VER COMENTARIOS
 * REGISTRARSE
 * REGISTRAR EMPRESA
 * CONSULTAR SI EXISTE CORREO ELECTRONICO
 */
