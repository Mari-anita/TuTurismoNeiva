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


import com.turismo.turismo.interfaceService.IsitioService;
import com.turismo.turismo.models.Sitio;

@RequestMapping("/api/v1/Sitio/")
@RestController
public class sitioController {
    @Autowired
    private IsitioService sitioService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("Sitio") Sitio Sitio) {
        sitioService.save(Sitio);
        return new ResponseEntity<>(Sitio, HttpStatus.OK); 
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaSitio = sitioService.findAll();
        return new ResponseEntity<>(listaSitio, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var Sitio = sitioService.findOne(id);
        return new ResponseEntity<>(Sitio, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id){
        var Sitio = sitioService.findOne(id).get();
        if (Sitio != null){
            if (Sitio.getEstado().equals("H")){
                Sitio.setEstado("D");
                sitioService.save(Sitio);
                return new ResponseEntity<>("Se ha deshabilitado correctamente",HttpStatus.OK);
            }else
            Sitio.setEstado("H");
            sitioService.save(Sitio);
            return new ResponseEntity<>("Se ha habilitado correctamente",HttpStatus.OK);
        }else{
            return new ResponseEntity<>("No se ha encontrado el registro",HttpStatus.OK);
        }
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
    sitioService.deleteForever(id);
    return new ResponseEntity<>("Registro eliminado", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Sitio") Sitio SitioUpdate) {
        var Sitio = sitioService.findOne(id).get();
        if (Sitio!= null) {

            Sitio.setNombreSitio(SitioUpdate.getNombreSitio());
            Sitio.setUbicacionSitio(SitioUpdate.getUbicacionSitio());
            Sitio.setHoraSitio(SitioUpdate.getHoraSitio());
            Sitio.setCategoriaSitio(SitioUpdate.getCategoriaSitio()); 
            Sitio.setEstado(SitioUpdate.getEstado());
           
            sitioService.save(Sitio);
            return new ResponseEntity<>(Sitio, HttpStatus.OK); 

        } else {
            return new ResponseEntity<>("Error sitio NO Encontrado", HttpStatus.BAD_REQUEST); 
        }
    }
}
