package com.kruna1pate1.bookesale.server.util;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.crypto.SecretKey;
import javax.servlet.http.HttpServletRequest;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

/**
 * Created by KRUNAL on 04-03-2022
 */
@Slf4j
@Service
public class JwtUtil {

    private final long expirationMs;
    private final SecretKey secretKey;

    public JwtUtil(@Value("${app.jwt.secret}") String secret, @Value("${app.jwt.expirationMs}") long expirationMs) {
        this.secretKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        this.expirationMs = expirationMs;
    }

    public String extractUsername(String token) {
        return extractClaim(token, Claims::getSubject);
    }

    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = extractAllClaims(token);
        return claimsResolver.apply(claims);
    }

    private Claims extractAllClaims(String token) {
        return Jwts.parserBuilder().setSigningKey(secretKey).build()
                .parseClaimsJws(token).getBody();
    }

    private Boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    public String generateToken(UserDetails userDetails) {
        Map<String, Object> claims = new HashMap<>();
        return createToken(claims, userDetails.getUsername());
    }

    private String createToken(Map<String, Object> claims, String subject) {

        return Jwts.builder()
                .setClaims(claims)
                .setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + expirationMs))
                .signWith(secretKey)
                .compact();
    }

    public void validateJwtToken(String token) throws JwtException {
        try {
            Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token);

        } catch (SignatureException e) {
            log.error("Invalid JWT signature: {}", e.getMessage());
            throw new SignatureException("Invalid JWT signature, login again");

        } catch (MalformedJwtException e) {
            log.error("Invalid JWT token: {}", e.getMessage());
            throw new MalformedJwtException("Invalid JWT Token, login again");

        } catch (ExpiredJwtException e) {
            log.error("JWT token is expired: {}", e.getMessage());
            throw new ExpiredJwtException(e.getHeader(), e.getClaims(), "JWT token is expired, login again");

        } catch (UnsupportedJwtException e) {
            log.error("JWT token is unsupported: {}", e.getMessage());
            throw new UnsupportedJwtException("JWT token is unsupported, login again");

        } catch (IllegalArgumentException e) {
            log.error("JWT claims string is empty: {}", e.getMessage());
            throw new IllegalArgumentException("JWT claims string is empty, login again");

        }
    }

    public String parseJwt(HttpServletRequest request) {
        String jwtHeader = request.getHeader("Authorization");
        if (StringUtils.hasText(jwtHeader) && jwtHeader.startsWith("Bearer ")) {
            return jwtHeader.substring(7);
        }
        return null;
    }

    public String parseJwt(String jwtHeader) {
        if (StringUtils.hasText(jwtHeader) && jwtHeader.startsWith("Bearer ")) {
            return jwtHeader.substring(7);
        }
        return null;
    }
}
