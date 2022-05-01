package com.kruna1pate1.bookesale.server.exception;

/**
 * Created by KRUNAL on 17-03-2022
 */
public class RoleNotFoundException extends RuntimeException {

    public RoleNotFoundException(String message) {
        super(message);
    }

    public RoleNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
