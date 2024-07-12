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


import com.turismo.turismo.interfaceService.IpqrsfdService;
import com.turismo.turismo.models.Pqrsfd;


@RequestMapping("/api/v1/Pqrsfd/")
@RestController
public class pqrsfdController {

    @Autowired
    private IpqrsfdService pqrsfdService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("Pqrsfd") Pqrsfd Pqrsfd) {
        
        pqrsfdService.save(Pqrsfd);
        return new ResponseEntity<>(Pqrsfd, HttpStatus.OK); 
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaPqrsfd = pqrsfdService.findAll();
        return new ResponseEntity<>(listaPqrsfd, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Pqrsfd = pqrsfdService.findOne(id);
        return new ResponseEntity<>(Pqrsfd, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
    pqrsfdService.deleteForever(id);
    return new ResponseEntity<>("Registro eliminado permanentemente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Pqrsfd") Pqrsfd PqrsfdUpdate) {
        var Pqrsfd = pqrsfdService.findOne(id).get();
        if (Pqrsfd!= null) {

            Pqrsfd.setUsuario(PqrsfdUpdate.getUsuario());
            Pqrsfd.setRespuesta(PqrsfdUpdate.getRespuesta());
            Pqrsfd.setTipoPeticion(PqrsfdUpdate.getTipoPeticion());
            Pqrsfd.setFechaRadicado(PqrsfdUpdate.getFechaRadicado());
            Pqrsfd.setDescripcionPeticion(PqrsfdUpdate.getDescripcionPeticion());
            Pqrsfd.setEstado(PqrsfdUpdate.getEstado());
           
            pqrsfdService.save(Pqrsfd);
            return new ResponseEntity<>(Pqrsfd, HttpStatus.OK); 

        } else {
            return new ResponseEntity<>("Error pqrsfd NO Encontrado", HttpStatus.BAD_REQUEST); 
        }
    }
}
