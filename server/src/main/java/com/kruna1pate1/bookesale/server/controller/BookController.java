package com.kruna1pate1.bookesale.server.controller;

import com.kruna1pate1.bookesale.server.exception.BookNotFoundException;
import com.kruna1pate1.bookesale.server.model.Book;
import com.kruna1pate1.bookesale.server.model.ECategory;
import com.kruna1pate1.bookesale.server.payload.request.AddBookRequest;
import com.kruna1pate1.bookesale.server.service.BookService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by KRUNAL on 01-05-2022
 */
@Slf4j
@RestController
@RequestMapping("/book")
@RequiredArgsConstructor
public class BookController {

    private final BookService bookService;

    @GetMapping()
    public ResponseEntity<List<Book>> getAll() {
        return ResponseEntity.ok(bookService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Book> getById(@PathVariable int id) throws BookNotFoundException {
        return ResponseEntity.ok(bookService.getById(id));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<Book>> getByCategory(@PathVariable String category) {
        return ResponseEntity.ok(bookService.getByCategory(ECategory.valueOfIgnoreCase(category)));
    }

    @PostMapping("/add")
    public ResponseEntity<Book> add(@RequestBody AddBookRequest request) {
        final Book book = new Book(
                null,
                request.name(),
                request.price(),
                request.description(),
                request.base64image(),
                request.category()
        );

        return ResponseEntity.ok(bookService.save(book));
    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<Book> delete(@PathVariable int id) throws BookNotFoundException {
//        return ResponseEntity.ok(bookService.deleteById(id));
//    }
}
