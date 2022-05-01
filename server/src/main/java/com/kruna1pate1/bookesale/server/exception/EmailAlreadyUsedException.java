package com.kruna1pate1.bookesale.server.exception;

/**
 * Created by KRUNAL on 01-05-2022
 */
public class EmailAlreadyUsedException extends RuntimeException {

    public EmailAlreadyUsedException() {
        super();
    }

    public EmailAlreadyUsedException(String msg) {
        super(msg);
    }

    public EmailAlreadyUsedException(String msg, Throwable cause) {
        super(msg, cause);
    }
}
