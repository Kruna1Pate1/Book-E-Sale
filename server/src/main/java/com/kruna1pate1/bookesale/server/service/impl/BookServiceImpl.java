package com.kruna1pate1.bookesale.server.service.impl;

import com.kruna1pate1.bookesale.server.repository.BookRepository;
import com.kruna1pate1.bookesale.server.service.BookService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * Created by KRUNAL on 04-03-2022
 */
@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
}
