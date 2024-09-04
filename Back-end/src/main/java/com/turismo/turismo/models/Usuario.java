package com.turismo.turismo.models;

import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "Usuario")
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "idUsuario", nullable = false, length = 36)
    private String idUsuario;

    @Column(name = "nombreCompleto", nullable = false, length = 60)
    private String nombreCompleto;

    @Column(name = "correoElectronico", nullable = false, length = 100)
    private String correoElectronico;

    @Column(name = "contra", nullable = false, length = 36)
    private String contra;

    @Column(name = "coContra", nullable = false, length = 36)
    private String coContra;

    @Enumerated(EnumType.STRING)
    private role role;

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities(){
        return List.of(new SimpleGrantedAuthority(this.role.name()));
    }
    @Override
    public String getContra(){
        return this.contra;
    }

    @Override
    public String getCorreoElectronico(){
        return this.correoElectronico;
    }

}
