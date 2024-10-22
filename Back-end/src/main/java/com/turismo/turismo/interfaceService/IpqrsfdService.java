package com.turismo.turismo.interfaceService;

import java.util.List;
import java.util.Optional;
import com.turismo.turismo.models.Pqrsfd;

public interface IpqrsfdService {
    String save(Pqrsfd pqrsfd);

    List<Pqrsfd> findAll();

    Optional<Pqrsfd> findOne(String id);

    int deleteForever(String id);

    Optional<Pqrsfd> findBynumDoc(String numDoc);

    Optional<Pqrsfd> findByCodigo(String codigo); // Agregado
}
