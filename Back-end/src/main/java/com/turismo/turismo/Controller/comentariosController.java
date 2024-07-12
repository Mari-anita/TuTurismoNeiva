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

import com.turismo.turismo.interfaceService.IcomentariosService;
import com.turismo.turismo.models.Comentarios;


@RequestMapping("/api/v1/Comentarios/")
@RestController
public class comentariosController {

    @Autowired
    private IcomentariosService comentariosService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("Comentarios") Comentarios Comentarios) {
        
        comentariosService.save(Comentarios);
        return new ResponseEntity<>(Comentarios, HttpStatus.OK);
    }

     @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaComentarios = comentariosService.findAll();
        return new ResponseEntity<>(listaComentarios, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Comentarios = comentariosService.findOne(id);
        return new ResponseEntity<>(Comentarios, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
    comentariosService.deleteForever(id);
    return new ResponseEntity<>("Registro eliminado permanentemente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Comentarios") Comentarios ComentariosUpdate) {
        var Comentarios = comentariosService.findOne(id).get();
        if (Comentarios != null) {

            Comentarios.setUsuario(ComentariosUpdate.getUsuario());
            Comentarios.setComentario(ComentariosUpdate.getComentario());
            Comentarios.setFechaComentario(ComentariosUpdate.getFechaComentario());
            Comentarios.setComentarioRespuesta(ComentariosUpdate.getComentarioRespuesta());
         
            comentariosService.save(Comentarios);
            return new ResponseEntity<>(Comentarios, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error comentario NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }



}
