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

import com.turismo.turismo.interfaceService.IautorMonumentoService;
import com.turismo.turismo.models.AutorMonumento;

@RequestMapping("/api/v1/AutorMonumento")
@RestController
public class autorMonumentoController {

     @Autowired
    private IautorMonumentoService autorMonumentoService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("AutorMonumento") AutorMonumento AutorMonumento) {
        
        autorMonumentoService.save(AutorMonumento);
        return new ResponseEntity<>(AutorMonumento, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaAutorMonumento = autorMonumentoService.findAll();
        return new ResponseEntity<>(listaAutorMonumento, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var AutorMonumento = autorMonumentoService.findOne(id);
        return new ResponseEntity<>(AutorMonumento, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
    autorMonumentoService.deleteForever(id);
    return new ResponseEntity<>("Registro eliminado permanentemente", HttpStatus.OK);
    }

     @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("AutorMonumento") AutorMonumento AutorMonumentoUpdate) {
        var AutorMonumento = autorMonumentoService.findOne(id).get();
        if (AutorMonumento != null) {

            AutorMonumento.setAutor(AutorMonumentoUpdate.getAutor());
            AutorMonumento.setSitioMonumento(AutorMonumentoUpdate.getSitioMonumento());
            
            autorMonumentoService.save(AutorMonumento);
            return new ResponseEntity<>(AutorMonumento, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error autormonumento NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }


}
