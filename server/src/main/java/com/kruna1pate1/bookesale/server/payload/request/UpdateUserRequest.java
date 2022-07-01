package com.kruna1pate1.bookesale.server.payload.request;

import com.kruna1pate1.bookesale.server.model.User;

/**
 * Created by KRUNAL on 02-05-2022
 */
public record UpdateUserRequest(
        User.Name name,
        String password,
        int role
) {
}
