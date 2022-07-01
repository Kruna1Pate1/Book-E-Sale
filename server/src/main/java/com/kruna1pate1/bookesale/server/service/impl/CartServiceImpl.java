package com.kruna1pate1.bookesale.server.service.impl;

import com.kruna1pate1.bookesale.server.model.Cart;
import com.kruna1pate1.bookesale.server.repository.CartRepository;
import com.kruna1pate1.bookesale.server.service.BookService;
import com.kruna1pate1.bookesale.server.service.CartService;
import com.kruna1pate1.bookesale.server.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by KRUNAL on 24-06-2022
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class CartServiceImpl implements CartService {

    private final CartRepository cartRepository;
    private final UserService userService;
    private final BookService bookService;


    @Override
    public Cart save(Cart cart) {
        log.info("Cart {} saved in database", cart);
        return cartRepository.save(cart);
    }

    @Override
    public Cart save(int userId, int bookId, int quantity) {
        Cart cart = new Cart(null, userService.getById(userId), bookService.getById(bookId), quantity);
        return cartRepository.save(cart);
    }

    @Override
    public List<Cart> getAll() {
        return cartRepository.findAll();
    }

    @Override
    public Cart getById(int id) {
        Cart cart = cartRepository.findById(id).orElseThrow(() -> {
            log.error("Cart {} not found in database", id);
            return new RuntimeException("Cart not found");
        });
        log.info("Cart with id {} found in database", id);
        return cart;
    }

    @Override
    public List<Cart> getByUserId(int id) {
        List<Cart> cartList = cartRepository.findByUserId(id);
        if (cartList.isEmpty()) {
            log.error("Cart {} not found in database", id);
            throw new RuntimeException("Cart not found");
        }

        log.info("Cart with id {} found in database", id);
        return cartList;
    }

    @Override
    public Cart saveOrUpdate(int userId, int bookId, int quantity) {
        Cart c = cartRepository.getByUserIdAndBookId(userId, bookId);
        if (c == null) {
            c = save(userId, bookId, quantity);
        } else {
            c.setQuantity(c.getQuantity()+quantity);
            update(c.getCartId(), c);
        }
        return c;
    }

    @Override
    public void deleteAll() {
        cartRepository.deleteAll();
    }

    @Override
    public void deleteById(int id) {
        cartRepository.deleteById(id);
    }

    @Override
    public void deleteByUserId(int id) {
        cartRepository.deleteByUserId(id);
    }

    @Override
    public Cart update(int id, Cart cart) {
        cart = cartRepository.save(cart);
        log.info("Cart {} updated", cart);
        return cart;
    }

    @Override
    public Cart updateQuantity(int id, int quantity) {
        Cart cart = getById(id);
        cart.setQuantity(quantity);
        return cartRepository.save(cart);
    }
}
