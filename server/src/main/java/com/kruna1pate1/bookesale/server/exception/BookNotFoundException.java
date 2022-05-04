package com.kruna1pate1.bookesale.server.exception;

/**
 * Created by KRUNAL on 01-05-2022
 */
public class BookNotFoundException extends RuntimeException {

    public BookNotFoundException() {
        super();
    }

    public BookNotFoundException(String msg) {
        super(msg);
    }

    public BookNotFoundException(String msg, Throwable cause) {
        super(msg, cause);
    }
}
