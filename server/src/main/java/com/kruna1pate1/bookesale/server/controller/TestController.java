package com.kruna1pate1.bookesale.server.controller;

import com.kruna1pate1.bookesale.server.model.Book;
import com.kruna1pate1.bookesale.server.model.User;
import com.kruna1pate1.bookesale.server.service.BookService;
import com.kruna1pate1.bookesale.server.service.UserService;
import com.kruna1pate1.bookesale.server.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * Created by KRUNAL on 01-05-2022
 */
@RestController
@RequestMapping("/admin")
@RequiredArgsConstructor
public class TestController {

    private final JwtUtil jwtUtil;
    private final UserService userService;
    private final BookService bookService;

    @GetMapping("/dashboard")
    public ResponseEntity<User> dashboard(@RequestHeader("Authorization") String jwtHeader) {
        final String jwtToken = jwtUtil.parseJwt(jwtHeader);
        final User user =  userService.getByEmail(jwtUtil.extractUsername(jwtToken));
        return ResponseEntity.ok(user);
    }

    @GetMapping("/book/{id}")
    public ResponseEntity<Book> dashboard(@PathVariable int id) {
        final Book book =  bookService.getById(id);
        return ResponseEntity.ok(book);
    }
}
