package com.turismo.turismo.service;

import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Service
public class jwtService {

    private static final String secret_key = "+Fkg2cLC/g6BUiTU52iqZQ7iOgMZRyZrj5Z0wUX0xf8=";

    public String getToken(UserDetails userData) {
        return getToken(new HashMap<>(), userData);
    }

    private String getToken(HashMap<String, Object> extraClaims, UserDetails userData) {
        return Jwts
                .builder()
                .setClaims(extraClaims)
                .setSubject(userData.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
                .signWith(getKey(), SignatureAlgorithm.HS256)
                .compact();

    }



    private Key getKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secret_key);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public String getCorreoElectronicoFromToken(String Token) {
        return getClaims(Token, Claims::getSubject);
    }

    public boolean isTokenValid(String Token, UserDetails userDetails) {
        final String correoElectronico = getCorreoElectronicoFromToken(Token);
        return (correoElectronico.equals(userDetails.getUsername()) && !isTokenExpired(Token));
    }

    private boolean isTokenExpired(String Token) {
        return getExpiration(Token).before(new Date());
    }

    private Date getExpiration(String Token) {
        return getClaims(Token, Claims::getExpiration);
    }

    public Claims getAllClaims(String Token) {
        return Jwts
                .parserBuilder()
                .setSigningKey(getKey())
                .build()
                .parseClaimsJws(Token)
                .getBody();
    }

    public <T> T getClaims(String Token, Function<Claims, T> claimsResolver) {
        final Claims claims = getAllClaims(Token);
        return claimsResolver.apply(claims);
    }
}
