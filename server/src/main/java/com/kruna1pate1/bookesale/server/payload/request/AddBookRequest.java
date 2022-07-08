package com.kruna1pate1.bookesale.server.payload.request;

import com.kruna1pate1.bookesale.server.model.Category;

/**
 * Created by KRUNAL on 01-05-2022
 */
public record AddBookRequest(
        String name,
        long price,
        String description,
        String base64image,
        int category
) {
}
