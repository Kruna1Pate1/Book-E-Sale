package com.kruna1pate1.bookesale.server.exception;

/**
 * Created by KRUNAL on 01-05-2022
 */
public class CategoryNotFoundException extends RuntimeException {

    public CategoryNotFoundException() {
        super();
    }

    public CategoryNotFoundException(String msg) {
        super(msg);
    }

    public CategoryNotFoundException(String msg, Throwable cause) {
        super(msg, cause);
    }
}
