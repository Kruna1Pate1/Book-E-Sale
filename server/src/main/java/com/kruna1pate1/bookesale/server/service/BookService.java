package com.kruna1pate1.bookesale.server.service;

import com.kruna1pate1.bookesale.server.exception.BookNotFoundException;
import com.kruna1pate1.bookesale.server.model.Book;
import com.kruna1pate1.bookesale.server.model.Category;
import com.kruna1pate1.bookesale.server.model.ECategory;

import java.util.List;

/**
 * Created by KRUNAL on 04-03-2022
 */
public interface BookService {
    Book save(Book book);

    List<Book> getAll();

    Book getById(int id) throws BookNotFoundException;

    Book getByName(String name);

    List<Book> getStartsWith(String name);

    List<Book> getByCategory(ECategory category);

    void deleteAll();

    void deleteByName(String name);

    void deleteById(int id);
}
