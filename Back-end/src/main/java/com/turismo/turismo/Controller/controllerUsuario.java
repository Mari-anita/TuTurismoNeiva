package com.turismo.turismo.Controller;

import org.springframework.security.core.Authentication;
import org.hibernate.mapping.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.turismo.turismo.models.Usuario;
import com.turismo.turismo.service.authService;
import com.turismo.turismo.interfaceService.IusuarioService;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/api/v1/usuario/")
public class controllerUsuario {

    private final authService authService;

    @GetMapping("profile/")
    public ResponseEntity<Usuario> getProfile() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        Usuario usuario = (Usuario) auth.getPrincipal();
        return new ResponseEntity<Usuario>(usuario, HttpStatus.OK);
    }

    /*
     * @GetMapping("profile/")
     * public ResponseEntity<String> profile(@RequestBody String request){
     * return new ResponseEntity<String>("ESTE END-POINT es perfil privado",
     * HttpStatus.OK);
     * }
     */
    @GetMapping("obtenerNombreUsuario/")
    public ResponseEntity<Map<String, String>> obtenerNombreUsuario(Principal principal) {
        try {
            // Obtener el correo electrónico del usuario autenticado a través del objeto
            // 'Principal'
            String correoElectronico = principal.getName();

            // Buscar el usuario en la base de datos usando su correo electrónico
            // Si no se encuentra, lanzará una excepción UsernameNotFoundException
            Usuario usuario = authService.findBycorreoElectronico(correoElectronico)
                    .orElseThrow(() -> new UsernameNotFoundException("Usuario no encontrado"));

            // Crear un mapa que contendrá la respuesta, solo el nombre completo del usuario
            Map<String, String> response = new HashMap<>();
            response.put("nombreCompleto", usuario.getNombreCompleto()); // Añadir el nombre completo al mapa

            // Devolver la respuesta con el nombre completo y un código de estado HTTP 200
            // (OK)
            return new ResponseEntity<>(response, HttpStatus.OK);

        } catch (UsernameNotFoundException e) {
            // Manejar el caso en el que no se encuentre el usuario
            // Crear un mapa para la respuesta de error
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("mensaje", "Usuario no encontrado"); // Mensaje de error

            // Devolver una respuesta con el mensaje de error y un código de estado HTTP 404
            // (Not Found)
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);

        } catch (Exception e) {
            // Manejar cualquier otra excepción inesperada
            // Crear un mapa para la respuesta de error genérica
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("mensaje", "Error al obtener el perfil del usuario"); // Mensaje de error general

            // Devolver una respuesta con el mensaje de error y un código de estado HTTP 500
            // (Internal Server Error)
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
     * CAMBIAR CONTRASEÑA
     * ACTUALIZAR PERFIL
     * REGISTRO INFORMACION SITIOS SOLO ADMIN
     * PQRS
     * COMENTARIO
     */

}
