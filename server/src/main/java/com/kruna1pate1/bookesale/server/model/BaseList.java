package com.kruna1pate1.bookesale.server.model;

import java.util.List;

/**
 * Created by KRUNAL on 27-06-2022
 */
public record BaseList<T>(
        List<T> records,
        int totalRecords
) {
}
