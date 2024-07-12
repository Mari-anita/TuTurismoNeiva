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

import com.turismo.turismo.interfaceService.IrespuestaService;
import com.turismo.turismo.models.Respuesta;


@RequestMapping("/api/v1/Respuesta")
@RestController
public class respuestaController {

    @Autowired
    private IrespuestaService respuestaService;

     @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("Respuesta") Respuesta Respuesta) {
        
        respuestaService.save(Respuesta);
        return new ResponseEntity<>(Respuesta, HttpStatus.OK); 
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaRespuesta = respuestaService.findAll();
        return new ResponseEntity<>(listaRespuesta, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Respuesta = respuestaService.findOne(id);
        return new ResponseEntity<>(Respuesta, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
    respuestaService.deleteForever(id);
    return new ResponseEntity<>("Registro eliminado permanentemente", HttpStatus.OK);
    }

     @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Respuesta") Respuesta RespuestaUpdate) {
        var Respuesta = respuestaService.findOne(id).get();
        if (Respuesta!= null) {

            Respuesta.setPqrsfd(RespuestaUpdate.getPqrsfd());
            Respuesta.setTextoRespuesta(RespuestaUpdate.getTextoRespuesta());
            Respuesta.setFechaRespuesta(RespuestaUpdate.getFechaRespuesta());
            
            respuestaService.save(Respuesta);
            return new ResponseEntity<>(Respuesta, HttpStatus.OK); 

        } else {
            return new ResponseEntity<>("Error Respuesta NO Encontrado", HttpStatus.BAD_REQUEST); 
        }
    }


}
