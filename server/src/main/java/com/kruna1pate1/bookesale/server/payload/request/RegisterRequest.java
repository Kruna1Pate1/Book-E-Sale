package com.kruna1pate1.bookesale.server.payload.request;

import com.kruna1pate1.bookesale.server.model.User;

/**
 * Created by KRUNAL on 18-03-2022
 */
public record RegisterRequest(
        User.Name name,
        String email,
        String password,
        String confirmPassword,
        int role
) {
}
