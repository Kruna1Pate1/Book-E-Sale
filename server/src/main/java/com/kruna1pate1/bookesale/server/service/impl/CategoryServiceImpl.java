package com.kruna1pate1.bookesale.server.service.impl;

import com.kruna1pate1.bookesale.server.exception.CategoryNotFoundException;
import com.kruna1pate1.bookesale.server.model.Category;
import com.kruna1pate1.bookesale.server.model.ECategory;
import com.kruna1pate1.bookesale.server.repository.CategoryRepository;
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
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;

    @Override
    public Category save(Category category) {
        log.info("Category {} saved in database", category);
        return categoryRepository.save(category);
    }

    @Override
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }

    @Override
    public Category getById(int id) {
        Category category = categoryRepository.findById(id).orElseThrow(() -> {
            log.error("Category {} not found in database", id);
            return new CategoryNotFoundException("Category not found");
        });
        log.info("Category with id {} found in database: {}", id, category);
        return category;
    }

    @Override
    public void deleteById(int id) {
        categoryRepository.findById(id);
        categoryRepository.deleteById(id);
        log.info("Category {} deleted from database", id);
    }

    @Override
    public Category getByName(String name) {
        Category category = categoryRepository.findByName(ECategory.valueOfIgnoreCase(name)).orElseThrow(() -> {
            log.error("Category {} not found in database", name);
            return new CategoryNotFoundException("Category not found");
        });
        log.info("Category with name {} found in database: {}", name, category);
        return category;
    }

    @Override
    public void deleteByName(String name) {
        categoryRepository.deleteByName(ECategory.valueOfIgnoreCase(name));
        log.info("Category {} deleted from database", name);
    }

    @Override
    public void deleteAll() {
        log.info("All categories deleted from database");
        categoryRepository.deleteAll();
    }
}
