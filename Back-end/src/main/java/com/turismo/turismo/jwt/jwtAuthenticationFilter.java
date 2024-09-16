package com.turismo.turismo.jwt;

import java.io.IOException;

import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.turismo.turismo.service.jwtService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;

@Component
@AllArgsConstructor
public class jwtAuthenticationFilter extends OncePerRequestFilter {

    private final jwtService jwtService;
    private final UserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        final String Token = getTokenFromRequest(request);
        final String correoElectronico;
        System.out.println("Token obtenido: " + Token);
        if (Token == null) {
            filterChain.doFilter(request, response);
            return;
        }

        // correoElectronico = jwtService.getCorreoElectronicoFromToken(Token);
        // if (correoElectronico != null && SecurityContextHolder.getContext().getAuthentication() == null) {
        //     var userDetails = userDetailsService.loadUserByUsername(correoElectronico);
        //     if (jwtService.isTokenValid(Token, userDetails)) {
        //         UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails,
        //                 null, userDetails.getAuthorities());
        //         authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
        //         SecurityContextHolder.getContext().setAuthentication(authToken);
        //     }
        // }
        // filterChain.doFilter(request, response);

        try {
            // Obtener el correo electrónico desde el token
            correoElectronico = jwtService.getCorreoElectronicoFromToken(Token);
            System.out.println("Correo electrónico extraído del token: " + correoElectronico);

            if (correoElectronico != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                // Cargar detalles del usuario
                var userDetails = userDetailsService.loadUserByUsername(correoElectronico);
                System.out.println("Detalles del usuario cargados: " + userDetails.getUsername());

                // Validar el token
                if (jwtService.isTokenValid(Token, userDetails)) {
                    // Crear token de autenticación
                    UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                    authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

                    // Establecer el contexto de seguridad
                    SecurityContextHolder.getContext().setAuthentication(authToken);
                    System.out.println("Autenticación exitosa para el usuario: " + correoElectronico);
                } else {
                    System.out.println("Token inválido para el usuario: " + correoElectronico);
                }
            }
        } catch (Exception e) {
            System.out.println("Error al procesar el token: " + e.getMessage());
        }

        // Continuar con el filtro
        filterChain.doFilter(request, response);


    }

    private String getTokenFromRequest(HttpServletRequest request) {

        final String authHeader = request.getHeader(HttpHeaders.AUTHORIZATION);
        // Depurar el valor de authHeader
        System.out.println("Authorization Header: " + authHeader);

        if (StringUtils.hasText(authHeader) && authHeader.startsWith("Bearer ")) {
            return authHeader.substring(7);
        }
        return null;
    }
}
