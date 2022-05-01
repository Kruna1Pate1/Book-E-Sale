package com.kruna1pate1.bookesale.server.repository;

import com.kruna1pate1.bookesale.server.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by KRUNAL on 04-03-2022
 */
public interface BookRepository extends JpaRepository<Book, Integer> {
}
