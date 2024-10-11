package com.turismo.turismo.interfaces;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.turismo.turismo.models.Pqrsfd;

@Repository
public interface Ipqrsfd extends JpaRepository<Pqrsfd, String> {

    @Query("SELECT P FROM Pqrsfd P WHERE P.numDoc = ?1")
    Optional<Pqrsfd> findBynumDoc(String numDoc);

    Optional<Pqrsfd> findTopByNumDocOrderByFechaRadicadoDesc(String numDoc);

    @Query("SELECT P FROM Pqrsfd P WHERE P.code LIKE %?1%")
    List<Pqrsfd> filtroPqrsfd(String filtro);

}
