package com.kruna1pate1.bookesale.server.payload.request;

/**
 * Created by KRUNAL on 18-03-2022
 */
public record RegisterRequest(
        String firstName,
        String lastName,
        String email,
        String password,
        String role
) {
}
