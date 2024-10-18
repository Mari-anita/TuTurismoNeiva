package com.turismo.turismo.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class corsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        config.addAllowedOrigin("http://tuturismoneiva.com");
        // config.addAllowedOrigin("http://82.112.245.162:80");
        // permite solicitudes desde todos los origenes
        config.addAllowedOrigin("*");
        // permite solicitudes con estos metodos HTTP
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");

        // permitir el envio de ciertoe encabezados en las solicitudes
        config.addAllowedHeader("Authorization");
        config.addAllowedHeader("Content-Type");

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
