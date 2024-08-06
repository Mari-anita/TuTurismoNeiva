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

import com.turismo.turismo.interfaceService.IempresaService;
import com.turismo.turismo.models.Empresa;



@RequestMapping("/api/v1/Empresa/")
@RestController
public class empresaController {

    @Autowired
    private IempresaService empresaService;

    @PostMapping("/")
    public ResponseEntity<Object> save (@ModelAttribute("Empresa") Empresa Empresa){
        //Validaciones
        if (Empresa.getNombreEmpresa().equals("")) {
            return new ResponseEntity<>("El campo nombre de empresa es obligatorio", HttpStatus.BAD_REQUEST);
        }

        if (Empresa.getCorreoElectronico().equals("")) {
            return new ResponseEntity<>("El campo correo electronico es obligatorio", HttpStatus.BAD_REQUEST);
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

        if(Empresa.getTelefono().equals("")){
            return new ResponseEntity<>("El campo teléfono es obligatorio",HttpStatus.BAD_REQUEST);
        }

        empresaService.save(Empresa);
        return new ResponseEntity<>(Empresa, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> findOne(@PathVariable String id){
        var Empresa = empresaService.findOne(id);
        return new ResponseEntity<>(Empresa, HttpStatus.OK);
    }

    @DeleteMapping("/eliminarPermanente/{id}")
    public ResponseEntity<Object>deleteForever(@PathVariable String id){
        empresaService.deleteForever(id);
        return new ResponseEntity<>("Registro eliminado permanentemente",HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Object> update(@PathVariable String id, @ModelAttribute("Empresa") Empresa EmpresaUpdate){
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
