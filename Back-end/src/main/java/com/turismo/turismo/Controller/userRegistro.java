package com.turismo.turismo.Controller;

import java.util.Collection;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

public class userRegistro implements UserDetails{
    // Atributos personalizados de userRegistro
    private String password;
    private String username;

    // Implementa los métodos de UserDetails
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        // Lógica para las autoridades
        return null;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
