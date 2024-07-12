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

import com.turismo.turismo.interfaceService.IsitioMonumentoService;
import com.turismo.turismo.models.SitioMonumento;



@RequestMapping("/api/v1/SitioMonumento")
@RestController
public class sitioMonumentoContoller {

     @Autowired
    private IsitioMonumentoService sitioMonumentoService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("SitioMonumento") SitioMonumento SitioMonumento) {
        
        sitioMonumentoService.save(SitioMonumento);
        return new ResponseEntity<>(SitioMonumento, HttpStatus.OK); 
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var listaSitioMonumento = sitioMonumentoService.findAll();
        return new ResponseEntity<>(listaSitioMonumento, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id) {
        var SitioMonumento = sitioMonumentoService.findOne(id);
        return new ResponseEntity<>(SitioMonumento, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object> deleteForever(@PathVariable String id) {
    sitioMonumentoService.deleteForever(id);
    return new ResponseEntity<>("Registro eliminado permanentemente", HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("SitioMonumento") SitioMonumento SitioMonumentoUpdate) {
        var SitioMonumento = sitioMonumentoService.findOne(id).get();
        if (SitioMonumento!= null) {

            SitioMonumento.setNombreSitioMonumento(SitioMonumentoUpdate.getNombreSitioMonumento());
            SitioMonumento.setUbicacionSitioMonumento(SitioMonumentoUpdate.getUbicacionSitioMonumento());
            SitioMonumento.setCalificacionSitioMonumento(SitioMonumentoUpdate.getCalificacionSitioMonumento());
            SitioMonumento.setDireccionSitioMonumento(SitioMonumentoUpdate.getDireccionSitioMonumento());
            SitioMonumento.setDescripcionSitioMonumento(SitioMonumentoUpdate.getDescripcionSitioMonumento());
            SitioMonumento.setDetalladaSitioMonumento(SitioMonumentoUpdate.getDetalladaSitioMonumento());
            SitioMonumento.setHorarioSitioMonumento(SitioMonumentoUpdate.getHorarioSitioMonumento());
            SitioMonumento.setFechaCreacionSitioMonumento(SitioMonumentoUpdate.getFechaCreacionSitioMonumento());
            SitioMonumento.setFechaModificacionSitioMonumento(SitioMonumentoUpdate.getFechaModificacionSitioMonumento());
            SitioMonumento.setAutor(SitioMonumentoUpdate.getAutor());
            SitioMonumento.setContactoSitioMonumento(SitioMonumentoUpdate.getContactoSitioMonumento());


            sitioMonumentoService.save(SitioMonumento);
            return new ResponseEntity<>(SitioMonumento, HttpStatus.OK); 

        } else {
            return new ResponseEntity<>("Error Sitio o Monumento NO Encontrado", HttpStatus.BAD_REQUEST); 
        }
    }


}
