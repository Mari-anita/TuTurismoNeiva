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

        //VALIDACIONESSSSSSS
       
        if (Usuario.getNombreCompleto().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }
        
        if (Usuario.getCorreoElectronico().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Usuario.getCorreoElectronico().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }
        // VERIFICA SI EL CORREO ELECTRONICO YA SÉ ENCUENTRA EN NUESTRA BASE DE DATOS
        if (usuarioService.findBycorreoElectronico(Usuario.getCorreoElectronico()).isPresent()) {
            return new ResponseEntity<>("El correo electrónico ya está registrado", HttpStatus.BAD_REQUEST);
        }

        if (Usuario.getAutenticarCorreo().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Usuario.getTelefono().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (usuarioService.findBytelefono(Usuario.getTelefono()).isPresent()) {
            return new ResponseEntity<>("El correo electrónico ya está registrado", HttpStatus.BAD_REQUEST);
        }

        if (Usuario.getContra().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Usuario.getCoContra().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }
        
        if (Usuario.getEstado().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }
        
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
    public ResponseEntity<Object> delete(@PathVariable String id){
        var Usuario = usuarioService.findOne(id).get();
        if (Usuario != null){
            if(Usuario.getEstado().equals("H")){
                Usuario.setEstado("D");
                usuarioService.save(Usuario);
                return new ResponseEntity<>("Se ha desabilitado correctamente",HttpStatus.OK);
            }else
            Usuario.setEstado("H");
            usuarioService.save(Usuario);
            return new ResponseEntity<>("Se ha habilitado correctamente", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("No se encontro registro",HttpStatus.OK);
        }
    }

    @DeleteMapping("/eliminarPermanente{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
    usuarioService.deleteForever(id);
    return new ResponseEntity<>("Registro eliminado", HttpStatus.OK);
    }

     @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Usuario") Usuario UsuarioUpdate) {
        var Usuario = usuarioService.findOne(id).get();
        if (Usuario != null) {
            Usuario.setNombreCompleto(UsuarioUpdate.getNombreCompleto());
            Usuario.setCorreoElectronico(UsuarioUpdate.getCorreoElectronico());
            Usuario.setAutenticarCorreo(UsuarioUpdate.getAutenticarCorreo());
            Usuario.setTelefono(UsuarioUpdate.getTelefono());
            Usuario.setContra(UsuarioUpdate.getContra());
            Usuario.setCoContra(UsuarioUpdate.getCoContra());
            Usuario.setEstado(UsuarioUpdate.getEstado());
            Usuario.setMayorYmenor(UsuarioUpdate.isMayorYmenor());
            usuarioService.save(Usuario);
            return new ResponseEntity<>(Usuario, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Usuario NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
