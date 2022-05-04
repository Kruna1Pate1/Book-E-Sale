package com.kruna1pate1.bookesale.server.service;

import com.kruna1pate1.bookesale.server.exception.EmailAlreadyUsedException;
import com.kruna1pate1.bookesale.server.exception.EmailNotFoundException;
import com.kruna1pate1.bookesale.server.model.ERole;
import com.kruna1pate1.bookesale.server.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

/**
 * Created by KRUNAL on 04-03-2022
 */
public interface UserService extends UserDetailsService {
    User save(User user) throws EmailAlreadyUsedException;

    List<User> getAll();

    User getById(int id) throws EmailNotFoundException;

    User getByEmail(String email) throws EmailNotFoundException;

    void deleteByEmail(String email) throws EmailNotFoundException;

    void deleteAll();

    boolean isEmailExist(String email);

    User setName(String email, User.Name name);

    User setRole(String email, ERole role) throws EmailNotFoundException;

    User update(User user) throws EmailNotFoundException;
}
