package com.kruna1pate1.bookesale.server.payload.response;

import com.kruna1pate1.bookesale.server.model.Book;

import java.util.Map;

/**
 * Created by KRUNAL on 24-06-2022
 */
public record CartResponse(
        int cartId,
        int userId,
        Book book,
        int quantity
) {
}
