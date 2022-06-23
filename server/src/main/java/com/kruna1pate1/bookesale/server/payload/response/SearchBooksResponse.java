package com.kruna1pate1.bookesale.server.payload.response;

import com.kruna1pate1.bookesale.server.model.Book;

import java.util.List;

/**
 * Created by KRUNAL on 23-06-2022
 */
public record SearchBooksResponse(
        int totalRecords,
        List<Book> records
) {
}
