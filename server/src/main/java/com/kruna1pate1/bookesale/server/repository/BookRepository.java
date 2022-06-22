package com.kruna1pate1.bookesale.server.repository;

import com.kruna1pate1.bookesale.server.model.Book;
import com.kruna1pate1.bookesale.server.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

/**
 * Created by KRUNAL on 04-03-2022
 */
public interface BookRepository extends JpaRepository<Book, Integer> {

    Optional<Book> findByName(String name);

    List<Book> findTop6ByNameContainsIgnoreCase(String name);

    List<Book> findAllByCategory(Category category);

    void deleteByName(String name);
}
