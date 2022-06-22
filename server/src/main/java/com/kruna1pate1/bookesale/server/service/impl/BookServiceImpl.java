package com.kruna1pate1.bookesale.server.service.impl;

import com.kruna1pate1.bookesale.server.exception.BookNotFoundException;
import com.kruna1pate1.bookesale.server.model.Book;
import com.kruna1pate1.bookesale.server.model.Category;
import com.kruna1pate1.bookesale.server.model.ECategory;
import com.kruna1pate1.bookesale.server.repository.BookRepository;
import com.kruna1pate1.bookesale.server.service.BookService;
import com.kruna1pate1.bookesale.server.service.CategoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by KRUNAL on 04-03-2022
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final CategoryService categoryService;

    @Override
    public Book save(Book book) {
        log.info("Book {} saved in database", book);
        return bookRepository.save(book);
    }

    @Override
    public List<Book> getAll() {
        return bookRepository.findAll();
    }

    @Override
    public Book getById(int id) throws BookNotFoundException {
        Book book = bookRepository.findById(id).orElseThrow(() -> {
            log.error("Book {} not found in database", id);
            return new BookNotFoundException("Book not found");
        });
        log.info("Book with id {} found in database", id);
        return book;
    }

    @Override
    public Book getByName(String name) {
        Book book = bookRepository.findByName(name).orElseThrow(() -> {
            log.error("Book {} not found in database", name);
            return new BookNotFoundException("Book not found");
        });
        log.info("Book with name {} found in database", name);
        return book;
    }

    @Override
    public List<Book> getStartsWith(String name) {
        return bookRepository.findTop6ByNameContainsIgnoreCase(name);
    }

    @Override
    public List<Book> getByCategory(ECategory category) {
        Category category1 = categoryService.getByName(category.name());
        return bookRepository.findAllByCategory(category1);
    }

    @Override
    public void deleteAll() {
        log.info("All books deleted from database");
        bookRepository.deleteAll();
    }


    @Override
    public void deleteById(int id) {
          bookRepository.deleteById(id);
        log.info("Book {} deleted from database", id);
    }

    @Override
    public void deleteByName(String name) {
        bookRepository.deleteByName(name);
        log.info("Book {} deleted from database", name);
    }
}
