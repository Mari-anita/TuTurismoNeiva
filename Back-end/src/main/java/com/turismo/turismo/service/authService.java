package com.turismo.turismo.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.sql.Timestamp;
import java.time.LocalDateTime;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;

import com.turismo.turismo.interfaceService.IusuarioService;
import com.turismo.turismo.interfaces.Ipqrsfd;
import com.turismo.turismo.interfaces.Iusuario;
import com.turismo.turismo.models.Pqrsfd;
import com.turismo.turismo.models.Usuario;
import com.turismo.turismo.models.authResponse;
import com.turismo.turismo.models.loginRequest;
import com.turismo.turismo.models.pqrsfdRegistroRequest;
import com.turismo.turismo.models.pqrsfdRegistroResponse;
import com.turismo.turismo.models.registroRequest;
import com.turismo.turismo.models.role;
import java.time.Duration;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class authService implements IusuarioService {

    @Autowired
    private Ipqrsfd pqrsfdRepository;
    private final Ipqrsfd dataPqrsfd;
    private final Iusuario dataUser;
    private final jwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsService userDetailsService; // Inyectamos UserDetailsService

    // METODO PARA REGISTRAR EL USUARIO
    @Override
    public authResponse registro(registroRequest request) {
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

    public pqrsfdRegistroResponse registroPqrsfd(pqrsfdRegistroRequest request, String tokenOptional) {
        pqrsfdRegistroResponse response = new pqrsfdRegistroResponse();

        // Validar si el usuario tiene un token válido
        boolean isAuthenticated = false;
        role userRole = role.Invitado; // Valor por defecto: Invitado

        // Validar si el usuario tiene un token válido
        if (tokenOptional != null && !tokenOptional.isEmpty()) { // Verifica que el token no sea nulo o vacío
            try {
                // Extrae el correo electrónico (o username) del token JWT
                String userEmail = jwtService.extractUsername(tokenOptional);

                // Extrae la fecha de expiración del token
                Date expirationDate = jwtService.extractExpiration(tokenOptional);

                // Verifica si el token ha expirado
                if (expirationDate.before(new Date())) {
                    response.setMensaje("Token inválido o expirado."); // Si el token ha expirado, se responde con un mensaje de token inválido
                    return response; // Termina la ejecución y devuelve la respuesta con el mensaje de error
                }

                // Carga los detalles del usuario utilizando el correo electrónico extraído del
                // token
                UserDetails userDetails = userDetailsService.loadUserByUsername(userEmail);

                // Valida si el token es válido para el usuario cargado
                isAuthenticated = jwtService.isTokenValid(tokenOptional, userDetails);
                if (isAuthenticated) {
                    userRole = role.Usuario; // Si el token es válido, se asigna el rol de Usuario
                }
            } catch (Exception e) { // Captura cualquier excepción que ocurra durante la validación del token
                response.setMensaje("Token inválido o expirado."); // Si hay un error, se responde con un mensaje de token inválido
                return response; // Termina la ejecución y devuelve la respuesta con el mensaje de error
            }
        }

        // Buscar el último registro del usuario basado en su numDoc o correo
        Optional<Pqrsfd> lastRequest = pqrsfdRepository.findTopByNumDocOrderByFechaRadicadoDesc(request.getNumDoc());

        // Si existe una solicitud previa, verificar el tiempo transcurrido
        if (lastRequest.isPresent()) {
            Pqrsfd previousRequest = lastRequest.get();
            LocalDateTime now = LocalDateTime.now();
            LocalDateTime lastRequestTime = previousRequest.getFechaRadicado().toLocalDateTime();

            // Verificar si ha pasado más de una hora
            if (Duration.between(lastRequestTime, now).toHours() < 1) {
                response.setMensaje("Debe esperar una hora antes de enviar otra solicitud.");
                return response;
            }
        }

        // Proceder con el registro si no hay solicitud reciente
        Pqrsfd pqrsfd = new Pqrsfd();
        pqrsfd.setTipoDoc(request.getTipoDoc());
        pqrsfd.setNumDoc(request.getNumDoc());
        pqrsfd.setNombreApellido(request.getNombreApellido());
        pqrsfd.setCorreo(request.getCorreo());
        pqrsfd.setFechaRadicado(Timestamp.valueOf(LocalDateTime.now())); // Registrar la fecha actual
        pqrsfd.setTipoPeticion(request.getTipoPeticion());
        pqrsfd.setDescripcionPeticion(request.getDescripcionPeticion());

        // Asignar el rol al PQRSFD
        pqrsfd.setRole(userRole);
        pqrsfdRepository.save(pqrsfd);

        // Generar el token basado en la información del usuario o de PQRSFD
        String token = jwtService.getTokenPqrsfd(pqrsfd); // Aquí deberías ajustar si el token se basa en otro criterio
        // Al final, antes de devolver la respuesta, asigna el request
        response.setRequest(request); // Asignar el request recibido a la respuesta
        // Asignar la información al response
        response.setMensaje("Solicitud PQRSFD registrada exitosamente.");
        response.setToken(token); // Aquí asignas el token generado
        response.setNombreCompleto(pqrsfd.getNombreApellido()); // Asignar el nombre completo
        response.setRole(userRole);

        return response;
    }

    // METODO PARA INICIAR SESION
    public authResponse login(loginRequest request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(request.getCorreoElectronico(), request.getContra()));
        Usuario usuario = findBycorreoElectronico(request.getCorreoElectronico()).orElseThrow();
        String Token = jwtService.getToken(usuario);
        // return authResponse.builder().Token(Token).build();
        return authResponse.builder().Token(Token).mensaje("Acceso Permitido").emailExists(false).build();
    }

    // //METODO DUPLICADO DE INICIO D SESION, PARA VERIFICAR EL TOKEN
    public Optional<authResponse> verificarToken(String Token) {
        try {// VERIFICAMOS EL TOKEN USANDO EL JWT
            UserDetails userdetails = dataUser.findByCorreoElectronico(jwtService.getCorreoElectronicoFromToken(Token))
                    .orElse(null);
            if (userdetails != null && jwtService.isTokenValid(Token, userdetails)) {
                // return Optional.of(authResponse.builder().Token(Token).build());
                return Optional.of(authResponse.builder().Token(Token).mensaje("Token valido. Usuario Registrado")
                        .emailExists(false).build());
            }
        } catch (Exception e) {
            // MANEJAR CUALQUIER EXCEPCION QUE PUEDA OCURRIR DURANTE LA VERIFICACION DEL
            // TOKEN
            e.printStackTrace();
        }
        return Optional.empty();// TOKEN NO VALIDO o NO REGISTRADO
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
    public Optional<Usuario> findByNombreCompleto(String nombreCompleto) {
        return dataUser.findByNombreCompleto(nombreCompleto);
    }

    @Override
	public void savePasswordResetToken(Usuario usuario, String token) {
		// TODO Auto-generated method stub
	}

    @Override
    public Optional<Usuario> findBycorreoElectronico(String correoElectronico) {
        return dataUser.findByCorreoElectronico(correoElectronico);
    }

    // Método que busca por numDoc
    public Optional<Pqrsfd> findBynumDoc(String numDoc) {
        return dataPqrsfd.findBynumDoc(numDoc); // Llamada al método del repositorio
    }

    @Override
    public boolean delete(String id) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'delete'");
    }

}
