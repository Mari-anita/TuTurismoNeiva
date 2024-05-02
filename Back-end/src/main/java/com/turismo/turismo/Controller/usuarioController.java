package com.turismo.turismo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.turismo.turismo.interfaceService.IusuarioService;
import com.turismo.turismo.models.Usuario;

@RequestMapping("/api/v1/Usuario/")
@RestController
public class usuarioController {

    @Autowired
    private IusuarioService usuarioService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("Usuario") Usuario Usuario) {
        
        usuarioService.save(Usuario);
        return new ResponseEntity<>(Usuario, HttpStatus.OK); 
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaUsuario = usuarioService.findAll();
        return new ResponseEntity<>(listaUsuario, HttpStatus.OK);
    }

     @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Usuario = usuarioService.findOne(id);
        return new ResponseEntity<>(Usuario, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
    usuarioService.delete(id);
    return new ResponseEntity<>("Registro eliminado", HttpStatus.OK);
    }

     @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Usuario") Usuario UsuarioUpdate) {
        var Usuario = usuarioService.findOne(id).get();
        if (Usuario != null) {

            Usuario.setTipoDocumento(UsuarioUpdate.getTipoDocumento());
            Usuario.setDocumentoUsuario(UsuarioUpdate.getDocumentoUsuario());
            Usuario.setPrimerNombre(UsuarioUpdate.getPrimerNombre());
            Usuario.setSegundoNombre(UsuarioUpdate.getSegundoNombre());
            Usuario.setPrimerApellido(UsuarioUpdate.getPrimerApellido());
            Usuario.setSegundoApellido(UsuarioUpdate.getSegundoApellido());
            Usuario.setTipoUsuario(UsuarioUpdate.getTipoUsuario());
            Usuario.setGenero(UsuarioUpdate.getGenero());
            Usuario.setCorreoElectronico(UsuarioUpdate.getCorreoElectronico());
            Usuario.setContraseña(UsuarioUpdate.getContraseña());
            Usuario.setTelefono(UsuarioUpdate.getTelefono());
            Usuario.setFechaNacimiento(UsuarioUpdate.getFechaNacimiento());

           
            usuarioService.save(Usuario);
            return new ResponseEntity<>(Usuario, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Usuario NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
