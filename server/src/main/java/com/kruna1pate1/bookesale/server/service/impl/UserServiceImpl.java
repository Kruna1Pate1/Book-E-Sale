package com.kruna1pate1.bookesale.server.service.impl;

import com.kruna1pate1.bookesale.server.exception.EmailAlreadyUsedException;
import com.kruna1pate1.bookesale.server.exception.EmailNotFoundException;
import com.kruna1pate1.bookesale.server.model.ERole;
import com.kruna1pate1.bookesale.server.model.User;
import com.kruna1pate1.bookesale.server.repository.UserRepository;
import com.kruna1pate1.bookesale.server.service.RoleService;
import com.kruna1pate1.bookesale.server.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

/**
 * Created by KRUNAL on 04-03-2022
 */
@Slf4j
@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleService roleService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        final User user = userRepository.findByEmail(email).orElseThrow(() -> {
            log.error("Email {} not found in database", email);
            return new UsernameNotFoundException("Email not found");
        });

        final String username = user.getEmail();
        final String password = user.getPassword();
        final Collection<GrantedAuthority> authorities = Collections.singleton(
                new SimpleGrantedAuthority(user.getRole().getName().name()));

        log.info("User found in database: {}", user);

        return new org.springframework.security.core.userdetails.User(username, password, authorities);
    }

    @Override
    public User save(User user) throws EmailAlreadyUsedException {
        if (isEmailExist(user.getEmail())) {
            log.error("Email {} already in use.", user.getEmail());
            throw new EmailAlreadyUsedException("Email is already used.");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        User user1 = userRepository.save(user);
        log.info("User {} saved in database", user);
        return user1;
    }

    @Override
    public List<User> getAll() {
        return userRepository.findAll();
    }

    @Override
    public User getById(int id) throws EmailNotFoundException {
        User user = userRepository.findById(id).orElseThrow(() -> {
            log.error("User {} not found in database", id);
            return new EmailNotFoundException("User Id not found");
        });
        log.info("User {} found in database", user);
        return user;
    }

    @Override
    public User getByEmail(String email) throws EmailNotFoundException {
        User user = userRepository.findByEmail(email).orElseThrow(() -> {
            log.error("Email {} not found in database", email);
            throw new EmailNotFoundException("Email not found");
        });
        log.info("User with email {} found in database", email);
        return user;
    }

    @Override
    public User setName(String email, User.Name name) {

        User user = userRepository.findByEmail(email).orElseThrow(() -> {
            log.error("Email {} not found in database", email);
            return new EmailNotFoundException("Email not found");
        });

        userRepository.setName(email, name.getFirstName(), name.getLastName());

        log.info("User updated: {}", user);
        return user;
    }

    @Override
    public User setRole(String email, ERole role) throws EmailNotFoundException {
        User user = userRepository.findByEmail(email).orElseThrow(() -> {
            log.error("Email {} not found in database", email);
            throw new EmailNotFoundException("Email not found");
        });

        userRepository.setRole(email, roleService.getByName(role.name()));
        log.info("User updated: {}", user);
        return user;
    }

    @Override
    public User update(User user) throws EmailNotFoundException {
        if (!isEmailExist(user.getEmail())) {
            log.error("User {} not found in database", user);
            throw  new EmailNotFoundException("User Id not found");
        }
        user = userRepository.save(user);
        log.info("User {} updated", user.getEmail());
        return user;
    }

    @Override
    @Transactional
    public void deleteByEmail(String email) throws EmailNotFoundException{
        if (!isEmailExist(email)) {
            log.error("Email {} not found in database", email);
            throw new EmailNotFoundException("Email not found");
        }
        userRepository.deleteByEmail(email);
        log.info("User {} deleted from database", email);
    }

    @Override
    public void deleteAll() {
        log.info("All users deleted from database");
        userRepository.deleteAll();
    }

    @Override
    public boolean isEmailExist(String email) {
        if (userRepository.existsByEmail(email)) {
            log.info("Email {} exist in database", email);
            return true;
        } else {
            log.info("Email {} does not exist in database", email);
            return false;
        }
    }
}
