package com.kruna1pate1.bookesale.server.repository;

import com.kruna1pate1.bookesale.server.model.Category;
import com.kruna1pate1.bookesale.server.model.ECategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Created by KRUNAL on 04-03-2022
 */
public interface CategoryRepository extends JpaRepository<Category, Integer> {
    Optional<Category> findByName(ECategory category);

    void deleteByName(ECategory category);
}
