package com.kruna1pate1.bookesale.server.payload.response;

/**
 * Created by KRUNAL on 30-04-2022
 */
public record LoginResponse(
        int userId,
        String firstName,
        String lastName,
        String email,
        String role,
        String jwtToken
) {
}
