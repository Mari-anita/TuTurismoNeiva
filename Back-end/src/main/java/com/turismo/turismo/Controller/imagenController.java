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

import com.turismo.turismo.interfaceService.IimagenService;
import com.turismo.turismo.models.Imagen;


@RequestMapping("/api/v1/Imagen")
@RestController
public class imagenController {

    @Autowired
    private IimagenService imagenService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("Imagen") Imagen Imagen) {

        if(Imagen.getImagen().equals("")){
            return new ResponseEntity<>("Este campo es obligatorio",HttpStatus.BAD_REQUEST);
        }

        imagenService.save(Imagen);
        return new ResponseEntity<>(Imagen, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaImagen = imagenService.findAll();
        return new ResponseEntity<>(listaImagen, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Imagen = imagenService.findOne(id);
        return new ResponseEntity<>(Imagen, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
    imagenService.deleteForever(id);
    return new ResponseEntity<>("Registro eliminado permanentemente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Imagen") Imagen ImagenUpdate) {
        var Imagen = imagenService.findOne(id).get();
        if (Imagen != null) {

            Imagen.setSitioMonumento(ImagenUpdate.getSitioMonumento());
            Imagen.setImagen(ImagenUpdate.getImagen());
            
            imagenService.save(Imagen);
            return new ResponseEntity<>(Imagen, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error autor NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}
