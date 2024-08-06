package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IempresaService;
import com.turismo.turismo.interfaces.Iempresa;
import com.turismo.turismo.models.Empresa;

@Service
public class empresaService implements IempresaService {

    @Autowired
    private Iempresa data;

    @Override
    public String save (Empresa Empresa){
        data.save(Empresa);
        return Empresa.getIdEmpresa();
    }

    @Override
    public List<Empresa> findAll(){
        List<Empresa> listaEmpresa = (List<Empresa>) data.findAll();
        return listaEmpresa;
    }

    @Override
    public Optional<Empresa> findOne(String id){
        Optional<Empresa> Empresa = data.findById(id);
        return Empresa;
    }

    @Override
    public int deleteForever(String id){
        data.deleteById(id);
        return 1;
    }
}
