package com.megacity.megacity.security;

import io.jsonwebtoken.*;
import org.springframework.stereotype.Component;
import java.util.Date;

    @Component
    public class JwtUtil {
        private String secretKey = "secret"; // Change this to a secure key

        public String generateToken(String username) {
            return Jwts.builder()
                    .setSubject(username)
                    .setIssuedAt(new Date())
                    .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10)) // 10 hours
                    .signWith(SignatureAlgorithm.HS256, secretKey)
                    .compact();
        }

        public String extractUsername(String token) {
            return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
        }

        public boolean validateToken(String token, String username) {
            return (username.equals(extractUsername(token)) && !isTokenExpired(token));
        }

        private boolean isTokenExpired(String token) {
            return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getExpiration().before(new Date());
        }
    }

