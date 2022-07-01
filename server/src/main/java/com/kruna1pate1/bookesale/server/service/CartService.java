package com.kruna1pate1.bookesale.server.service;

import com.kruna1pate1.bookesale.server.model.Cart;

import java.util.List;

/**
 * Created by KRUNAL on 24-06-2022
 */
public interface CartService {

    Cart save(Cart cart);

    Cart save(int userId, int bookId, int quantity);
    List<Cart> getAll();

    Cart getById(int id);

    List<Cart> getByUserId(int id);

    Cart saveOrUpdate(int userId, int bookId, int quantity);

    void deleteAll();

    void deleteById(int id);

    void deleteByUserId(int id);

    Cart update(int id, Cart cart);

    Cart updateQuantity(int id, int quantity);
}
