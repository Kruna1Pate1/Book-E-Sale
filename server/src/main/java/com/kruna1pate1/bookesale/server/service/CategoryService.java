package com.kruna1pate1.bookesale.server.service;

import com.kruna1pate1.bookesale.server.model.Category;

import java.util.List;

/**
 * Created by KRUNAL on 04-03-2022
 */
public interface CategoryService {
    Category save(Category category);

    List<Category> getAll();

    Category getById(int id);

    void deleteById(int id);

    Category getByName(String name);

    void deleteByName(String name);

    void deleteAll();
}
