package com.kruna1pate1.bookesale.server.payload.response;

/**
 * Created by KRUNAL on 18-03-2022
 */
public record RegisterResponse(
        int userId,
        String firstName,
        String lastName,
        String email,
        String password,
        String role
) {
}
