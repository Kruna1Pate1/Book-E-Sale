package com.kruna1pate1.bookesale.server.payload.response;

import com.kruna1pate1.bookesale.server.model.Category;

/**
 * Created by KRUNAL on 01-05-2022
 */
public record AddBookResponse(
        Integer bookId,
        String name,
        long price,
        String description,
        String base64image,
        Category category
) {
}
