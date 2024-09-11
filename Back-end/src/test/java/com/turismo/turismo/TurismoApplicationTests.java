package com.turismo.turismo;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.turismo.turismo.Controller.usuarioController;
import com.turismo.turismo.models.Usuario;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

// @SpringBootTest
@WebMvcTest(usuarioController.class)
class TurismoApplicationTests {

	@Autowired
	private MockMvc mockMvc;

	@Test
	void contextLoads() {
	}

	@Test
	void registroUsuarioCorrecto() throws Exception{
		//se crea el usuario
		var usuario=new Usuario();
		//asignan los datos
		usuario.setNombreCompleto("Mariana");
		//el resto de los datos
		 // Convertir el objeto Item a JSON
		 
        ObjectMapper objectMapper = new ObjectMapper();
        String usuarioJson = objectMapper.writeValueAsString(usuario);
		//se realiza la petición
		mockMvc.perform(post("/api/v1/Usuario")
		//se define el tipo datos
		.contentType(MediaType.APPLICATION_JSON)
		//enviamos los datos
		.content(usuarioJson))
		.andExpect(status().isOk());
	}

}
