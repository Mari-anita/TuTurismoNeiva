package com.turismo.turismo.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.turismo.turismo.interfaceService.IusuarioService;
import com.turismo.turismo.interfaces.IPasswordResetTokenRepository;
import com.turismo.turismo.interfaces.Iusuario;
import com.turismo.turismo.models.RecuperarContrasena;
import com.turismo.turismo.models.Usuario;
import com.turismo.turismo.models.authResponse;
import com.turismo.turismo.models.registroRequest;

@Service
public class usuarioService implements IusuarioService {

    @Autowired
    private Iusuario data;

    @Autowired
	private IPasswordResetTokenRepository tokenRepository;

	public void savePasswordResetToken(Usuario usuario, String token) {
	    RecuperarContrasena resetToken = new RecuperarContrasena();
	    resetToken.setUsuario(usuario);
	    resetToken.setToken(token);
	    resetToken.setExpiryDate(LocalDateTime.now().plusHours(24)); // Cambiado a 24 horas

	    // Guarda el token en la base de datos
	    tokenRepository.save(resetToken);
	}

    @Override 
    public String save(Usuario Usuario) {
        data.save(Usuario);
        return Usuario.getIdUsuario();
    }

    @Override
    public List<Usuario> findAll() {  ///MOSTRAR TODA LA LISTA
        List<Usuario> ListaUsuario = (List<Usuario>) data.findAll();
        return ListaUsuario;
    }

    @Override
    public Optional<Usuario> findOne(String id) {
        Optional<Usuario> Usuario = data.findById(id);
        return Usuario; 
    }

    @Override
    public List<Usuario> Filtros(String filtros) {  //FILTRAR POR NOMBRE COMPLETO
        List<Usuario> ListaUsuario = data.Filtros(filtros);
        return ListaUsuario;
    }

    @Override
	    public Optional<Usuario> findByNombreCompleto(String nombreCompleto) {
	    return data.findByNombreCompleto(nombreCompleto);

	}

    @Override
    public Optional<Usuario> findBycorreoElectronico(String correoElectronico) {
        return data.findBycorreoElectronico(correoElectronico);
    }
    @Override
    public boolean delete(String id) {
        if (data.existsById(id)) {
            data.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

    @Override
    public authResponse registro(registroRequest request) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'registro'");
    }
}
