package com.kruna1pate1.bookesale.server.controller;

import com.kruna1pate1.bookesale.server.model.BaseList;
import com.kruna1pate1.bookesale.server.model.Cart;
import com.kruna1pate1.bookesale.server.payload.request.AddCartRequest;
import com.kruna1pate1.bookesale.server.payload.request.UpdateCartRequest;
import com.kruna1pate1.bookesale.server.payload.response.CartResponse;
import com.kruna1pate1.bookesale.server.service.CartService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by KRUNAL on 24-06-2022
 */
@Slf4j
@RestController
@RequestMapping("/cart")
@RequiredArgsConstructor
public class CartController {

    private final CartService cartService;

    @GetMapping()
    public ResponseEntity<BaseList<CartResponse>> getAll() {
        List<CartResponse> cartResponseList;
        cartResponseList = cartService.getAll()
                .stream()
                .map(c -> new CartResponse(
                        c.getCartId(),
                        c.getUser().getUserId(),
                        c.getBook(),
                        c.getQuantity()
                ))
                .collect(Collectors.toList());

        return ResponseEntity.ok(new BaseList<>(cartResponseList, cartResponseList.size()));
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<BaseList<CartResponse>> getByUserId(@PathVariable int id) {

        List<CartResponse> cartResponseList;

        cartResponseList = cartService.getByUserId(id)
                .stream()
                .map(c -> new CartResponse(
                        c.getCartId(),
                        c.getUser().getUserId(),
                        c.getBook(),
                        c.getQuantity()
                ))
                .collect(Collectors.toList());

        return ResponseEntity.ok(new BaseList<>(cartResponseList, cartResponseList.size()));
    }

    @PostMapping()
    public ResponseEntity<CartResponse> add(@RequestBody AddCartRequest cart) {

        Cart c = cartService.saveOrUpdate(cart.userId(), cart.bookId(), cart.quantity());
        CartResponse response = new CartResponse(c.getCartId(), c.getUser().getUserId(), c.getBook(), c.getQuantity());
        return ResponseEntity.ok(response);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<CartResponse> delete(@PathVariable int id) {
        Cart c = cartService.getById(id);
        CartResponse response = new CartResponse(c.getCartId(), c.getUser().getUserId(), c.getBook(), c.getQuantity());
        cartService.deleteById(id);

        return ResponseEntity.ok(response);
    }

    @DeleteMapping()
    public ResponseEntity deleteAll() {

        cartService.deleteAll();
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/user/{id}")
    public ResponseEntity deleteByUserId(@PathVariable int id) {

        cartService.deleteByUserId(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}/quantity")
    public ResponseEntity<CartResponse> update(@PathVariable int id, @RequestBody Integer quantity) {

        if (quantity < 0) {
            quantity = 0;
        }
        Cart c = cartService.updateQuantity(id, quantity);
        CartResponse response = new CartResponse(c.getCartId(), c.getUser().getUserId(), c.getBook(), c.getQuantity());

        return ResponseEntity.ok(response);
    }

}
