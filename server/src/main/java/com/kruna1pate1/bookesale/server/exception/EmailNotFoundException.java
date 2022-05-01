package com.kruna1pate1.bookesale.server.exception;

/**
 * Created by KRUNAL on 17-03-2022
 */
public class EmailNotFoundException extends RuntimeException {

    public EmailNotFoundException() {
        super();
    }

    public EmailNotFoundException(String msg) {
        super(msg);
    }

    public EmailNotFoundException(String msg, Throwable cause) {
        super(msg, cause);
    }
}
