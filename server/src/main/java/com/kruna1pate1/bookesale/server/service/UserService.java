package com.kruna1pate1.bookesale.server.service;

import com.kruna1pate1.bookesale.server.model.ERole;
import com.kruna1pate1.bookesale.server.model.User;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

/**
 * Created by KRUNAL on 04-03-2022
 */
public interface UserService extends UserDetailsService {
    User save(User user);

    List<User> getAll();

    User getByEmail(String email);

    User deleteByEmail(String email);

    void deleteAll();

    boolean isEmailExist(String email);

    User setName(String email, User.Name name);

    User setRole(String email, ERole role);
}
