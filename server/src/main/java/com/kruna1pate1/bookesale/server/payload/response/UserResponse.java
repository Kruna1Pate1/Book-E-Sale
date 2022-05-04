package com.kruna1pate1.bookesale.server.payload.response;

/**
 * Created by KRUNAL on 02-05-2022
 */
public record UserResponse(
        int userId,
        String firstName,
        String lastName,
        String email,
        String role,
        String jwtToken
) {
}
