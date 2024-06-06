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

import com.turismo.turismo.interfaceService.IautorService;
import com.turismo.turismo.models.Autor;

@RequestMapping("/api/v1/Autor/")
@RestController
public class autorController {

    @Autowired
    private IautorService autorService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("Autor") Autor Autor) {
        
        autorService.save(Autor);
        return new ResponseEntity<>(Autor, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaAutor = autorService.findAll();
        return new ResponseEntity<>(listaAutor, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Autor = autorService.findOne(id);
        return new ResponseEntity<>(Autor, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
    autorService.deleteForever(id);
    return new ResponseEntity<>("Registro eliminado permanentemente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Autor") Autor AutorUpdate) {
        var Autor = autorService.findOne(id).get();
        if (Autor != null) {

            Autor.setDocumentoAutor(AutorUpdate.getDocumentoAutor());
            Autor.setPrimerNombre(AutorUpdate.getPrimerNombre());
            Autor.setSegundoNombre(AutorUpdate.getSegundoNombre());
            Autor.setPrimerApellido(AutorUpdate.getPrimerApellido());
            Autor.setSegundoApellido(AutorUpdate.getSegundoApellido());
            Autor.setDireccionAutor(AutorUpdate.getDireccionAutor());
            Autor.setCorreoAutor(AutorUpdate.getCorreoAutor());
            Autor.setTelefonoAutor(AutorUpdate.getTelefonoAutor());
          
            autorService.save(Autor);
            return new ResponseEntity<>(Autor, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error autor NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
