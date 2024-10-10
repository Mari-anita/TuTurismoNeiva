package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;

import com.turismo.turismo.models.SitioMonumento;

public interface IsitioMonumentoService {

    // Guardar un nuevo SitioMonumento
    public String save(SitioMonumento sitioMonumento);

    // Consultar todos los SitioMonumento
    public List<SitioMonumento> findAll();

    // Consultar un SitioMonumento específico por su ID
    public Optional<SitioMonumento> findOne(String id);

    // Eliminar un SitioMonumento permanentemente
    public int deleteForever(String id);

    // Filtrar SitioMonumento por nombre
    public List<SitioMonumento> FiltrarnombreSitioMonumento(String nombreSitioMonumento);

    // Filtrar SitioMonumento por dirección
    public List<SitioMonumento> FiltrardireccionSitioMonumento(String direccionSitioMonumento);

    // Consultar SitioMonumento
    public List<SitioMonumento> consultarSitioMonumento();

    // Guardar imagen en formato JSON
    public int guardarImagenJson(SitioMonumento sitioMonumento);
}
