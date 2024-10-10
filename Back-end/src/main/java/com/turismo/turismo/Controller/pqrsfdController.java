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
import org.springframework.web.bind.annotation.RestController;
import java.util.concurrent.ThreadLocalRandom;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import com.turismo.turismo.interfaceService.IpqrsfdService;
import com.turismo.turismo.models.Pqrsfd;
import com.turismo.turismo.models.authResponse;
import com.turismo.turismo.models.pqrsfdRegistroRequest;
import com.turismo.turismo.models.pqrsfdRegistroResponse;
import com.turismo.turismo.service.authService;
import com.turismo.turismo.service.emailService;

@RequestMapping("/api/v1/publico/Pqrsfd/")
@RestController
public class pqrsfdController {

    @Autowired
    private emailService emailService;

    @Autowired
    private IpqrsfdService pqrsfdService;

    @Autowired
    private authService authService;

    @PostMapping("/")
    public ResponseEntity<Object> save(@RequestBody Pqrsfd Pqrsfd) {
        // validaciones
        if (Pqrsfd.getTipoDoc().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Pqrsfd.getNumDoc().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Pqrsfd.getNombreApellido().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Pqrsfd.getCorreo().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Pqrsfd.getFechaRadicado().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Pqrsfd.getTipoPeticion().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Pqrsfd.getDescripcionPeticion().equals("")) {
            return new ResponseEntity<>("Este campo es obligatorio", HttpStatus.BAD_REQUEST);
        }

        // SimpleDateFormat formato = new SimpleDateFormat("yyyyMMddHHmmss");
        // String fechaFormateada = formato.format(new Date());
        // Pqrsfd.setCode(Pqrsfd.getTipoPeticion().substring(0,1)+fechaFormateada) ;
        SimpleDateFormat formato = new SimpleDateFormat("yyyy");
        String fechaFormateada = formato.format(new Date());
        var consecutivo = String.valueOf(pqrsfdService.findAll().size()+1);
        var codigo = Pqrsfd.getTipoPeticion().substring(0, 1)+fechaFormateada + "00000";
        codigo = codigo.substring(0, codigo.length() - consecutivo.length());
        codigo = codigo + consecutivo;
        Pqrsfd.setCode(codigo);

        pqrsfdService.save(Pqrsfd);
        //envíar correo electronico
        
        authResponse response = new authResponse();
       
            response.setMensaje("Se registró correctamente");
            //para envíar el correo electronico
            emailService.enviarCorreoRadicadoPqrsfd(Pqrsfd.getCorreo(), Pqrsfd.getNombreApellido(), Pqrsfd.getCode());
            
        
        return new ResponseEntity<Object>(Pqrsfd, HttpStatus.OK);
    }


    // @PostMapping("/enviarCorreo")
    // public ResponseEntity<Object> enviarCorreo(@RequestBody Pqrsfd Pqrsfd) {
    //     // Pqrsfd.setCode
    //     emailService.enviarCorreoRadicadoPqrsfd(Pqrsfd.getCorreo(), Pqrsfd.getNombreApellido(), Pqrsfd.getCorreo(),
    //             Pqrsfd.getCode());

    //     // Devuelve un objeto JSON con un mensaje
    //     return new ResponseEntity<>(new HashMap<String, String>() {
    //         {
    //             put("message", "Correo enviado exitosamente");
    //         }
    //     }, HttpStatus.OK);
    // }

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
    public ResponseEntity<Object> update(@PathVariable String id, @RequestBody Pqrsfd PqrsfdUpdate) {
        var Pqrsfd = pqrsfdService.findOne(id).get();
        if (Pqrsfd != null) {

            Pqrsfd.setTipoDoc(PqrsfdUpdate.getTipoDoc());
            Pqrsfd.setNumDoc(PqrsfdUpdate.getNumDoc());
            Pqrsfd.setNombreApellido(PqrsfdUpdate.getNombreApellido());
            Pqrsfd.setCorreo(PqrsfdUpdate.getCorreo());
            Pqrsfd.setFechaRadicado(PqrsfdUpdate.getFechaRadicado());
            Pqrsfd.setTipoPeticion(PqrsfdUpdate.getTipoPeticion());
            Pqrsfd.setDescripcionPeticion(PqrsfdUpdate.getDescripcionPeticion());

            pqrsfdService.save(Pqrsfd);
            return new ResponseEntity<>(Pqrsfd, HttpStatus.OK);

        } else {
            return new ResponseEntity<>("Error pqrsfd NO Encontrado", HttpStatus.BAD_REQUEST);
        }
    }


}
