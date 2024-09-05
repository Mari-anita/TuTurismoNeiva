package com.turismo.turismo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IusuarioService;
import com.turismo.turismo.interfaces.Iusuario;
import com.turismo.turismo.models.Usuario;
import com.turismo.turismo.models.authResponse;
import com.turismo.turismo.models.loginRequest;
import com.turismo.turismo.models.registroRequest;
import com.turismo.turismo.models.role;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class authService implements IusuarioService {

    private final Iusuario dataUser;
    private final jwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;

    @Override
    public authResponse registro(registroRequest request){
        Usuario userData = Usuario.builder()
        .nombreCompleto(request.getNombreCompleto())
        .role(role.Usuario)
        .correoElectronico(request.getCorreoElectronico())
        .contra(passwordEncoder.encode(request.getContra()))
        .coContra(passwordEncoder.encode(request.getCoContra()))
        .build();
        dataUser.save(userData);
        return authResponse.builder()
        .Token(jwtService.getToken(userData))
        .build();
    }


    @Override
    public String save(Usuario Usuario) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'save'");
    }

    @Override
    public List<Usuario> findAll() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findAll'");
    }

    @Override
    public Optional<Usuario> findOne(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findOne'");
    }

    @Override
    public List<Usuario> Filtros(String filtros) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'Filtros'");
    }

    @Override
    public Optional<Usuario> findBycorreoElectronico(String correoElectronico) {
        return dataUser.findByCorreoElectronico(correoElectronico);
    }

    @Override
    public boolean delete(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

    public authResponse login(loginRequest request){
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(request.getCorreoElectronico(), request.getContra()));
            Usuario usuario = findBycorreoElectronico(request.getCorreoElectronico()).orElseThrow();
            String Token = jwtService.getToken(usuario);
            return authResponse.builder().Token(Token).build();
    }
    
}
