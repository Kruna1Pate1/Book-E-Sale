package com.kruna1pate1.bookesale.server.controller;

import com.kruna1pate1.bookesale.server.model.Category;
import com.kruna1pate1.bookesale.server.service.CategoryService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by KRUNAL on 05-05-2022
 */
@Slf4j
@RestController
@RequestMapping("/category")
@RequiredArgsConstructor
public class CategoryController {

    private final CategoryService categoryService;

    @GetMapping()
    public ResponseEntity<List<Category>> getAll() {
        return ResponseEntity.ok(categoryService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Category> getById(@PathVariable int id) {
        return ResponseEntity.ok(categoryService.getById(id));
    }

}

