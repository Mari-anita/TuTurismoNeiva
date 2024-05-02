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


import com.turismo.turismo.interfaceService.ImonumentoService;
import com.turismo.turismo.models.Monumento;

@RequestMapping("/api/v1/Monumento/")
@RestController
public class monumentoController {

    @Autowired
    private ImonumentoService monumentoService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("Monumento") Monumento Monumento) {
        
        monumentoService.save(Monumento);
        return new ResponseEntity<>(Monumento, HttpStatus.OK); 
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaMonumento = monumentoService.findAll();
        return new ResponseEntity<>(listaMonumento, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Monumento = monumentoService.findOne(id);
        return new ResponseEntity<>(Monumento, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id) {
    monumentoService.delete(id);
    return new ResponseEntity<>("Registro eliminado", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Monumento") Monumento MonumentoUpdate) {
        var Monumento = monumentoService.findOne(id).get();
        if (Monumento != null) {

            Monumento.setNombreMonumento(MonumentoUpdate.getNombreMonumento());
            Monumento.setFechaMonumento(MonumentoUpdate.getFechaMonumento());
            Monumento.setUbicacionMonumento(MonumentoUpdate.getUbicacionMonumento());
            Monumento.setCalificacionMonumento(MonumentoUpdate.getCalificacionMonumento());
            
            monumentoService.save(Monumento);
            return new ResponseEntity<>(Monumento, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error monumento NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}
