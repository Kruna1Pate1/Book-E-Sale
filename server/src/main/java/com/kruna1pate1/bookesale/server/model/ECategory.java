package com.kruna1pate1.bookesale.server.model;

/**
 * Created by KRUNAL on 04-03-2022
 */
public enum ECategory {
    FICTION,
    MYSTERY,
    THRILLER,
    HORROR,
    HISTORICAL,
    ROMANCE,
    SCIFI,
    FANTASY;

    public static ECategory valueOfIgnoreCase(String name) {
        return valueOf(name.toUpperCase());
    }
}
