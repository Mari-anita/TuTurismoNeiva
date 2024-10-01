package com.turismo.turismo.Controller;

import java.util.concurrent.ThreadLocalRandom;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

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

import com.turismo.turismo.interfaceService.IempresaService;
import com.turismo.turismo.models.Empresa;
import com.turismo.turismo.service.emailService;

@RequestMapping("/api/v1/publico/Empresa")
@RestController
public class empresaController {

    private static int numeroAleatorioEnRango(int minimo,int maximo){
        return ThreadLocalRandom.current().nextInt(minimo,maximo + 1);
    }

    private String codigoAleatorio(){
        int longitud=8;
        String banco="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        String cadena="";
        for (int x=0; x< longitud; x++){
            int indiceAleatorio=numeroAleatorioEnRango(0,banco.length()-1);
            char caracterAleatorio=banco.charAt(indiceAleatorio);
            cadena += caracterAleatorio;
        }

        return cadena;
    }
    
    @Autowired
    private IempresaService empresaService;

    @Autowired
    private emailService emailService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@RequestBody Empresa Empresa){
        //Validaciones
        if (Empresa.getNombreEmpresa().equals("")) {
            return new ResponseEntity<>("El campo nombre de empresa es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Empresa.getCorreoElectronico().equals("")) {
            return new ResponseEntity<>("El campo correo electronico es obligatorio", HttpStatus.BAD_REQUEST);
        }

        String correoElectronico = Empresa.getCorreoElectronico();
        //expresion para validar el correo
        String emailRegex = "^[^\\s@]+@[^\\s@]+\\.(com|es|org|net)$";
        Pattern pattern = Pattern.compile(emailRegex);
        Matcher matcher = pattern.matcher(correoElectronico);

        if(!matcher.matches()){
            return new ResponseEntity<>("Verifica tu correo electrónico parece no válido",HttpStatus.BAD_REQUEST);
        }

        //Verificar si el correo ya se encuentra registrado
        if(empresaService.findBycorreoElectronico(Empresa.getCorreoElectronico()).isPresent()){
            return new ResponseEntity<>("El correo electrónico ya se encuentra registrado",HttpStatus.BAD_REQUEST);
        }

        if (Empresa.getTipoEmpresa().equals("")){
            return new ResponseEntity<>("El campo tipo empresa es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if(Empresa.getNombreRepresentante().equals("")){
            return new ResponseEntity<>("El campo nombre representante es obligatorio",HttpStatus.BAD_REQUEST);
        }

        if(Empresa.getDireccion().equals("")){
            return new ResponseEntity<>("El campo direccion es obligatorio",HttpStatus.BAD_REQUEST);
        }

        if(Empresa.getServicios().equals("")){
            return new ResponseEntity<>("El campo servicios es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if(Empresa.getNit().equals("")){
            return new ResponseEntity<>("El campo nit es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if(!Empresa.getNit().matches("\\d{9}")){
            return new ResponseEntity<>("El NIT debe contener exactamente 9 dígitos numéricos", HttpStatus.BAD_REQUEST);
        }
        
        if(Empresa.getTelefono().equals("")){
            return new ResponseEntity<>("El campo teléfono es obligatorio",HttpStatus.BAD_REQUEST);
        }

        Empresa.setPassword(codigoAleatorio());

        empresaService.save(Empresa);
        emailService.enviarCorreoSolicitudEmpresa(Empresa.getCorreoElectronico());
        return new ResponseEntity<>(Empresa, HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<Object> findAll() {
        var ListaEmpresa = empresaService.findAll();
        return new ResponseEntity<>(ListaEmpresa, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id){
        var Empresa = empresaService.findOne(id);
        return new ResponseEntity<>(Empresa, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object>delete(@PathVariable String id){
        empresaService.delete(id);
        return new ResponseEntity<>("Registro eliminado",HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @RequestBody Empresa EmpresaUpdate){
        var Empresa = empresaService.findOne(id).get();
        if (Empresa != null){

            Empresa.setNombreEmpresa(EmpresaUpdate.getNombreEmpresa());
            Empresa.setCorreoElectronico(EmpresaUpdate.getCorreoElectronico());
            Empresa.setTipoEmpresa(EmpresaUpdate.getTipoEmpresa());
            Empresa.setNombreRepresentante(EmpresaUpdate.getNombreRepresentante());
            Empresa.setDireccion(EmpresaUpdate.getDireccion());
            Empresa.setServicios(EmpresaUpdate.getServicios());
            Empresa.setNit(EmpresaUpdate.getNit());
            Empresa.setTelefono(EmpresaUpdate.getTelefono());


            empresaService.save(Empresa);
            return new ResponseEntity<>(Empresa, HttpStatus.OK);

        }else{
            return new ResponseEntity<>("error empresa NO encontrado", HttpStatus.BAD_REQUEST);
        }
    }
}
