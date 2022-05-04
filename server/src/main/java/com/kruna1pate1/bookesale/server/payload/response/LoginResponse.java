package com.kruna1pate1.bookesale.server.payload.response;

import com.kruna1pate1.bookesale.server.model.User;

/**
 * Created by KRUNAL on 30-04-2022
 */
public record LoginResponse(
        int userId,
        User.Name name,
        String email,
        int role,
        String jwtToken
) {
}
