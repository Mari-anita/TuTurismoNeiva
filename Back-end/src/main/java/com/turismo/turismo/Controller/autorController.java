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
        //Validaciones
        if (Autor.getNombreCompletoAutor().equals("")) {
            return new ResponseEntity<>("El campo nombre del autor es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Autor.getFechaNacimiento().equals("")) {
            return new ResponseEntity<>("El campo fecha de nacimiento es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Autor.getFechaMuerte().equals("")) {
            return new ResponseEntity<>("El campo fecha de muerte es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Autor.getBibliografiaAutor().equals("")) {
            return new ResponseEntity<>("El campo bibliografia es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Autor.getImagenAutor().equals("")) {
            return new ResponseEntity<>("El campo imagen del autor es obligatorio", HttpStatus.BAD_REQUEST);
        }

        autorService.save(Autor);
        return new ResponseEntity<>(Autor, HttpStatus.OK);
    }

    @GetMapping("FiltrarnombreCompletoAutor/{nombreCompletoAutor}")
    public ResponseEntity<Object> findnombreCompletoAutor(@PathVariable String nombreCompletoAutor) {
        var listaAutor = autorService.FiltrarnombreCompletoAutor(nombreCompletoAutor);
        return new ResponseEntity<>(listaAutor, HttpStatus.OK);
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

            Autor.setNombreCompletoAutor(AutorUpdate.getNombreCompletoAutor());
            Autor.setFechaNacimiento(AutorUpdate.getFechaNacimiento());
            Autor.setFechaMuerte(AutorUpdate.getFechaMuerte());
            Autor.setBibliografiaAutor(AutorUpdate.getBibliografiaAutor());
            Autor.setImagenAutor(AutorUpdate.getImagenAutor());
        
            autorService.save(Autor);
            return new ResponseEntity<>(Autor, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error autor NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
