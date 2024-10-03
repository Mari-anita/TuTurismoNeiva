package com.turismo.turismo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.turismo.turismo.interfaceService.IsitioMonumentoService;
import com.turismo.turismo.models.SitioMonumento;
import com.turismo.turismo.models.respuestaSitio;

import java.io.IOException;
import java.util.Base64;
import java.util.List;


@RequestMapping("/api/v1/SitioMonumento")
@RestController
public class sitioMonumentoContoller {

    @Autowired
    private IsitioMonumentoService sitioMonumentoService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@RequestBody SitioMonumento SitioMonumento) {

        // VALIDACIONES

        if (SitioMonumento.getNombreSitioMonumento().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (SitioMonumento.getUbicacionSitioMonumento().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }
        
        if (SitioMonumento.getDireccionSitioMonumento().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (SitioMonumento.getDescripcionSitioMonumento().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (SitioMonumento.getDetalladaSitioMonumento().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (SitioMonumento.getHorarioSitioMonumento().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        // if (SitioMonumento.getFechaCreacionSitioMonumento() == null || SitioMonumento.getFechaCreacionSitioMonumento() < new Date() ) {
        //     return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        // }

        if (SitioMonumento.getFechaModificacionSitioMonumento().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (SitioMonumento.getContactoSitioMonumento().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }
        sitioMonumentoService.save(SitioMonumento);
        return new ResponseEntity<>(SitioMonumento, HttpStatus.OK);
    }

    // Método para consultar categorías con manejo de imágenes (ruta cambiada)
@GetMapping("/consultar-imagenes")
public ResponseEntity<Object> consultarSitioMonumentoJson() {
    List<SitioMonumento> listaCategoria = sitioMonumentoService.consultarSitioMonumento();
    listaCategoria.forEach(c -> c.setImagen_base("")); // Aquí puedes ajustar cómo se manejan las imágenes
    return new ResponseEntity<>(listaCategoria, HttpStatus.OK);
}

    // Método para guardar imagen asociada a una categoría
    @PostMapping("/imagen")  // Cambio de endpoint para evitar conflicto
    public ResponseEntity<Object> guardarImagenJson(
        SitioMonumento SitioMonumento, 
            @RequestParam("file") MultipartFile file) throws IOException {

        try {
            // Guardar el archivo y generar la URL
            // String fileName = gestionArchivoService.storeFile(file);
            // categoria.setImagen_url("http://localhost:8080/api/downloadFile/" + fileName);
            SitioMonumento.setImagen_base(Base64.getEncoder().encodeToString(file.getBytes()));

            int resultado = sitioMonumentoService.guardarImagenJson(SitioMonumento);
            if (resultado == 0) {
                return new ResponseEntity<>(new respuestaSitio("ok", "Se guardó correctamente"), HttpStatus.OK);
            } else {
                return new ResponseEntity<>(new respuestaSitio("error", "Error al guardar"), HttpStatus.INTERNAL_SERVER_ERROR);
            }

        } catch (IOException e) {
            return new ResponseEntity<>("Error al guardar la imagen: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
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
    public ResponseEntity<Object> update(@PathVariable String id,
            @RequestBody SitioMonumento SitioMonumentoUpdate) {
        var SitioMonumento = sitioMonumentoService.findOne(id).get();
        if (SitioMonumento != null) {

            SitioMonumento.setNombreSitioMonumento(SitioMonumentoUpdate.getNombreSitioMonumento());
            SitioMonumento.setUbicacionSitioMonumento(SitioMonumentoUpdate.getUbicacionSitioMonumento());
            SitioMonumento.setCalificacionSitioMonumento(SitioMonumentoUpdate.getCalificacionSitioMonumento());
            SitioMonumento.setDireccionSitioMonumento(SitioMonumentoUpdate.getDireccionSitioMonumento());
            SitioMonumento.setDescripcionSitioMonumento(SitioMonumentoUpdate.getDescripcionSitioMonumento());
            SitioMonumento.setDetalladaSitioMonumento(SitioMonumentoUpdate.getDetalladaSitioMonumento());
            SitioMonumento.setHorarioSitioMonumento(SitioMonumentoUpdate.getHorarioSitioMonumento());
            SitioMonumento.setFechaCreacionSitioMonumento(SitioMonumentoUpdate.getFechaCreacionSitioMonumento());
            SitioMonumento
                    .setFechaModificacionSitioMonumento(SitioMonumentoUpdate.getFechaModificacionSitioMonumento());
            SitioMonumento.setAutor(SitioMonumentoUpdate.getAutor());
            SitioMonumento.setContactoSitioMonumento(SitioMonumentoUpdate.getContactoSitioMonumento());

            sitioMonumentoService.save(SitioMonumento);
            return new ResponseEntity<>(SitioMonumento, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error Sitio o Monumento NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }

}
