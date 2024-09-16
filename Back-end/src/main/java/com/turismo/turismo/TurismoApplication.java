package com.turismo.turismo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import javax.crypto.SecretKey;
import java.util.Base64;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

@SpringBootApplication
public class TurismoApplication {

	public static void main(String[] args) {
		SpringApplication.run(TurismoApplication.class, args);
		// System.out.println("Contraseña generada aleatoriamente: " + getBase64Key());
	}

	// private static final SecretKey secret_key = Keys.secretKeyFor(SignatureAlgorithm.HS256);

	// private static String getBase64Key() {
	// 	var key = Base64.getEncoder().encodeToString(secret_key.getEncoded());
	// 	return key;
	// }

}
