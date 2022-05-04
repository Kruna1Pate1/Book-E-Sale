package com.kruna1pate1.bookesale.server.payload.request;


import javax.validation.constraints.Size;

/**
 * Created by KRUNAL on 30-04-2022
 */
public record LoginRequest(
        String email,
        String password
) {
}
