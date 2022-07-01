package com.kruna1pate1.bookesale.server.repository;

import com.kruna1pate1.bookesale.server.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by KRUNAL on 24-06-2022
 */
public interface CartRepository extends JpaRepository<Cart, Integer> {


    @Query("SELECT c FROM Cart c WHERE c.user.userId = :id")
    List<Cart> findByUserId(int id);

    @Transactional
    @Modifying
    @Query("DELETE FROM Cart c WHERE c.user.userId = :id")
    void deleteByUserId(int id);

    @Query("SELECT c FROM Cart c WHERE c.user.userId = :userId AND c.book.bookId = :bookId")
    Cart getByUserIdAndBookId(int userId, int bookId);
}
