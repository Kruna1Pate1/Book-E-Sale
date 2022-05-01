package com.kruna1pate1.bookesale.server.service.impl;

import com.kruna1pate1.bookesale.server.repository.CategoryRepository;
import com.kruna1pate1.bookesale.server.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

/**
 * Created by KRUNAL on 04-03-2022
 */
@Service
@RequiredArgsConstructor
public class CategoryServiceImpl implements CategoryService {

    private final CategoryRepository categoryRepository;
}
