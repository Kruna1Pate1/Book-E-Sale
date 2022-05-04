package com.kruna1pate1.bookesale.server.model;

/**
 * Created by KRUNAL on 04-03-2022
 */
public enum ERole {
    ADMIN,
    SELLER,
    BUYER;

    public static ERole valueOfIgnoreCase(String name) {
        return valueOf(name.toUpperCase());
    }
}
