package com.kruna1pate1.bookesale.server.payload.request;

/**
 * Created by KRUNAL on 30-04-2022
 */
public record LoginRequest(
        String email,
        String password
) {
}
